// EXTERNAL MODULES
import express from 'express';

// INTERNAL MODULES
import router from './router/router.index.js';



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);


export default app;