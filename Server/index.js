const express = require('express');
const ctrl = require ('./controller');
const app = express();
const port = 4004;

app.use(express.json());



app.listen(port, () => console.log(`Server listening up on port ${port}`));