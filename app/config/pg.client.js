import pg from 'pg';

const client = new pg.Pool({
  connectionString: process.env.PG_URL
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
})()

// const client = (async () => await connectionClient())();
// console.log(client);
export default client;