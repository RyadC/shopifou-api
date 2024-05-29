import pg from 'pg';

const client = new pg.Client(process.env.PG_URL);

// try {
  const connection = await client.connect();
  // console.log('connection', connection);
  
// } catch (error) {
  // console.log('error', error);
// }

export default client;