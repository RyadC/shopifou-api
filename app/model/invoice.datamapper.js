// INTERNAL MODULES
import client from "../config/pg.client.js";

const invoiceDatamapper = {
  async getAll() {
    const result = await client.query('SELECT * FROM "invoice";');

    return result.rows;
  },

  async getAllByCustomer(customerId) {
    const result = await client.query(`
      SELECT * FROM "invoice"
        WHERE "customer_id" = $1
      ;`, [customerId]);

    return result.rows;  
  },

  async getOne(id) {
    const result = await client.query(`
    SELECT * FROM "invoice"
      WHERE "invoice_id" = $1
    ;`, [id]);

    return result.rows;
  },

  async create(data) {
    const { reference, total_value, customer_id, order_id } = data;

    const result = await client.query(`
      INSERT INTO "invoice" ("reference", "total_value", "customer_id", "order_id")
        VALUES 
        ($1, $2, $3, $4)
      RETURNING * 
      ;
    `, [reference, total_value, customer_id, order_id]);

    return result.rows;
  },

  async update(id, totalValue) {
    const result = await client.query(`
      UPDATE "invoice"
        SET 
          "total_value" = $1,
          "updated_at" = now()
        WHERE "invoice_id" = $2
      RETURNING *
      ;
    `, [totalValue, id]);

    return result.rows;
  },

  async delete(id) {
    const result = await client.query(`
      DELETE FROM "invoice"
        WHERE invoice_id = $1
      ;
    `, [id]);

    return result.rows;
  }
};

export default invoiceDatamapper;