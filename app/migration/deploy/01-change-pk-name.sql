-- Deploy shopifou:01-change-pk-name to pg

BEGIN;

-- customer table
ALTER TABLE "customer"
  RENAME COLUMN "customer_id" TO "id";

-- order table
ALTER TABLE "order"
  RENAME COLUMN "order_id" TO "id";

-- invoice table
ALTER TABLE "invoice"
  RENAME COLUMN "invoice_id" TO "id";

-- article table
ALTER TABLE "article"
  RENAME COLUMN "article_id" TO "id";

-- category table
ALTER TABLE "category"
  RENAME COLUMN "category_id" TO "id";

-- order_has_article table
ALTER TABLE "order_has_article"
  RENAME COLUMN "item_id" TO "id";

-- article_has_category table
ALTER TABLE "article_has_category"
  RENAME COLUMN "item_id" TO "id";

COMMIT;
