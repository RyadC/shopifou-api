-- Revert shopifou:01-change-pk-name from pg

BEGIN;

ALTER TABLE "article_has_category"
  RENAME COLUMN "id" TO "item_id";

ALTER TABLE "order_has_article"
  RENAME COLUMN "id" TO "item_id";
  
ALTER TABLE "category"
  RENAME COLUMN "id" TO "category_id";

ALTER TABLE "article"
  RENAME COLUMN "id" TO "article_id";
  
ALTER TABLE "invoice"
  RENAME COLUMN "id" TO "invoice_id";

ALTER TABLE "order"
  RENAME COLUMN "id" TO "order_id";

ALTER TABLE "customer"
  RENAME COLUMN "id" TO "customer_id";

COMMIT;
