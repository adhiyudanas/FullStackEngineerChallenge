DROP TABLE IF EXISTS `users`;

---- type is used for classifying either the user is an 'employee' or 'administrator'

CREATE TABLE `users` (
 `id`               varchar(128) NOT NULL UNIQUE,
 `created_at`       datetime DEFAULT NULL,
 `updated_at`       datetime DEFAULT NULL,
 `password`         varchar(128) NOT NULL,
 `type`             varchar(128) NOT NULL,
 PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;