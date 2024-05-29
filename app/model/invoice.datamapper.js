// INTERNAL MODULES
import client from "../config/pg.client.js";

const invoiceDatamapper = {
  async getAll() {
    const result = await client.query('SELECT * FROM "invoice";');
    console.log('result', result);

    return result.rows;
  }
};

export default invoiceDatamapper;