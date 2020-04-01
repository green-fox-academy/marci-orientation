const sql = require("./database/db");

export const Book = function (book) {
  this.title = book.title;
  this.author = book.author;
  this.category = book.category;
  this.publisher = book.publisher;
  this.price = book.price;
};

Book.getAll = (result) => {
  sql.query("SELECT * FROM mydb.author", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("books: ", res);
    result(null, res);
  });
};

Book.findByTitle = (category, result) => {
  sql.query(
    `SELECT * FROM mydb.category WHERE cate_descrip = ${category}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found book: ", res[0]);
        result(null, res[0]);
        return;
      }

      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = Book;
