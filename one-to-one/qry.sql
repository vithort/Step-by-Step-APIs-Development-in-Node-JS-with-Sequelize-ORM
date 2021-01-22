-- insert users

INSERT INTO orm_relationships.users
(name, phoneNo)
VALUES('Vithor Carvalho', '555-555');


INSERT INTO orm_relationships.users
(name, phoneNo)
VALUES('Cesar Carvalho', '666-666');


INSERT INTO orm_relationships.users
(name, phoneNo)
VALUES('Caimi Carvalho', '777-777');

-- insert emails

INSERT INTO orm_relationships.emails
(emailAddress, userId)
VALUES('vithort@gmail.com', 1);


INSERT INTO orm_relationships.emails
(emailAddress, userId)
VALUES('cesarv@gmail.com', 2);

INSERT INTO orm_relationships.emails
(emailAddress, userId)
VALUES('caimitt@gmail.com', 3);

-- selects

select * from orm_relationships.users u ;
select * from orm_relationships.emails e ;

-- insert posts
INSERT INTO orm_relationships.posts
(name, context)
VALUES('Post 1', 'Content of Post 1');
INSERT INTO orm_relationships.posts
(name, context)
VALUES('Post 2', 'Content of Post 2');
INSERT INTO orm_relationships.posts
(name, context)
VALUES('Post 3', 'Content of Post 3');

-- insert comments
INSERT INTO orm_relationships.comments
(comment_text, postId)
VALUES('Comment 1', 1);
INSERT INTO orm_relationships.comments
(comment_text, postId)
VALUES('Comment 2', 1);
INSERT INTO orm_relationships.comments
(comment_text, postId)
VALUES('Comment 3', 1);
INSERT INTO orm_relationships.comments
(comment_text, postId)
VALUES('Comment 1', 2);
INSERT INTO orm_relationships.comments
(comment_text, postId)
VALUES('Comment 2', 2);
INSERT INTO orm_relationships.comments
(comment_text, postId)
VALUES('Comment 1', 3);
INSERT INTO orm_relationships.comments
(comment_text, postId)
VALUES('Comment 2', 3);
INSERT INTO orm_relationships.comments
(comment_text, postId)
VALUES('Comment 3', 3);


-- selects

select * from orm_relationships.posts;
select * from orm_relationships.comments;