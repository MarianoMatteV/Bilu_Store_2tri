const express = require('express');
const cors = require('cors');
//definir a porta
const porta = 3001;
const app = express();
//habilitar o cors e utilizar json
app.use(cors());
app.use(express.json());
//testar
app.listen(porta, () => console.log(`rodando na porta ` + porta));
 
 
const connection = require('./db_config');
 
app.post('/usuario/cadastrar', (request, response) => {
    let params = Array(
        // request.body.usuario,
        // request.body.id,
        request.body.cpf,
        request.body.nome,
        request.body.email,
        request.body.senha
    );
 console.log(params)
    // let query = "INSERT INTO usuarios(usuario, id, cpf, nome, email, senha) values(?,?,?,?,?,?);";
    let query = "INSERT INTO usuarios(cpf, nome, email, senha) values(?,?,?,?);";
   
    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso",
                data: results
            })
 
        } else {
            response
            .status(400)
            .json({
                sucess: false,
                message: "Sem sucesso",
                data: err
            })
        }
    })
});
 
app.post('/produto/cadastrar' , (request, response) => {
    let params = Array(
        request.body.ID_produto,
        request.body.nome_produto,
        request.body.preco_produto,
        request.body.quantidade_produto,
        request.body.descricao_produto
    );
    let query = "INSERT INTO produtos(ID_produto, nome_produto, preco_produto, quantidade_produto, descricao_produto) values(?,?,?,?,?);";
    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso",
                data: results
            })
 
        } else {
            response
            .status(400)
            .json({
                sucess: false,
                message: "Sem sucesso",
                data: err
            })
        }
    })
});
 
 
app.post('/usuario/login', (request, response) => {
    let params = Array(
        request.body.email,
        request.body.senha
    );
    let query = "INSERT INTO usuarios(email, senha) values(?,?);";
 
    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                succes: true,
                message: "Sucesso",
                data: results
            })
       
 
        } else {
            response
            .status(400)
            .json({
                sucess: false,
                message: "Sem sucesso",
                data: err
            })
 
        }
    })
})