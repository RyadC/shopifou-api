/**
 * A returned customer
 * @typedef {object} GetCustomer
 * @property {number} customer_id - customer ID
 * @property {string} name - customer name 
 * @property {string} address - customer address 
 * @property {string} phone - customer phone 
 * @property {string} email - customer email 
 * @property {string} created_at - customer date created in DB (can be change on DB migration)
 * @property  {string} updated_at - customer update date 
*/
/* A returned customer from get all
      "customer_id": 1,
      "name": "Ryad",
      "address": "103, chemin du moulin de la ville",
      "phone": "629685293",
      "email": "r.chair@hotmail.fr",
      "created_at": "2024-06-02T06:33:57.160Z",
      "updated_at": null
*/


/**
 * A requested customer
 * @typedef  {object} PostCustomer
 * @property {string} name.query.required - customer name
 * @property {string} address.query.required - customer address
 * @property {string} phone.query.required - customer phone
 * @property {string} email.query.required - customer email
 */
/* A post Customer
      "name": "Madame",
      "address": "104 chemin de la fonction",
      "phone": "0475987596",
      "email": "madame@email.email"
*/


/**
 * The customer to be patched
 * @typedef {object} PatchCustomer
 * @property {string} name.query - customer name
 * @property {string} address.query - customer address
 * @property {string} phone.query - customer phone
 * @property {number} email.query - customer email
 */
/* A patch customer
    "name": "Cacahuète" 
*/
