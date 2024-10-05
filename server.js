const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
var port = process.env.PORT || 3000;

let products = [];
let orders = [];
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("API deployment successful");
});

app.post('/product', (req, res) => {
    const product = req.body;

    console.log(product);
    products.push(product);

    res.send('Product is added to the database');
});

app.get('/product', (req, res) => {
    res.json(products);
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === id);
    res.json(product);
});

app.delete('/product/:id', (req, res) => {
    const id = req.params.id;
    products = products.filter(p => p.id !== id);
    res.send('Product deleted');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
