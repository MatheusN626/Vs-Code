let numero1 = 50;
let numero2 = 20;

//variável const de escopo global
function soma(n1,n2){

    //variável const de escopo de funcao
    const resultado = n1 + n2;

    console.log("Resultado dentro da função: ",resultado)
}

soma(numero1,numero2)

console.log("Resultado fora da função: ",resultado)
