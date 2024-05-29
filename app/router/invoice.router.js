import { Router } from 'express';

const invoiceRouter = Router();

invoiceRouter
  .get('/', (req, res) => {
    res.json({ok: "voici les données"})
  })
  .post('/', (req, res) => {
    res.json({ok: "merci pour les données"})
  })
  .patch('/:id', (req, res) => {
    res.json({ok: "c'est bon j'ai modifié les données"})
  })
  .delete('/:id', (req, res) => {
    res.json({ok: "c'est bon j'ai tout supprimé"})
  })


export default invoiceRouter;