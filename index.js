const Pessoa = require('./pessoa');

//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const Pessoa = require('./pessoa');
    const http = require('http')



    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreateProduto = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonião'
        })
        console.log(resultadoCreateProduto);

        const resultadoCreatePessoa = await Pessoa.create({
            nome: 'Victor Gabriel',
            cpf: 12345678901,
            dt_nasc: '06/06/1994'
        })
        console.log(resultadoCreatePessoa);

        /*
        const Produtos = await Produto.finAll();
        console.log(Produtos);
       
       const produto = await Produto.findByPk(1);
       //console.log(produto);
       produto.nome = 'PC Lento';

       /const resultadoSave = await produto.save();
       console.log(resultadoSave);

       Produto.destroy({ where: { id: 1 }})
       */

        http.createServer(async (req, res) => {
            if (req.url === '/produtos') {
                const produtos = await Produto.findAll();
                res.writeHead(200, { 'Content-type': 'application/json' });
                res.end(JSON.stringify(produtos)); //Enviar os dados como JSON
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Bem-vindo à API de produtos!');
            }
        }).listen(3000, () => console.log('Servidor rodando na porta 3000'))

    } catch (error) {
        console.log(error);
    }
})();
