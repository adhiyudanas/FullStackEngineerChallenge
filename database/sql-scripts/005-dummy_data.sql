-- We insert dummy user data, consisting of admin, employee A, employee B, employee C
INSERT INTO users (id, password, type)
VALUES  ('admin', 'admin', 'admin'),
        ('employee_a', 'employee_a', 'employee'),
        ('employee_b', 'employee_b', 'employee'),
        ('employee_c', 'employee_c', 'employee');

-- We insert dummy employee data, consisting of employee A, employee B, employee C
INSERT INTO employees (user_id, name, bod, department)
VALUES  ('employee_a', 'John', '01-01-1990', 'sales'),
        ('employee_b', 'Jane', '02-02-1991', 'marketing'),
        ('employee_c', 'Alex', '03-03-1992', 'product management');

-- We insert dummy reviews data for employee A and employee B. We can use employee C for demnstration
INSERT INTO reviews (target_user_id, review_content, reviewer_user_id, feedback)
VALUES  ('employee_a', 'review from employee b', 'employee_b', ''),
        ('employee_b', '', 'employee_c', '');