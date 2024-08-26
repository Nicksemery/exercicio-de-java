let numero1 = 10
let numero2 = 2
let operador = "*"
let adicao
let subtracao
let multiplicaco
let divisao

switch (operador) {
    case "+":
        adicao = numero1 + numero2
        console.log("Adição:", adicao)
        break;

    case "-":
        subtracao = numero1 - numero2
        console.log("Subtração:", subtracao)
        break;

    case "*":
        multiplicaco = numero1*numero2
        console.log("Multiplicação:", multiplicaco)
        break;
    
    case "/":
        divisao = numero1/numero2
        if (numero2 == 0){
            console.log("Zero não é divisível")
        }else{
            console.log("Divisão:", divisao)
        }
    default:
        console.log("Operação inválida")
        break;
}






/* Primeira parte antes do extra

let adicao = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicaco = numero1 * numero2
let divisao = numero1/numero2

console.log("Adição:", adicao)
console.log("Subtração:", subtracao)
console.log("Multiplicação:", multiplicaco)
if (numero2 == 0){
    console.log("Não é possível dividir por 0")
}else{
    console.log(divisao)
}
*/