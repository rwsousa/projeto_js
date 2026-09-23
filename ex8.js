// Crie um algoritmo que calcule o valor total da locação;
// Se a quantidade de dias for maior que 10;
// Aplicar um acréscimo de 20% no valor total se for menor que 5 dias;
// Aplicar um desconto de 15% no valor total.

const dias = 12
const ValorDia = 135.33

let locacao = dias * ValorDia

if (dias > 10) { 
    const desconto = locacao * 0.15

    locacao = locacao - desconto
}

if (dias < 5) {
    const acrescimo = locacao * 0.20

    locacao = locacao + acrescimo
}


console.log(`O valor total é ${locacao.toFixed(2)}`)