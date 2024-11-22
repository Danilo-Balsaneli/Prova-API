const express = require('express');
const server = express();
server.use(express.json);


const users = [];
//products = [];

server.post('/user', (req, res) => {
    // const nome = req.body.nome;
    // const id = req.body.id;

    // const user = {
    //     name: nome,
    //     id: id
    // }
    
    users.push(req.body);
    res.status(201).json(req.body);
    res.json({ mensagem: 'Usuario cadastrado.' });

})

server.get('/user', (req, res) => {
    res.status(200).send(users);
})

server.post('/users', (req, res) => {       //Adiciona usuarios para a lista users
    const id = req.body.codigo;
    const name = req.body.nome;
    const cpf = req.body.cpf;
    const email = req.body.email;

    const user = {
        id: codigo,
        name: nome,
        cpf: cpf,
        email: email
    };
    user.push(users);

    res.json({ mensagem: 'Usuario cadastrado.' });
});

server.get('/users', (req, res) => {  //Busca todos os usuarios
    res.status(200).send(users);
    //res.json(users);
});

server.get('/users/:id', (req, res) => { //Busca o usuario pelo id
    
});

server.put('users/:id', (req, res) => {     //Atualiza os usuarios pelo id

});

server.delete('/users/', (res, req) => {    //Deleta os usuario pelo id
    const id = req.params.id;
    console.log(id);
});

// server.post('products', (req, res) => {     //Adiciona produtos na lista products
//     products.push(req.body);
//     res.status(201).json(req.body);
// });

// server.get('products', (req, res) => {      //Busca todos os produtos
//     res.status(200).send(products);
// });

// server.get('products/:id', (req, res) => {      //Busca o produto pelo id

// });

//server.get('products')

server.listen(3000);
