-- Deploy shopifou:02-basics-checks-domains to pg

BEGIN;


--------------------------- CHECK CONTRAINTS ----------------------------
-- CUSTOMER
ALTER TABLE "customer"
  ADD CONSTRAINT is_correct_email
    CHECK ("email" ~ '(?:[a-z0-9!#$%&''*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])')
;

ALTER TABLE "customer"
  ADD CONSTRAINT is_correct_phone
    CHECK ("phone" ~ '^0(6|7){1}[0-9]{8}$')
;

ALTER TABLE "customer"
  ADD CONSTRAINT is_correct_address
    CHECK ("address" ~ '^[0-9]+[\w\s''\-\., ]*$')
;

-- ORDER
ALTER TABLE "order"
  ADD CONSTRAINT is_correct_order_ref
    CHECK ("reference" ~ '^(OR_){1}[0-9]{4}$')
;

-- INVOICE
ALTER TABLE "invoice"
  ADD CONSTRAINT is_correct_invoice_ref
    CHECK ("reference" ~ '^(INV_){1}[0-9]{4}$')
;

-- ARTICLE
ALTER TABLE "article"
  ADD CONSTRAINT is_correct_barcode
    CHECK ("barcode" ~ '^(\d){13}$|^(\d){8}$')
;

COMMIT;
