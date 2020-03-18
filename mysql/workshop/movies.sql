CREATE TABLE Movies
(
    id          TINYINT(1) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_title VARCHAR(100),
    director    VARCHAR(100),
    year        DATETIME
);

INSERT INTO Movies
VALUES (null, "Godfather 2", "Francis Ford Coppola", "1974-01-01"),
       (null, "Scarface", "Brian De Palma", "1983-12-01"),
       (null, "Goodfellas", "Martin Scorsese", "1991-02-14"),
       (null, "The Departed", "Martin Scorsese", "2006-09-26");

SELECT todo_list
FROM TodoApp
         INNER JOIN Movies ON TodoApp.id = Movies.id
WHERE TodoApp.id = Movies.id;

CREATE TABLE MoviesTwo
(
    watched_id  TINYINT NOT NULL,
    to_watch_id TINYINT NOT NULL,
    movie_list  VARCHAR(50),
    FOREIGN KEY (watched_id) REFERENCES TodoApp (id),
    FOREIGN KEY (to_watch_id) REFERENCES Movies (id)
);

ALTER TABLE MoviesTwo
    RENAME COLUMN watched_id TO Todo_id;
ALTER TABLE MoviesTwo
    RENAME COLUMN to_watch_id TO Movies_id;
ALTER TABLE MoviesTwo
    RENAME COLUMN movie_list TO Movie_list;

INSERT INTO MoviesTwo
VALUES (1, 1, "Gladiator");

INSERT INTO MoviesTwo (Todo_id, Movies_id, Movie_list)
VALUES (null, null, null)

--    will get the error: [2020-03-18 20:34:42] [23000][1048] Column 'Todo_id' cannot be null

DROP TABLE Movies, MoviesTwo, TodoApp;
