const express = require('express');
const axios = require('axios');
const app = express();

const PORT = 3000;

app.use(express.json())
app.use(express.static(__dirname));

app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to the 4 services present in the Team 2 FEC project.');
});

// app.get('/*', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.get('/products/id/:id', (req, res) => {
  var newId = req.params.id;
  axios.get(`http://3.139.9.29:3003/products/id/${newId}`).catch(err => console.error(err)).then(response => res.send(response.data))
})

app.post('/api/products', (req, res) => {
  var info = req.body
  axios.post('http://3.139.9.29:3003/api/products', info).catch(err => console.error(err)).then(() => res.send('Done'));
})

app.listen(PORT, () => {
  console.log(`Starting Proxy at ${PORT}`);
});







