-- department seeds

INSERT INTO departments (department_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Human Resources');

-- roles seeds

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', '80000', 1),
('Sales Lead', '100000', 1),
('Software Engineer', '120000', 2),
('Lead Engineer', '150000', 2),
('Accountant', '125000', 3),
('Account Manager', '160000', 3),
('Lawyer', '190000', 4),
('Legal Team Lead', '250000', 4);

-- employees seeds

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Jon', 'Le', 1, 2),
('Mike', 'Lee', 2, NUll),
('Ashley', 'Oh', 3, 4),
('Kevin', 'Tran', 4, NULL),
('Leona', 'Lewis', 5, 6),
('Sarah', 'Steele', 6, NULL),
('Tom', 'Young', 7, 8),
('Tim', 'Fuller', 8, NULL);
