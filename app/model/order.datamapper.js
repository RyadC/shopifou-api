import client from "../config/pg.client.js";


const orderDatamapper = {
  async getAll() {
    const result = await client.query(`SELECT * FROM "order";`);

    return result.rows; 
  },

  async getOne(id) {
    const result = await client.query(`
    SELECT * FROM "order"
      WHERE "order_id" = $1
    ;
    `, [id]);

    return result.rows;
  },

  async create(data) {
    const { reference, value, customer_id } = data;
    const result = await client.query(`
    INSERT INTO "order" ("reference", "value", "customer_id")
      VALUES
      ($1, $2, $3)
    RETURNING *
    ;
    `, [reference, value, customer_id]);

    return result.rows;
  },

  async update(id, value) {
    const result = await client.query(`
    UPDATE "order"
      SET
        "value" = $1,
        "updated_at" = now()
      WHERE "order_id" = $2
    RETURNING *
    ;
    `, [value, id]);

    return result.rows;
  },

  async delete(id) {
    const result = await client.query(`
    DELETE FROM "order"
      WHERE "order_id" = $1
    ;
    `, [id]);

    return result.rows;
  },

};

export default orderDatamapper;