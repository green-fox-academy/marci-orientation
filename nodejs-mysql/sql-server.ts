import * as mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "marci-greenfox",
  password: "password",
  database: "mydb",
  connectionLimit: 1,
});

export async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query("SELECT aut_id FROM mydb.author");
    console.log(res);
    // const rows = await conn.query("")
  } catch (err) {
    throw err;
  } finally {
    if (conn) await conn.end();
  }
}

asyncFunction();
