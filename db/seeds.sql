INSERT INTO movies (movie_name) VALUES 
("terminator"),
("rocky"),
("jurrasic park");

INSERT INTO reviews (review, movie_id) VALUES
("good movie", 1),
("10/10", 2),
("terrible", 3);

SELECT * FROM movies; 
SELECT * FROM reviews;
SELECT movie_id, movie_name, review FROM movies INNER JOIN reviews ON movies.id = reviews.id