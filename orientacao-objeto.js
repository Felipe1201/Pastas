//  orientacao de objetos

class Caneta
{
    //atributo ou propriedade
    cor = "azul";
    
    // metodo para instanciar objeto executado quando eh criado
    constructor (cor)
    {
       this.cor = cor; 
    }

    // metodo ou funcoes
    escrever() {
      console.log("escreveu" + this.cor) ;   
    }    

}

// instancia 
let bic1 = new Caneta("Verde");
let bic2 = new Caneta("Azul");
let bic3 = bic1;

bic1.escrever();

console.log (bic1);
console.log (bic2);
console.log (bic3);

if(bic1 == bic3){
    console.log("igual");
} else {
   console.log("diferente")
}


//heranca
class CanetaPontaFina extends Caneta {
     led = "Ligado";

}

let bic4 = new CanetaPontaFina ("Rosa");
console.log("bic4");
bic4.escrever();
