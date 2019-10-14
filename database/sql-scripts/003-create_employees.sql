DROP TABLE IF EXISTS `employees`;

-- we separate employees into different tables

CREATE TABLE `employees` (
 `user_id`          varchar(128) NOT NULL,
 `created_at`       datetime DEFAULT NULL,
 `updated_at`       datetime DEFAULT NULL,
 `name`             varchar(128) NOT NULL,
 `bod`              varchar(128) NOT NULL,
 `department`       varchar(128) NOT NULL,
 PRIMARY KEY (`user_id`), FOREIGN KEY `fk_user_id` (`user_id`) REFERENCES users (`id`)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;