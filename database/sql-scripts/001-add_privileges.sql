-- Alter privileges for root@localhost

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'reviewreview';
FLUSH PRIVILEGES;