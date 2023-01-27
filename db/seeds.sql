-- department seeds
INSERT INTO department (dpt_name)
VALUES ('Accounting'),
  ('Marketing'),
  ('Sales'),
  ('Information Technology'),
  ('Human Resources');
-- role seeds
INSERT INTO roles (title, salary, dpt_id)
VALUES ('Sales Lead', '75000', 3),
  ('Sales Associate', '50000', 3),
  ('Tech Lead', '160000', 4),
  ('Junior Engineer', '70000', 4),
  ('Account Manager', '70000', 1),
  ('Accountant', '80000', 1),
  ('Payroll Specialist', '60000', 5),
  ('Marketing Strategist', '120000', 2),
  ('Graphic Designer', '60000', 2),
  ('HR Manager', '90000', 5);
-- employee seeds 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jon', 'Le', 2, NULL),
  ('Mike', 'Lee', 1, NULL),
  ('Leona', 'Lewis', 4, 2),
  ('Kevin', 'Tran', 2, 2),
  ('Derek', 'Lane', 3, 3),
  ('Ryan', 'Nguyen', 6, 3),
  ('River', 'Ray', 8, 4),
  ('Sarah', 'Steele', 7, 3),
  ('Robert', 'Smith', 5, 2),
  ('Steve', 'Tranoki', 4, 4),
  ('Tim', 'Fuller', 7, NULL),
  ('Tom', 'Young', 4, 2);