-- Verify shopifou:03-change-value-column on pg

BEGIN;

SELECT "total_price" FROM "order" WHERE FALSE;

SELECT "total_price" FROM "invoice" WHERE FALSE;

ROLLBACK;
