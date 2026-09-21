//Crie um algoritmo que calcule a área da parede
//O valor do pintor
//E a quantidade de tinta necessária (em baldes)

const altura = 3
const largura = 5
const ValorPintor = 15
const RendimentoTinta = 12

const area = altura * largura
const valor = area * ValorPintor
const baldes = area / RendimentoTinta

console.log(`
    A área da parede é: ${area}m2.
    O valor do pintor é: R$${valor}.
    Serão necessários ${Math.ceil(baldes)} baldes de tinta para pintar a parede.`
)