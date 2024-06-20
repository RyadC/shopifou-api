-- Revert shopifou:03-change-value-column from pg

BEGIN;

ALTER TABLE "order"
  RENAME COLUMN "total_price" TO "value"
;

ALTER TABLE "invoice"
  RENAME COLUMN "total_price" TO "total_value"
;

COMMIT;
