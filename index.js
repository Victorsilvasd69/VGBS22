const Pessoa = require('./pessoa');

//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const Pessoa = require('./pessoa');
    


    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreateProduto = await Produto.create({
            nome: 'mouse',
            preco:10,
            descricao: 'Um mouse USB bonião'
        })
        console.log(resultadoCreateProduto);

        const resultadoCreatePessoa = await Pessoa.create({
            nome: 'Victor Gabriel',
            cpf:12345678901,
            dt_nasc: '06/06/1994'
        })
        console.log(resultadoCreatePessoa); 

        const Produtos = await Produto.finAll();
        console.log(Produtos);

    } catch (error) {
        console.log(error);
    }
})();
