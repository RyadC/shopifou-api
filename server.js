// EXTERNAL MODULES
import 'dotenv/config';
import { createServer } from 'node:http';

// INTERNAL MODULES
import app from './app/app.js';


const server = createServer(app);


const PORT = process.env.PORT || 3000;


server.listen(PORT, () => {
  console.log(`Server is running on port 3300, show it http://localhost:${PORT}`);
});