import { connection } from "./db";

export const Post = function (post: any) {
  this.id = post.id;
  this.title = post.title;
  this.url = post.url;
  this.timestamp = post.timestamp;
  this.score = post.score;
  this.owner = post.owner;
  this.vote = post.vote;
};

Post.create = (newPost: any, result: any) => {
  connection
    .query(
      "INSERT INTO reddit.posts VALUES ?;",
      newPost
    )
    .then((res) => {
      console.log("created post: ", { id: res.insertId, ...newPost });
      result(null, { id: res.insertId, ...newPost });
    })
    .catch((err) => {
      console.log("error: ", err);
      result(err, null);
      return;
    });
};

Post.getAll = (result: any) => {
  connection
    .query("SELECT * FROM posts")
    .then((res) => {
      console.log(res);
      result(null, res);
      return;
    })
    .catch((err) => {
      console.log("error: ", err);
      result(null, err);
      return;
    });
};
