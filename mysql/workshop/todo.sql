CREATE TABLE todo_app
(
    id        TINYINT(1)   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    todo_list VARCHAR(100) NOT NULL,
    done_list VARCHAR(100) NOT NULL
);

INSERT INTO todo_app
VALUES (null, "play games", "do laundry"),
       (null, "listen to matreview", "get up from bed");

rename TABLE todo_app TO TodoApp;

