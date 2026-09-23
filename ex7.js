//Crie um algoritmo que calcule o valor total de uma locação
//Se a quantidade de dias for maior que 10, aplicar desconto de R$50 no valor total

const dias = 12
const ValorDia = 113.42

let calculo = dias * ValorDia


if (dias > 10) { 
    calculo = calculo - 50
}

console.log(`O valor total é ${calculo}`)
