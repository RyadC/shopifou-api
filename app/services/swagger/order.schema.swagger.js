/**
 * A returned order
 * @typedef {object} GetOrder
 * @property {number} order_id - order ID
 * @property {string} reference - reference order
 * @property {string} date - order date created in DB
 * @property {number} value - order value
 * @property {number} customer_id - customer ID
 * @property {string} created_at - order date created in DB (can be change on DB migration)
 * @property  {string} updated_at - order update date 
*/
/* A returned Order from get all
    "order_id": 2,
    "reference": "OR_8778",
    "date": "2024-06-02T06:33:57.160Z",
    "value": "27.05",
    "customer_id": 2,
    "created_at": "2024-06-02T06:33:57.160Z",
    "updated_at": null
*/


/**
 * A requested order
 * @typedef  {object} PostOrder
 * @property {string} reference.query.required - order reference
 * @property {number} value.query.required - order value 
 * @property {number} customer_id.query.required - customer ID
 */
/* A post Order
    "reference": "OR_0005",
    "value": 50.48,
    "customer_id": 10
*/


/**
 * The order to be patched
 * @typedef {object} PatchOrder 
 * @property  {number} value.query.required - new order value - 27.05
 */
/* A patch Order
    "value": 50.48,
*/


/**
 * A returned Order from get all by article
 * @typedef {object} GetOrderByArticle
 * @property {number} order_id - order ID
 * @property {string} reference - reference order
 * @property {string} date - order date created in DB
 * @property {number} value - order value
 * @property {number} customer_id - customer ID
 * @property {string} created_at - order date created in DB (can be change on DB migration)
 * @property  {string} updated_at - order update date 
 * @property  {number} item_id - relation between order_id and article_id for in an order 
 * @property  {number} article_id - article ID in relation with the order
 * @property  {number} quantity - article quantity 
 * 
*/
/* A returned Order from get all by article
    "order_id": 2,
    "reference": "OR_8778",
    "date": "2024-06-02T06:33:57.160Z",
    "value": "27.05",
    "customer_id": 2,
    "created_at": "2024-06-02T06:33:57.160Z",
    "updated_at": null,
    "item_id": 4,
    "article_id": 2,
    "quantity": 2
*/


/**
 * A returned Order from get all by article
 * @typedef {object} GetOrderByCustomer
 * @property {number} order_id - order ID
 * @property {string} reference - order reference
 * @property {string} date - order date created in DB
 * @property {number} value - order value
 * @property {number} customer_id - customer ID in relation with the order
 * @property {string} created_at - order date created in DB (can be change on DB migration)
 * @property  {string} updated_at - order update date 
*/
/* A returned Order from get all by customer
    "order_id": 2,
    "reference": "OR_8778",
    "date": "2024-06-02T06:33:57.160Z",
    "value": "27.05",
    "customer_id": 2,
    "created_at": "2024-06-02T06:33:57.160Z",
    "updated_at": null
*/