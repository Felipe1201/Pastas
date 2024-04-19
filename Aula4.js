// escrever um arquivo

const fs = require ("fs");

let valores = "nome, email\n"
valores += "pedro, pedro@abc.com\n"
valores += "maria, maria@gmail.com\n"

const retorno = function(){
    console.log("terminou");
}

console.log("antes");
fs.writeFile("clientes.csv", valores, retorno);
console.log("depois");


// exercicio

//ler o arquivo exemplo.csv e imprimir na tela

