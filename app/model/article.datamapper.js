import client from "../config/pg.client.js";


const articleDatamapper = {
  async getAll() {
    const result = await client.query(`SELECT * FROM "article";`);

    return result.rows; 
  },

  async getAllByCategory(categoryId) {
    const result = await client.query(`
      SELECT * FROM "article" 
        JOIN "article_has_category" 
          ON "article"."article_id" = "article_has_category"."article_id"
        WHERE "category_id" = $1
      ;
      `, [categoryId]);

    return result.rows;
  },

  async getOne(id) {
    const result = await client.query(`
    SELECT * FROM "article"
      WHERE "article_id" = $1
    ;
    `, [id]);

    return result.rows;
  },

  async create(data) {
    const { barcode, name, brand, price } = data;
    const result = await client.query(`
    INSERT INTO "article" ("barcode", "name", "brand", "price")
      VALUES
      ($1, $2, $3, $4)
    RETURNING *
    ;
    `, [barcode, name, brand, price]);

    return result.rows;
  },

  async update(id, data) {
    const { barcode, name, brand } = data;
    const result = await client.query(`
    UPDATE "article"
      SET
        "barcode" = COALESCE($1, "barcode"),
        "name" = COALESCE($2, "name"),
        "brand" = COALESCE($3, "brand"),
        "updated_at" = now()
      WHERE "article_id" = $4
    RETURNING *
    ;
    `, [barcode, name, brand, id]);

    return result.rows;
  },

  async delete(id) {
    const result = await client.query(`
    DELETE FROM "article"
      WHERE "article_id" = $1
    ;
    `, [id]);

    return result.rows;
  },

};

export default articleDatamapper;