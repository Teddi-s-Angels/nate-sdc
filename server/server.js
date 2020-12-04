// server.jsx
const express = require('express');
const app = express();
const query = require('/query.js');
const PORT = 3002;

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

app.get('/products/list', (req, res) => {
	query.getProductList((err, result) => {
    if(err) {
      // Send back the error
      res.send(err)
    } else {
      // Send back O-K
      res.status(200).send(result)
    }  
  })
});

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});
