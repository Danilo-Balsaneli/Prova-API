const express = require('express');
const teste = express();
// teste.use(express.json);

const products = [];

teste.post('/products', (req, res) => {
    const id = req.body.codigo;
    const nome = req.body.nome;

    const produto = {
        id: id,
        nome: nome
    }
    products.push(produto);
    res.status(201).json(produto);
});

teste.get('/products', (req, res) => {
    res.status(200).send(products);
});

teste.listen(3000);