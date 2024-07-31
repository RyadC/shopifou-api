/**
 * A returned category
 * @typedef {object} GetCategory
 * @property {number} category_id - category ID
 * @property {string} name - category name 
 * @property {string} created_at - category date created in DB (can be change on DB migration)
 * @property  {string} updated_at - category update date 
*/
/* A returned category from get all
      "category_id": 1,
      "name": "Alimentaire",
      "created_at": "2024-06-02T06:33:57.160Z",
      "updated_at": null
*/


/**
 * A requested category
 * @typedef  {object} PostCategory
 * @property {string} name.query.required - category name
 */
/* A post Category
    "name": "jeux pour enfants",
*/


/**
 * The category to be patched
 * @typedef {object} PatchCategory 
 * @property  {string} name.query.required - new category name
 */
/* A patch category
    "name": "outils de cuisine",
*/
