-- Deploy shopifou:03-change-value-column to pg

BEGIN;

ALTER TABLE "invoice"
  RENAME COLUMN "total_value" TO "total_price"
;

ALTER TABLE "order"
  RENAME COLUMN "value" TO "total_price"
;
COMMIT;
