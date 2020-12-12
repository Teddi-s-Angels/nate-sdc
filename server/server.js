// server.jsx
const express = require('express');
const app = express();
const query = require('/query.js');
const PORT = 3002;

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

app.get('/products/list/:limit', (req, res) => {
  const limit = req.params.limit || 5;
	query.getProductList(limit, page, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.status(200).send(result)
    }  
  })
});

app.get('/products/:product_id', (req, res) => {
  const id = req.params.product_id;
  const productResult;
	query.getOneProduct(id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      productResult = result
    }  
  })
  query.getOneProductsFeatures(id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      productResult['features'] = result
      res.status(200).send(productResult)
    }  
  })

});

app.get('/products/:product_id/styles', (req, res) => {
  let combinedresult;
  const product_id = req.params.product_id;
	query.getProductStyles(product_id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.status(200).send(result)
    }  
  })
  query.getProductStylePhotos(product_id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.status(200).send(result)
    }  
  })
  query.getProductStyleSkus(product_id, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.status(200).send(result)
    }  
  })
});

app.get('/cart/:user_session', (req, res) => {
  const session = req.params.user_session;
	query.getCart(session, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.status(200).send(result)
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
      res.status(200).send(result)
    }  
  })
});




// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});
