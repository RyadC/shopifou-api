// EXTERNAL MODULES
import express from 'express';

// INTERNAL MODULES
import router from './router/router.index.js';
import apiDocumentation from './libraries/api.doc.swagger.js';



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);


apiDocumentation(app);

export default app;