const Book = require("./book.model.js");
// import {Book} from "./book.model"

// Create and Save Books
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Book
  const BookList = new Book({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    publisher: req.body.publisher,
    price: req.body.price,
  });

  // Save a Book in the database
  exports.create(BookList, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding a new Book.",
      });
    else res.send(data);
  });
};

// Retrieve all Books
exports.findAll = (req, res) => {
  Book.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the list of books",
      });
    else res.send(data);
  });
};

// Find a single Book with params
exports.findOne = (req, res) => {
  Book.findByTitle(req.query.category, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Book with id ${req.query.category}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Book with category " + req.query.category,
        });
      }
    } else res.send(data);
  });
};


