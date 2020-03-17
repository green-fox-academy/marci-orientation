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
