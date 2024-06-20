-- Deploy shopifou:04-add-triggers-name-price to pg

BEGIN;

-- Check name function
CREATE OR REPLACE FUNCTION check_if_correct_name() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF NEW.name !~ '^[a-zA-Z]{2,}[a-zA-Z ]*$' THEN
    RAISE EXCEPTION 'This name is invalid';
  END IF;

  RETURN NEW; 
END;
$$;

CREATE TRIGGER customer_check_name_before_insert
BEFORE INSERT
ON "customer"
FOR EACH ROW
EXECUTE FUNCTION check_if_correct_name();

CREATE TRIGGER article_check_name_before_insert
BEFORE INSERT
ON "article"
FOR EACH ROW
EXECUTE FUNCTION check_if_correct_name();

CREATE TRIGGER category_check_name_before_insert
BEFORE INSERT
ON "category"
FOR EACH ROW
EXECUTE FUNCTION check_if_correct_name();


-- Check total_price function
CREATE OR REPLACE FUNCTION check_if_correct_total_price() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF CAST(NEW.total_price AS TEXT) !~ '^\d{1,13}\.?\d{0,2}$' THEN
    RAISE EXCEPTION 'This price is invalid';
  END IF;

  RETURN NEW; 
END;
$$;

CREATE TRIGGER order_check_total_price_before_insert
BEFORE INSERT
ON "order"
FOR EACH ROW
EXECUTE FUNCTION check_if_correct_total_price();

CREATE TRIGGER invoice_check_total_price_before_insert
BEFORE INSERT
ON "invoice"
FOR EACH ROW
EXECUTE FUNCTION check_if_correct_total_price();


-- Check price function
CREATE OR REPLACE FUNCTION check_if_correct_price() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF CAST(NEW.price AS TEXT) !~ '^\d{1,13}\.?\d{0,2}$' THEN
    RAISE EXCEPTION 'This price is invalid';
  END IF;

  RETURN NEW; 
END;
$$;

CREATE TRIGGER article_check_price_before_insert
BEFORE INSERT
ON "article"
FOR EACH ROW
EXECUTE FUNCTION check_if_correct_price();


COMMIT;
