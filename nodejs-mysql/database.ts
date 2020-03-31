import * as mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "vlagyimirzon",
  database: "BookStore",
  connectionLimit: 5,
});

export async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query("SELECT aut_id FROM author;");
    console.log(res);
    // const rows = await conn.query("")
  } catch (err) {
    throw err;
  } finally {
    if (conn) await conn.end();
  }
}

asyncFunction();