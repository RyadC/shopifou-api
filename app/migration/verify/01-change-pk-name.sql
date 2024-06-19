-- Verify shopifou:01-change-pk-name on pg

BEGIN;

SELECT "id" FROM "customer" WHERE false;

SELECT "id" FROM "order" WHERE false; 

SELECT "id" FROM "invoice" WHERE false; 

SELECT "id" FROM "article" WHERE false; 

SELECT "id" FROM "category" WHERE false; 

SELECT "id" FROM "order_has_article" WHERE false; 

SELECT "id" FROM "article_has_category" WHERE false; 

ROLLBACK;
