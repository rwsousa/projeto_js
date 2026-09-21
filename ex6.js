//Crie um algoritmo que calcule o valor total de uma locação
//Se a quantidade de dias for maior que 10, aplicar desconto de R$50 no valor total

const dias = 9
const ValorDia = 113.42

const calculo = dias * ValorDia


if (dias > 10) { 
    console.log(`O valor total é ${calculo - 50}`)
}
else {
    console.log(`O valor total é ${calculo}`)
}