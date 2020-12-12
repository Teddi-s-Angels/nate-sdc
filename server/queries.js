const {Client} = require('pg')
const db = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'flower11',
  database: 'product_detail',
  port: 1111
});

db.connect();

const getProductList = function(limit, cb) {

  db.query(`SELECT * FROM products LIMIT ${limit}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getOneProduct = function(product_id, cb) {
  db.query(`SELECT * FROM products WHERE product_id = ${product_id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getOneProductsFeatures = function(product_id, cb) {
  db.query(`SELECT feature, feature_value FROM product_features WHERE product_id = ${product_id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getProductStyles = function(product_id, cb) {
  db.query(`SELECT * FROM styles WHERE product_id = ${product_id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getProductStylePhotos = function(product_id, cb) {
  db.query(`SELECT style_id, thumbnail_url, photo_url FROM product_photos WHERE product_id = ${product_id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getProductStyleSkus = function(product_id, cb) {
  db.query(`SELECT style_id, size, quantity FROM skus WHERE product_id = ${product_id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getCart = function(userSession, cb) {
  db.query(`SELECT * FROM cart WHERE user_session = ${userSession}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getProductMeta = function(id, cb) {
  db.query(`SELECT one_star, two_star, three_star, four_star, five_star FROM product_rating_meta WHERE product_id = ${id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

module.exports = {
  getProductList,
  getOneProduct,
  getOneProductsFeatures,
  getProductStyles,
  getProductStylePhotos,
  getCart,
  getProductMeta,
  getProductStyleSkus,
}