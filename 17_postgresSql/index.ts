import { Client } from "pg";

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  database: "postgres",
  password: "123456",
});

(async function () {
  try {
    await client.connect();
    console.log("successfully connected to the database");
  } catch (err: any) {
    console.log("Database connection failed", err.stack);
  }
})();

async function createTable() {
  const result = await client.query(`
    
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `);

  console.log(result);
}

async function insertValuesToTable(username: string, email: string) {
  const query = "INSERT INTO users (username, email) VALUES ($1, $2)";
  const values = [username, email];
  const result = await client.query(query, values);

  console.log(result);
}

async function printTable() {
  const result = await client.query(`SELECT * FROM users`);

  console.log("This is result:", result.rows);
  const [object] = result.rows;
  console.log(object);
}

createTable();
insertValuesToTable("MohdSameer", "example@gmail.com");
printTable();
