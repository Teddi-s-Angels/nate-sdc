CREATE DATABASE IF NOT EXISTS product_detail

USE product_detail

CREATE TABLE IF NOT EXISTS products (
  product_id INTEGER AUTO_INCREMENT UNIQUE PRIMARY KEY,
  product_name TEXT,
  slogan TEXT,
  product_description TEXT,
  category TEXT,
  default_price TEXT,
  feature_id INTEGER FOREIGN KEY REFERENCES product_features(feature_id),
)

CREATE TABLE IF NOT EXISTS product_features (
  feature_id INTEGER AUTO_INCREMENT UNIQUE PRIMARY KEY,
  product_id INTEGER FOREIGN KEY REFERENCES products(product_id),
  feature TEXT,
  feature_value TEXT
)

CREATE TABLE IF NOT EXISTS product_photos (
  photo_id INTEGER AUTO_INCREMENT UNIQUE PRIMARY KEY,
  product_id INTEGER FOREIGN KEY REFERENCES products(product_id),
  style_id INTEGER FOREIGN KEY REFERENCES styles(style_id),
  thumbnail_url TEXT,
  photo_url TEXT,
)

CREATE TABLE IF NOT EXISTS styles (
  style_id INTEGER AUTO_INCREMENT UNIQUE PRIMARY KEY,
  product_id INTEGER FOREIGN KEY REFERENCES products(product_id),
  product_style_id INTEGER,
  style_name TEXT,
  original_price TEXT,
  sale_price TEXT,
  default_style INTEGER,
  sku_id INTEGER FOREIGN KEY REFERENCES skus(sku_id)
)

CREATE TABLE IF NOT EXISTS skus (
  sku_id INTEGER AUTO_INCREMENT UNIQUE PRIMARY KEY,
  style_id INTEGER FOREIGN KEY REFERENCES styles(style_id),
  XS INTEGER,
  S INTEGER, 
  M INTEGER,
  L INTEGER,
  XL INTEGER,
  XXL INTEGER
)

CREATE TABLE IF NOT EXISTS product_rating_meta (
  meta_id INTEGER AUTO_INCREMENT UNIQUE PRIMARY KEY,
  product_id INTEGER FOREIGN KEY REFERENCES products(product_id),
  one_star INTEGER, 
  two_star INTEGER, 
  three_star INTEGER, 
  four_star INTEGER, 
  five_star INTEGER
)

CREATE TABLE IF NOT EXISTS cart (
  cart_id INTEGER AUTO_INCREMENT UNIQUE PRIMARY KEY,
  user_session INTEGER,
  product_id INTEGER FOREIGN KEY REFERENCES products(product_id),
  active BOOLEAN
)