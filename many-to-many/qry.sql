
-- selects
select * from orm_many_to_many.users u;
select * from orm_many_to_many.roles r;
select * from orm_many_to_many.userroles u;

-- insert users
INSERT INTO orm_many_to_many.users
(name, email)
VALUES('Vithor Carvalho', 'vithort@gmail.com');
INSERT INTO orm_many_to_many.users
(name, email)
VALUES('Cesar Carvalho', 'cesarc@gmail.com');
INSERT INTO orm_many_to_many.users
(name, email)
VALUES('Caimi Carvalho', 'caimic@gmail.com');

-- insert roles
INSERT INTO orm_many_to_many.roles
(name)
VALUES('Administrator');
INSERT INTO orm_many_to_many.roles
(name)
VALUES('User');
INSERT INTO orm_many_to_many.roles
(name)
VALUES('Super Admin');

-- insert userroles
INSERT INTO orm_many_to_many.userroles
(userId, roleId)
VALUES(1, 3);
INSERT INTO orm_many_to_many.userroles
(userId, roleId)
VALUES(1, 2);
INSERT INTO orm_many_to_many.userroles
(userId, roleId)
VALUES(1, 1);
INSERT INTO orm_many_to_many.userroles
(userId, roleId)
VALUES(2, 2);
INSERT INTO orm_many_to_many.userroles
(userId, roleId)
VALUES(3, 2);
INSERT INTO orm_many_to_many.userroles
(userId, roleId)
VALUES(3, 1);