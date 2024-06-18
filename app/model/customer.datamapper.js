import client from "../config/pg.client.js";

const customerDatamapper = {
  async getAll() {
    const result = await client.query(`SELECT * FROM "customer";`);

    return result.rows; 
  },

  async getOne(id) {
    const result = await client.query(`
    SELECT * FROM "customer"
      WHERE "customer_id" = $1
    ;
    `, [id]);

    return result.rows;
  },

  async create(data) {
    const { name, address, phone, email } = data;
    const result = await client.query(`
    INSERT INTO "customer" ("name", "address", "phone", "email")
      VALUES
      ($1, $2, $3, $4)
    RETURNING *
    ;
    `, [name, address, phone, email]);

    return result.rows;
  },

  async update(id, data) {
    const { name, address, phone, email } = data;
    const result = await client.query(`
    UPDATE "customer"
      SET
        "name" = COALESCE($1, "name"),
        "address" = COALESCE($2, "address"),
        "phone" = COALESCE($3, "phone"),
        "email" = COALESCE($3, "email"),
        "updated_at" = now()
      WHERE "customer_id" = $4
    RETURNING *
    ;
    `, [name, address, phone, email, id]);

    return result.rows;
  },

  async delete(id) {
    const result = await client.query(`
    DELETE FROM "customer"
      WHERE "customer_id" = $1
    ;
    `, [id]);

    return result.rows;
  },

};


export default customerDatamapper;