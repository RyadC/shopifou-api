// EXTERNAL MODULES
import express from 'express';
import hbs from 'express-handlebars';
import path from 'node:path';

// INTERNAL MODULES
import router from './router/router.index.js';
import apiDocumentation from './config/config.swagger.js';



const app = express();

app.engine('.hbs', hbs.engine({
  extname: '.hbs',
  defaultLayout: 'layout', // main is the default
  helpers: {

  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(import.meta.dirname, `/views`));

app.use(express.static(path.join(import.meta.dirname, '/static')));


app.use(express.json());
app.use(express.urlencoded({extended: true}));

apiDocumentation(app);

app.use(router);


export default app;