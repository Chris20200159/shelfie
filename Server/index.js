require ('dotenv').config();
const express = require('express');
const massive = require('massive');
const {CONNECTION_STRING, SERVER_PORT} = process.env;
const ctrl = require ('./controller');
const app = express();

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));
  console.log('Database is connect')
})

app.get('/api/products', ctrl.getProducts)
app.post('/api/products', ctrl.addProduct)
app.delete('/api/products/:id', ctrl.deleteProduct)
app.put('/api/products/:id', ctrl.editProduct)

