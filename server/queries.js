const postgres = require('postgres')
const connection = postgres.createConnection({
  host: 'localhost',
  user: 'root',
  password: flower11,
  database: product_detail
});

connection.connect();

const getProductList = function(cb) {
  connection.query(`SELECT * FROM products`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getOneProduct = function(id, cb) {
  connection.query(`SELECT * FROM products WHERE product_id = ${id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getOneProductsFeatures = function(id, cb) {
  connection.query(`SELECT * FROM product_features WHERE product_id = ${id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getProductStyles = function(id, cb) {
  connection.query(`SELECT * FROM products JOIN skus ON styles.style_id = skus.style_id WHERE products.product_id = ${id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getProductStylePhotos = function(id, cb) {
  connection.query(`SELECT thumbnail_url, photo_url FROM product_photos WHERE product_id = ${id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getCart = function(userSession, cb) {
  connection.query(`SELECT * FROM cart WHERE user_session = ${userSession}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getProductMeta = function(id, cb) {
  connection.query(`SELECT * FROM product_rating_meta WHERE product_id = ${id}`, (err, results) => {
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
}