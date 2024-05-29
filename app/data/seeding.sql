BEGIN;


INSERT INTO "customer"("name", "address", "phone", "email")
  VALUES
  ('Ryad', '103, chemin du moulin de la ville', 0629685293, 'r.chair@hotmail.fr'),
  ('Samy', '10 rue du code', 0784759845, 'samy.code@hotmail.fr')
;


INSERT INTO "order"("reference", "value", "customer_id")
  VALUES
  ('OR_8795', 23.19, 1),
  ('OR_8778', 27.05, 2)
;


INSERT INTO "article"("barcode", "name", "brand", "price")
  VALUES
  (57954884154, 'stylo rouge XR collection', 'Maped', 2.63),
  (57265599644, 'stylo bleu XR collection', 'Maped', 3.54),
  (57954899644, 'céréale pétale croquant', 'Frosties', 5.65),
  (574584189964, 'confiture de fraise', 'Belle maman', 3.02),
  (570024599644, 'pâte à tartiner', 'Nutella', 5.59)
;


INSERT INTO "category"("name")
  VALUES
  ('Alimentaire'),
  ('Fouriture de bureau')
;


INSERT INTO "invoice"("reference", "total_value", "customer_id", "order_id")
  VALUES
  ('INV_4578', 23.19, 1, 1),
  ('INV_4549', 27.05, 2, 2)
;


INSERT INTO "article_has_category"("article_id", "category_id")
  VALUES
  (1, 2),
  (2, 1)
;


INSERT INTO "order_has_article"("order_id", "article_id", "quantity")
  VALUES
  (1, 1, 4),
  (1, 2, 2),
  (1, 5, 1),
  (2, 2, 2),
  (2, 3, 3),
  (2, 4, 1)
;


COMMIT;