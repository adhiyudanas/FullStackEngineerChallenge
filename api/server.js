// express setting
let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
  
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'Connected to the review database' })
});

// mysql connection
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'reviewreview',
    database: 'employee_performance_review'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    // check connection
    console.log('Connected to the MySQL server.');
});

/**
 * API activity goes from here
 */

/**
 * get all employees for admin view
 * after collecting all employee list, we create thumbnail view for all the employee
 */
app.get('/employees', function (req, res) {
  connection.query('SELECT * FROM employees', function (error, results, fields) {
      if (error) throw error;
      return (
        res.send({data: results})
      )
  });
});

/**
 * get single user for each employee page
 */

app.get('/employees/:id', function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
   return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  connection.query('SELECT * FROM employees where user_id=?', user_id, function (error, results, fields) {
   if (error) throw error;
    return res.send({ error: false, data: results[0]});
  });
});

/**
 * from the admin view, admin can add new employee
 * for the time being, admin can only add name, department, and DOB
 * Adding new employee to the 'employees' table doesn't mean adding the user account
 */

app.post('/addNewEmployee', function (req, res) {
  let addNewEmployee = req.body.addNewEmployee;
  if (!addNewEmployee) {
    return res.status(400).send({ error:true, message: 'Please fill all the requirement' });
  }
  connection.query("INSERT INTO employees SET ? ", { addNewEmployee: addNewEmployee }, 
    function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New employee added successfully.' });
    });
});

/**
 * assign feedback request to employee from admin view
 * admin can assign feedback to the employee
 * (to be implemented)
 * firsthand, we need to check whether the assignment already exist or not
 */

/**
 * When the employee open their main page, we query from the database
 * for each employee's feedback
 */

app.get('/employeeFeedback/:id', function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
   return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  connection.query('SELECT * FROM reviews where target_user_id=?', user_id, function (error, results, fields) {
   if (error) throw error;
    return res.send({ error: false, data: results});
  });
});

/**
 * When the employee open their main page, we query from the database
 * for each employee's requested feedback
 */
app.get('/employeeRequestedFeedback/:id', function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
   return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  connection.query('SELECT * FROM reviews where reviewer_user_id=?', user_id, function (error, results, fields) {
   if (error) throw error;
    return res.send({ error: false, data: results});
  });
});

/**
 * employee fill assigned feedback request
 * after entering the feedback, the information will be sent to the database
 */

app.put('/submitFeedback/:id', function (req, res) {
  let user_id = req.params.id;
  let feedback = req.body.feedback;
  if (!feedback) {
    return res.status(400).send({ error: feedback, message: 'Please provide feedback' });
  }
  connection.query("UPDATE reviews SET feedback_content = ? WHERE target_user_id = ?", [feedback, user_id], 
   function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'feedback has been submitted.' });
   });
});

/**
 * employee respond to the feedback given
 * when employee received feedback either from the admin or another employee,
 * they can submit response toward the feedback given
 */

app.put('/submitRequestedFeedback/:id', function (req, res) {
  let user_id = req.params.id;
  let reviews = req.body.reviews;
  if (!reviews) {
    return res.status(400).send({ error: reviews, message: 'Please provide reviews' });
  }
  connection.query("UPDATE reviews SET review_content = ? WHERE reviewer_user_id = ?", [reviews, user_id], 
   function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'reviews has been submitted.' });
   });
});

// set port
app.listen(3000, function () {
  console.log('Node app is running on port 3000');
});

module.exports = app;