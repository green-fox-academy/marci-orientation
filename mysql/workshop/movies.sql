create TABLE Movies
(
    id          INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_title VARCHAR(100),
    director    VARCHAR(100),
    year        DATETIME
);

insert into Movies (movie_title, director, year)
values ("Godfather 2", "Francis Ford Coppola", "1974-01-01"),
       ("Scarface", "Brian De Palma", "1983-12-01"),
       ("Goodfellas", "Martin Scorsese", "1991-02-14"),
       ("The Departed", "Martin Scorsese", "2006-09-26");

select Movies.movie_title from Movies join todo_app on Movies.id = todo_app.todo_list;

create TABLE WatchedMovies
(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    watched_list INTEGER,
    FOREIGN KEY (watched_list) REFERENCES Movies (id)

);
