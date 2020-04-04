import { dbConfig } from "../config/db.config";
import * as mysql from "mariadb";

export const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection
  .getConnection()
  .then((conn) => {
    console.log("connected ! connection id is " + conn.threadId);
    conn.release();
  })
  .catch((err) => {
    console.log("not connected due to error: " + err);
  });


