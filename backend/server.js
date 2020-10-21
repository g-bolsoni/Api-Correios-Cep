//Cria um objeto da depência  do expresss
const express = require('express');
const bodyParser =require('body-parser')
// criando o servidor 
let server  = express();
// criando depência do cors- segurança
let cors = require('cors')
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())


//criar um obj para a dependencia node correios
let Correios = require('node-correios')
//INstanciando o objeto 
let correios = new Correios();

server.get('/:cep', (req, res)=>{
    let usuario = req.params.cep // pega os dados do usuario 
    correios.consultaCEP({cep : usuario})
    .then(resultado => {
        console.log(resultado)//mostra 
        res.json(resultado) //devolve para o front 
    })
    .catch((err)=>{
        console.log(err)// mostra o erro no console
    })

})


let porta = 3001

server.get('/', (req,res)=>{ 
    res.json({message:"Aplicação com os Correios "})
})

server.listen(porta, () =>{
    console.log(`Servidor na porta ${porta}`)
})