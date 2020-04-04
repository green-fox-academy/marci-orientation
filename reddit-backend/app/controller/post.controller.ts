import { Post } from "../models/post.model";

exports.getAllPosts = (req: any, res: any) => {
  Post.getAll((err: any, data: any) => {
    res.setHeader("Content-Type", "application/json");
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving posts.",
      });
    else res.send({ posts: data });
  });
};

exports.create = (req: any, res: any) => {
  if (!req.body) {
    res.status(400).send({ message: "Post can not be empty!" });
  }

  const newPost = new Post({
    title: req.body.title,
    url: req.body.url,
  });

  Post.create(newPost, (err: any, data: any) => {
    res.setHeader("Content-Type", "application/json");
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating a new post.",
      });
    else res.send(data);
  });
};
