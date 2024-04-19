/*
vetores e loops
/*
push = incluir mais dados no array

sort = ordernar
*/

var cidade = ["curiTiba", "pinhaIS", "colombo"];

console.log(cidade);

cidade.push("araucaria");

cidade.sort();

console.log(cidade);

var ini = 0;
var fim = cidade.length - 1;

while (ini <= fim)
{
   var atual = cidade [ini]; 
   var letra = atual. charAt(0) .toUpperCase()
   var resto = atual.substr(1).toLowerCase();
   
   console.log(letra + resto);
   cidade[ini] = letra + resto
   ini = ini +1;
}
cidade.sort();
console.log(cidade);

// imprimir os nomes na tela

var fim = cidade.length -1;
for (var ini = 0; ini <= fim; ini++)
{  console.log(cidade[ini])

} 

function escrever(item)
{
    console.log(item)
}