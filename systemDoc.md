How to start the application:

1. Start the database container
    // inside the container, we inserted dummy data to the database for demonstration purpose
    a. cd database
    b. docker build -t review-database .
    c. docker run -d -p 3307:3306 --name review-database -e MYSQL_ROOT_PASSWORD=reviewreview review-database
2. Start the server side
    a. cd api
    b. npm install && npm start
3. Start the client side
    a. cd client
    b. npm install && npm run dev
    d. access localhost:8080

In the future, we can manage all these commands by using docker-compose, but due to limitation of time we need to initiate separately

Assumption:
1. You already installed docker
2. install vue in your development
    - future development will include dockerizing vue and integrate using docker-compose


Node.js as the API and mysql as the database
for the front end we are using 