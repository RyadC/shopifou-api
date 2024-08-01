// EXTERNAL MODULES
import pg from "pg";

const client = new pg.Client({
  // connectionString: process.env.PG_URL,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// async function connectionClient() {
//   try {
//     return await pool.connect();

//   } catch (error) {
//     console.log(error);
//   }

// }

(async () => {
  await client.connect();
})();

// const client = (async () => await connectionClient())();
// console.log(client);
export default client;
