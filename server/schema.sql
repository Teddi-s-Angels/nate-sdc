-- CREATE TABLE IF NOT EXISTS products (
--   product_id INTEGER PRIMARY KEY,
--   product_name TEXT,
--   slogan TEXT,
--   product_description TEXT,
--   category TEXT,
--   default_price TEXT
-- );

-- CREATE TABLE IF NOT EXISTS product_features (
--   feature_id INTEGER UNIQUE PRIMARY KEY,
--   product_id INTEGER REFERENCES products(product_id),
--   feature TEXT,
--   feature_value TEXT
-- );

-- CREATE TABLE IF NOT EXISTS product_photos (
--   photo_id INTEGER UNIQUE PRIMARY KEY,
--   product_id INTEGER REFERENCES products(product_id),
--   thumbnail_url TEXT,
--   photo_url TEXT
-- );

-- CREATE TABLE IF NOT EXISTS styles (
--   style_id INTEGER UNIQUE PRIMARY KEY,
--   product_id INTEGER REFERENCES products(product_id),
--   product_style_id INTEGER,
--   style_name TEXT,
--   original_price TEXT,
--   sale_price TEXT,
--   isDefault INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS skus (
--   sku_id INTEGER UNIQUE PRIMARY KEY,
--   product_id INTEGER REFERENCES products(product_id),
--   style_id INTEGER REFERENCES styles(style_id),
--   size TEXT,
--   quantity INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS product_rating_meta (
--   meta_id INTEGER  UNIQUE PRIMARY KEY,
--   product_id INTEGER REFERENCES products(product_id),
--   one_star INTEGER, 
--   two_star INTEGER, 
--   three_star INTEGER, 
--   four_star INTEGER, 
--   five_star INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS cart (
--   cart_id INTEGER UNIQUE PRIMARY KEY,
--   user_session INTEGER,
--   product_id INTEGER REFERENCES products(product_id),
--   active INTEGER
-- );

-- COPY products FROM '/Users/nathanielfoss/Desktop/sei/sdc/mark_fec_branch_copy/fakeData/fakeProductData.csv' WITH (FORMAT csv);

-- COPY products(product_id, product_name, slogan, product_description, category, default_price)
-- FROM '/Users/nathanielfoss/Desktop/sei/sdc/mark_fec_branch_copy/fakeData/fakeProductData.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY product_features(product_id, feature, feature_value)
-- FROM '../fakeData/fakeFeatureData.csv'
-- DELIMITER ','
-- CSV HEADER;

\copy product_photos_(product_id, thumbnail_url, photo_url)
FROM '/Users/nathanielfoss/Desktop/sei/sdc/mark_fec_branch_copy/fakeData/fakePhotoData.csv'
DELIMITER ','
CSV HEADER;

-- COPY styles(product_id, product_id, product_style_id, style_name, original_price, sale_price, default?)
-- FROM '../fakeData/fakeStyleData.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY skus(product_id, style_id, size, quantity)
-- FROM '../fakeData/fakeSkuData.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY product_rating_meta(product_id, one_star, two_star, three_star, four_star, five_star)
-- FROM '../fakeData/fakeRatingData.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY cart(user_session, product_id, active)
-- FROM '../fakeData/fakeCartData.csv'
-- DELIMITER ','
-- CSV HEADER;