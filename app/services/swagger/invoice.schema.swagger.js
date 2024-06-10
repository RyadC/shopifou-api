// DEFINITION DOF SCHEMA RETURNED OR POST BY/INTO THE API

/**
 * An invoice returned
 * @typedef {object} GetInvoice 
 * @property  {number} invoice_id - invoice ID
 * @property  {string} reference - invoice reference
 * @property  {string} date - invoice date created in DB
 * @property  {number} total_value - invoice total value
 * @property  {number} order_id - order ID
 * @property  {string} created_at - invoice date created in DB (can be change on DB migration)
 * @property  {string} updated_at - invoice update date
 */

/**
 * An invoice requested
 * @typedef {object} PostInvoice 
 * @property  {string} reference.query.required - invoice reference - INV_4578
 * @property  {number} total_value.query.required - invoice total value 
 * @property  {number} customer_id.query.required - customer ID
 * @property  {number} order_id.query.required - order ID
 */

/**
 * The invoice to be patched
 * @typedef {object} PatchInvoice 
 * @property  {number} total_value.query.required - new invoice total value - 27.05
 */

/* Schema requested */
//    "reference": "INV_0003",
//    "total_value": 50.48,
//    "customer_id": 2,
//    "order_id": 4

/* Schema returned */
//    "invoice_id": 2,
//    "reference": "INV_4549",
//    "date": "2024-06-02T06:33:57.160Z",
//    "total_value": "27.05",
//    "customer_id": 2,
//    "order_id": 2,
//    "created_at": "2024-06-02T06:33:57.160Z",
//    "updated_at": null
