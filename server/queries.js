

var getProductList = function(cb) {
  connection.query(`SELECT * FROM product`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

var getOneProduct = function(id, cb) {
  connection.query(`SELECT * FROM product WHERE product_id = ${id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

var getOneProductsFeatures = function(id, cb) {
  connection.query(`SELECT * FROM product_feature WHERE product_id = ${id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

var getProductStyles = function(id, cb) {
  connection.query(`SELECT * FROM product JOIN skus ON styles.style_id = skus.style_id JOIN product_photos ON style.style_id = product_photos.style_id WHERE product.product_id = ${id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

var getProductStylePhotos = function(id, cb) {
  connection.query(`SELECT thumbnail_url, photo_url FROM product_photos WHERE product_id = ${id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

var getCart = function(userSession, cb) {
  connection.query(`SELECT * FROM cart WHERE user_session = ${userSession}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

var getProductMeta = function(id, cb) {
  connection.query(`SELECT * FROM product_rating_meta WHERE product_id = ${id}`, (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}