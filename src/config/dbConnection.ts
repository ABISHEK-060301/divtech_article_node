import { createPool, Pool } from "mysql";

const pool: Pool = createPool({
  host: "localhost",
  user: "root",
  database: "abishek",
  connectionLimit: 1000,
});

// Creating pool
pool.getConnection((err, res) => {
  if (err) {
    console.log("Db fails to connect", err);
  } else {
    console.log("DataBase connected.");
    res.release();
  }
});

export default pool;
