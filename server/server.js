// server.jsx
const express = require('express');
const app = express();
const query = require("./queries");
const PORT = 3002;
require('newrelic');

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

app.get('/products/list/:limit', (req, res) => {
  const limit = req.params.limit || 5;
	query.getProductList(limit, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.status(200).send(result.rows)
    }  
  })
});

app.get('/products/:product_id', (req, res) => {
  const id = req.params.product_id;
  let productResult = {};
	query.getOneProduct(id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      productResult = result.rows[0];
    }  
  })
  query.getOneProductsFeatures(id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      productResult['features'] = result.rows
      res.status(200).send(productResult)
    } 
  })
});

app.get('/products/:product_id/styles', (req, res) => {
  let combinedResult;
  let styleOnePictures = [];
  let styleTwoPictures = [];
  let styleOneSkus = {};
  let styleTwoSkus = {};
  const product_id = req.params.product_id;
	query.getProductStyles(product_id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      combinedResult = result.rows
    }  
  })
  query.getProductStylePhotos(product_id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      result.rows.map((row) => {
        if(row.style_id === '1') {
          delete row.style_id
          styleOnePictures.push(row)
        } else if(row.style_id = '2') {
          delete row.style_id
          styleTwoPictures.push(row)
        }
      })
      if(styleOnePictures) {
        combinedResult[0]['photos'] = styleOnePictures
      }
      if(styleTwoPictures.length) {
        combinedResult[1]['photos'] = styleTwoPictures
      }
    }
  })
  query.getProductStyleSkus(product_id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      result.rows.map((row) => {
        if(row.style_id === 1) {
          delete row.style_id
          styleOneSkus[row.size] = row.quantity
        } else if(row.style_id === 2) {
          delete row.style_id
          styleTwoSkus[row.size] = row.quantity
        }
      })
      if(combinedResult[0]) {
        combinedResult[0]['skus']
        combinedResult[0]['skus'] = styleOneSkus
      }

      if(combinedResult[1]) {
        combinedResult[1]['skus'] = styleTwoSkus
      }
      res.status(200).send(combinedResult)
      // res.status(200).send(result.rows)
    }  
  })
});

app.get('/cart/:user_session', (req, res) => {
  const session = req.params.user_session;
	query.getCart(session, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.status(200).send(result.rows[0])
    }  
  })
});

app.post('/cart/:user_session&:product_id', (req, res) => {
  const session = req.params.user_session;
  const product_id = req.params.product_id;
	query.getCart(session, productId, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.status(200).send(result)
    }  
  })
});

app.get('/reviews/:product_id/meta', (req, res) => {
  const product_id = req.params.product_id;
	query.getProductMeta(product_id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      let final = {'product_id': req.params.product_id, 'ratings':{}}
      final['ratings'][1] = result.rows[0]['one_star']
      final['ratings'][2] = result.rows[0]['two_star']
      final['ratings'][3] = result.rows[0]['three_star']
      final['ratings'][4] = result.rows[0]['four_star']
      final ['ratings'][5] = result.rows[0]['five_star']
      res.status(200).send(final)
    }  
  })
});




// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});
