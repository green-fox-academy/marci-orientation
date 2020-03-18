CREATE TABLE Movies
(
    id          INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_title VARCHAR(100),
    director    VARCHAR(100),
    year        DATETIME
);

INSERT INTO Movies (movie_title, director, year)
VALUES ("Godfather 2", "Francis Ford Coppola", "1974-01-01"),
       ("Scarface", "Brian De Palma", "1983-12-01"),
       ("Goodfellas", "Martin Scorsese", "1991-02-14"),
       ("The Departed", "Martin Scorsese", "2006-09-26");

SELECT Movies.movie_title FROM Movies JOIN todo_app ON Movies.id = todo_app.todo_list;

CREATE TABLE WatchedMovies
(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    watched_list INTEGER,
    FOREIGN KEY (watched_list) REFERENCES Movies (id)

);

CREATE TABLE Movies
(
    id           INTEGER PRIMARY KEY AUTO_INCREMENT,
    movie_title  VARCHAR(100),
    director     VARCHAR(100),
    year         DATETIME,
    watched_list VARCHAR(50) NOT NULL ,
    FOREIGN KEY (watched_list) REFERENCES todo_app (todo_list)

);
