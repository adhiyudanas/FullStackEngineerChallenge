# Create basic image
FROM mysql:5.7

# create database
ENV MYSQL_DATABASE employee_performance_review

# run all sql scripts inside the folder to create tables and insert dummy data
COPY ./sql-scripts/ /docker-entrypoint-initdb.d/