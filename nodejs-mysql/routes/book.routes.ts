module.exports = (app) => {
  const list = require("../book.controller.js");

  // Create a new Book
  app.post("/customers", list.create);

  // Retrieve all Books
  app.get("/books", list.findAll);

  // Retrieve a single Book with params
  app.get("books/:category/", list.findOne);
};
