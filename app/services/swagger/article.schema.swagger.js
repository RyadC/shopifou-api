/**
 * A returned article
 * @typedef {object} GetArticle
 * @property {number} article_id - article ID
 * @property {string} barcode - article barcode 
 * @property {string} name - article name 
 * @property {string} brand - article brand 
 * @property {string} price - article price 
 * @property {string} created_at - article date created in DB (can be change on DB migration)
 * @property  {string} updated_at - article update date 
*/
/* A returned article from get all
      "article_id": 1,
      "barcode": "57954884154",
      "name": "stylo rouge XR collection",
      "brand": "Maped",
      "price": "2.63",
      "created_at": "2024-06-02T06:33:57.160Z",
      "updated_at": null
*/

/**
 * A returned article
 * @typedef {object} GetArticleByCategory
 * @property {number} article_id - article ID
 * @property {string} barcode - article barcode 
 * @property {string} name - article name 
 * @property {string} brand - article brand 
 * @property {string} price - article price 
 * @property {string} created_at - article date created in DB (can be change on DB migration)
 * @property  {string} updated_at - article update date 
 * @property {number} item_id - attached id between an article and a category  
 * @property {number} category_id - category id which we search all articles
 * 
*/
/* A returned article from get all
      "article_id": 1,
      "barcode": "57954884154",
      "name": "stylo rouge XR collection",
      "brand": "Maped",
      "price": "2.63",
      "created_at": "2024-06-02T06:33:57.160Z",
      "updated_at": null,
      "item_id": 1,
      "category_id": 2
*/

/**
 * A requested article
 * @typedef  {object} PostArticle
 * @property {string} barcode.query.required - article barcode
 * @property {string} name.query.required - article name
 * @property {string} brand.query.required - article brand
 * @property {number} price.query.required - article price
 */
/* A post Article
      "article_id": 12,
      "barcode": "9475312745450",
      "name": "lot de 3 feutres",
      "brand": "Mapped",
      "price": "100.25",
      "created_at": "2024-06-18T11:48:11.045Z",
      "updated_at": null
*/


/**
 * The article to be patched
 * @typedef {object} PatchArticle
 * @property {string} barcode.query - article barcode
 * @property {string} name.query - article name
 * @property {string} brand.query - article brand
 * @property {number} price.query - article price
 */
/* A patch article
    "name": "outils de cuisine",
*/
