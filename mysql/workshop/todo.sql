CREATE TABLE todo_app
(
    id        INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    todo_list VARCHAR(100),
    done_list VARCHAR(100)
);

INSERT INTO todo_app (todo_list, done_list)
VALUES ("play games", "do laundry"),
       ("listen to matreview", "get up from bed");