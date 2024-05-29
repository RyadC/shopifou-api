BEGIN;


DROP TABLE IF EXISTS "customer";
DROP TABLE IF EXISTS "order";
DROP TABLE IF EXISTS "invoice";
DROP TABLE IF EXISTS "article";
DROP TABLE IF EXISTS "category";
DROP TABLE IF EXISTS "order_has_article";
DROP TABLE IF EXISTS "article_has_category";


CREATE TABLE "customer"
(
  "customer_id"           INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name"                  TEXT NOT NULL,
  "address"               TEXT NOT NULL,
  "phone"                 TEXT NOT NULL UNIQUE,
  "email"                 TEXT NOT NULL UNIQUE,
  "created_at"            TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at"            TIMESTAMPTZ
);

CREATE TABLE "order"
(
  "order_id"              INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "reference"             TEXT NOT NULL UNIQUE,
  "date"                  TIMESTAMPTZ DEFAULT now(),
  "value"                 NUMERIC NOT NULL,
  "customer_id"           INTEGER REFERENCES "customer"("customer_id"),
  "created_at"            TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at"            TIMESTAMPTZ
);

CREATE TABLE "invoice"
(
  "invoice_id"            INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "reference"             TEXT NOT NULL UNIQUE,
  "date"                  TIMESTAMPTZ DEFAULT now(),
  "total_value"           NUMERIC NOT NULL,
  "customer_id"           INTEGER REFERENCES "customer"("customer_id"),
  "order_id"              INTEGER REFERENCES "order"("order_id"),
  "created_at"            TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at"            TIMESTAMPTZ
);

CREATE TABLE "article"
(
  "article_id"            INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "barcode"               TEXT NOT NULL UNIQUE,
  "name"                  TEXT NOT NULL,
  "brand"                 TEXT NOT NULL,
  "price"                 NUMERIC NOT NULL,
  "created_at"            TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at"            TIMESTAMPTZ
);

CREATE TABLE "category"
(
  "category_id"           INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name"                  TEXT NOT NULL UNIQUE,
  "created_at"            TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at"            TIMESTAMPTZ
);

CREATE TABLE "order_has_article"
(
  "item_id"               INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "order_id"              INTEGER REFERENCES "order"("order_id"),
  "article_id"            INTEGER REFERENCES "article"("article_id"),
  "quantity"              INTEGER NOT NULL CHECK("quantity" > 0),
  "created_at"            TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at"            TIMESTAMPTZ,

                        UNIQUE ("order_id", "article_id")
);

CREATE TABLE "article_has_category"
(
  "item_id"             INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "article_id"          INTEGER REFERENCES "article"("article_id"),
  "category_id"         INTEGER REFERENCES "category"("category_id"),
  "created_at"            TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at"            TIMESTAMPTZ,

                        UNIQUE ("article_id", "category_id")

);



ALTER SEQUENCE "customer_customer_id_seq" RESTART WITH 1;
ALTER SEQUENCE "order_order_id_seq" RESTART WITH 1;
ALTER SEQUENCE "invoice_invoice_id_seq" RESTART WITH 1;
ALTER SEQUENCE "article_article_id_seq" RESTART WITH 1;
ALTER SEQUENCE "category_category_id_seq" RESTART WITH 1;
ALTER SEQUENCE "order_has_article_item_id_seq" RESTART WITH 1;
ALTER SEQUENCE "article_has_category_item_id_seq" RESTART WITH 1;


COMMIT;