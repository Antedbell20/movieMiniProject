const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(express.static(""))

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Antedbell20!',
    database: 'movie_db'
  },
  console.log(`Connected to the movie_db database.`)
);
db.connect((err => {
    if (err) throw err;
    console.log('MySQL Connected');
}));

app.get("/api/movies", (req, res) => { 
let sql = "SELECT * FROM movies;";
db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
})

});
app.get("/api/movie-reviews", (req, res) => { 
    let sql = "SELECT movie_id, movie_name, review FROM movies INNER JOIN reviews ON movies.id = reviews.id";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json(result);
    })
    
    });

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

// db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
//   console.log(results);
// });

// db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
//   console.log(results);
// });