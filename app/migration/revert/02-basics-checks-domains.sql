-- Revert shopifou:02-basics-checks-domains from pg

BEGIN;

-- ARTICLE
ALTER TABLE "article"
  DROP CONSTRAINT is_correct_barcode
;

-- INVOICE
ALTER TABLE "invoice"
  DROP CONSTRAINT is_correct_invoice_ref
;

-- ORDER
ALTER TABLE "order"
  DROP CONSTRAINT is_correct_order_ref
;

-- CUSTOMER
ALTER TABLE "customer"
  DROP CONSTRAINT is_correct_address
;

ALTER TABLE "customer"
  DROP CONSTRAINT is_correct_phone
;

ALTER TABLE "customer"
  DROP CONSTRAINT is_correct_email
;

COMMIT;
