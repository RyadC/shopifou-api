-- Revert shopifou:04-add-triggers-name-price from pg

BEGIN;

DROP TRIGGER IF EXISTS article_check_price_before_insert 
  ON "article" 
  CASCADE
;

DROP FUNCTION IF EXISTS check_if_correct_price();


DROP TRIGGER IF EXISTS invoice_check_total_price_before_insert 
  ON "invoice" 
  CASCADE
;

DROP TRIGGER IF EXISTS order_check_total_price_before_insert 
  ON "order" 
  CASCADE
;

DROP FUNCTION IF EXISTS check_if_correct_total_price() CASCADE;

DROP TRIGGER IF EXISTS category_check_name_before_insert 
  ON "category" 
  CASCADE
;

DROP TRIGGER IF EXISTS article_check_name_before_insert 
  ON "article" 
  CASCADE
;

DROP TRIGGER IF EXISTS customer_check_name_before_insert 
  ON "customer" 
  CASCADE
;

DROP FUNCTION IF EXISTS check_if_correct_name() CASCADE;

COMMIT;
