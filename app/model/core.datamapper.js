import client from "../config/pg.client";

class CoreDatamapper {
  static tableName


  // -> Handling basic "getAll" and the other endpoints like "getAllByCustomer"
  async getAll(endpointData = null) {
    let query = `SELECT * FROM "${this.tableName}"`;
    

    if(endpointData) {
      query += `WHERE "id" = $1;`;
    }

    const result = await client.query(query, [endpointData.id]);
    
    return result.rows;
  }

  async getOne(id) {
    const result = await client.query(`
    SELECT * FROM "${this.tableName}"
      WHERE "id" = $1
    ;
    `, [id]);

    return result.rows;
  }

  async create(data) {
    let columnsArray = Object.keys(data).map(key => `"${key}"`);

    let valuesArray = Object.values(data);

    let dynamicDollars = Object.keys(data).map((_, index) => `$${index + 1}`);

    const query = `
    INSERT INTO "${this.tableName}"(${columnsArray})
      VALUES(${dynamicDollars})
    RETURNING *
    ;
    `;

    const result = await client.query(query, [valuesArray])

    // const result = await client.query(`
    //   INSERT INTO "${this.tableName}" ("reference", "total_value", "customer_id", "order_id")
    //     VALUES 
    //     ($1, $2, $3, $4)
    //   RETURNING * 
    //   ;
    // `, [reference, total_value, customer_id, order_id]);

    return result.rows;
  }

  async update(id, data) {
    let columnsArray = Object.keys(data).map((key, index) => `"${key}" = $${index + 1}`);

    let valuesArray = Object.values(data);

    const query = `
    UPDATE "${this.tableName}"
      SET 
        ${columnsArray},
        "updated_at" = now()
      WHERE "id" = $${columnsArray.length + 1}
    RETURNING *
    ;
    `;

    const result = await client.query(query, [id, valuesArray]); 

    // const result = await client.query(`
    //   UPDATE "invoice"
    //     SET 
    //       "total_value" = $1,
    //       "updated_at" = now()
    //     WHERE "invoice_id" = $2
    //   RETURNING *
    //   ;
    // `, [totalValue, id]);

    return result.rows;
  }

  async delete(id) {
    const result = await client.query(`
      DELETE FROM "${this.tableName}"
        WHERE "id" = $1
      ;
    `, [id]);

    return result.rows;
  }
}