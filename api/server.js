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
    password: 'supersecret',
    database: 'employee_performance_review'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
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
 * from the admin view, admin can add new employee
 * for the time being, admin can only add name, department, and DOB
 * Adding new employee to the 'employees' table doesn't mean adding the user account
 */

/**
 * get employees data by user id
 * when the admin click the employees thumbnail, we request that certain employee data
 * by querying with userid
 */


/**
 * assign feedback request to employee from admin view
 * admin can assign feedback to the employee
 */


/**
 * When the employee open their main page, we query from the database
 * for each employee's feedback or assigned feedback request
 */

/**
 * employee fill assigned feedback request
 * after entering the feedback, the information will be sent to the database
 */


/**
 * employee respond to the feedback given
 * when employee received feedback either from the admin or another employee,
 * they can submit response toward the feedback given
 */

// set port
app.listen(3000, function () {
  console.log('Node app is running on port 3000');
});

module.exports = app;