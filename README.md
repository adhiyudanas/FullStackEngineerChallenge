# Full Stack Developer Challenge
This is an interview challengs. Please feel free to fork. Pull Requests will be ignored.

## Requirements
Design a web application that allows employees to submit feedback toward each other's performance review.

*Partial solutions are acceptable.*  It is not necessary to submit a complete solution that implements every requirement.

### Admin view
* Add/remove/update/view employees
* Add/update/view performance reviews
* Assign employees to participate in another employee's performance review

### Employee view
* List of performance reviews requiring feedback
* Submit feedback

## Challenge Scope
* High level description of design and technologies used
* Server side API (using a programming language and/or framework of your choice)
  * Implementation of at least 3 API calls
  * Most full stack web developers at PayPay currently use Java, Ruby on Rails, or Node.js on the server(with MySQL for the database), but feel free to use other tech if you prefer
* Web app
  * Implementation of 2-5 web pages using a modern web framework (e.g. React or Angular) that talks to server side
    * This should integrate with your API, but it's fine to use static responses for some of it 
* Document all assumptions made
* Complete solutions aren't required, but what you do submit needs to run.

## How to complete this challenge
* Fork this repo in github
* Complete the design and code as defined to the best of your abilities
* Place notes in your code to help with clarity where appropriate. Make it readable enough to present to the PayPay interview team
* Complete your work in your own github repo and send the results to us and/or present them during your interview

## What are we looking for? What does this prove?
* Assumptions you make given limited requirements
* Technology and design choices
* Identify areas of your strengths
* This is not a pass or fail test, this will serve as a common ground that we can deep dive together into specific issues

-------------------------------------------  System Documentation from here ---------------------------------------------

### How to start the application:
1. clone this repository
2. Start the database container
    * cd database
    * docker build -t review-database .
    * docker run -d -p 3307:3306 --name review-database -e MYSQL_ROOT_PASSWORD=reviewreview review-database
3. Start the server side
    * cd api
    * npm install && npm start
4. Start the client side
    * npm install -g @vue/cli
    * cd client
    * npm install && npm run dev
    * access localhost:8080 with your browser

### Database
* We are using mysql database deployed in a docker container
* All the requirements are inclued in the database folder
* We also provided sql scripts for inserting table and dummy data for development purpose because there are several          limitation that hasn't been implemented yet
* Mysql is chosen because of flexibility with Node.js and due to time limitation

### Server side (API)
* all the files are included in the 'api' directory
* We decided to use Node.js for our API
* server.js manages all the communications with the client side
* in the server.js, at least we are using Express, cors, and body parser

### Client Side
* Vue.js is used for developing the client side interface
* By using Vue.js, we can separate the interfaces in component and structure them systematically
* Separating all the components allows us to reuse the component; therefore minimizing sizes and increase performance
* Easy to refactor, fix, maintenance also another factors why we are using vue.js
* We also separate the CSS files into separate directory, following FLOCSS principle (Foundation, Layout, Component)

### Future Development
1. In the future, we can manage all these commands by using docker-compose to build all together
2. We should deploy 'models' for communication with the database for minimizing error
3. We can also use typescript for avoiding parameter type error
4. Sass and SCSS should also be implemented for easy management and structured styling (for each component)
5. CSS naming should be maintaned clearly to increase style flexibility and avoid confusing for adding more style and component in the future
6. Integrated test should be deployed
7. Finishing the system

### General Requirement:
1. Node.js
2. Docker installed and activated
3. Vue cli installed globally (for the time being)

### Screenshots
![Alt text](/screenshots/login.png?raw=true "Login Page")

![Alt text](/screenshots/admin_view.png?raw=true "Admin Page")

![Alt text](/screenshots/employee_thumbnail.png?raw=true "List of employee")

![Alt text](/screenshots/employee_view.png?raw=true "Employee Page")