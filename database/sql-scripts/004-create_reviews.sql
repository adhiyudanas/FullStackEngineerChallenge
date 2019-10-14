DROP TABLE IF EXISTS `reviews`;

-- We will be using sampe vue component for viewing each employee activities, including reviews and feedback

CREATE TABLE `reviews` (
 `id`               int(11) AUTO_INCREMENT,
 `created_at`       datetime DEFAULT NULL,
 `updated_at`       datetime DEFAULT NULL,
 `target_user_id`   varchar(128) NOT NULL,
 `review_content`   varchar(128) NOT NULL,
 `reviewer_user_id` varchar(128) NOT NULL,
 `feedback_content` varchar(128) NOT NULL,
 PRIMARY KEY (`id`), FOREIGN KEY `fk_target_user_id` (`target_user_id`) REFERENCES users (`id`),
 FOREIGN KEY `fk_reviewer_user_id` (`reviewer_user_id`) REFERENCES users (`id`)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;