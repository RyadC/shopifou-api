import client from "../config/pg.client.js";


const categoryDatamapper = {
  async getAll() {
    const result = await client.query(`SELECT * FROM "category";`);

    return result.rows; 
  },

  async getOne(id) {
    const result = await client.query(`
    SELECT * FROM "category"
      WHERE "category_id" = $1
    ;
    `, [id]);

    return result.rows;
  },

  async create(data) {
    const { name } = data;
    const result = await client.query(`
    INSERT INTO "category" ("name")
      VALUES
      ($1)
    RETURNING *
    ;
    `, [name]);

    return result.rows;
  },

  async update(id, name) {
    const result = await client.query(`
    UPDATE "category"
      SET
        "name" = $1,
        "updated_at" = now()
      WHERE "category_id" = $2
    RETURNING *
    ;
    `, [name, id]);

    return result.rows;
  },

  async delete(id) {
    const result = await client.query(`
    DELETE FROM "category"
      WHERE "category_id" = $1
    ;
    `, [id]);

    return result.rows;
  },

};

export default categoryDatamapper;