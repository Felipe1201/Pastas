/* ECMA 6 2012

   ES6 -> ES2012

*/   

let nome = "FELIPE";
nome = 123;


let x = 321;

if (x > 0){

    let nome = "abc";
    console.log(nome);
}

console.log(nome);

function SOMA(N1, N2)

{

   return N1 + N2;

}

let RES = SOMA(2, 3);
console.log(RES);

//como exportar dados
module.exports = SOMA;


