// Get all Posts

module.exports = (app: any) => {
  const posts = require("../controller/post.controller");
  app.get("/posts", posts.getAllPosts);

  app.post("/posts", posts.create);
};
