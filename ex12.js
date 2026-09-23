const alunos = [
    {
        nome: "Wendel",
        idade: 30,
        notas: [9, 7, 8]
    },
    {
        nome: "Ane",
        idade: 33,
        notas: [7, 8.8, 8.5]
    },
    {
        nome: "Maria",
        idade: 29,
        notas: [3, 6, 7]
    },
    {
        nome: "Joao",
        idade: 27,
        notas: [5.5, 6.2, 4.7]
    }   
]


function calcularMedia (n1, n2, n3) {       // propriedades ficam entre parênteses (props)
    const media = (n1 + n2 + n3) / 3
    return media.toFixed(2)
}

// Exemplo: console.log(alunos[1].nome,",", alunos[1].idade, "=", alunos[1].notas)

// console.log(calcularMedia(9, 7, 8)) --> aqui eu atribuo o valor de N e a função calcula a media e exibe no console

// console.log(calcularMedia(alunos[2].notas[0], alunos[2].notas[1], alunos[2].notas[2]))



// LAÇOS DE REPETIÇÃO par calcular a média de cada aluno

// for, map, while, for it

for(let i = 0; alunos.length > i; i++) {
    const aluno = alunos[i]

    const media = calcularMedia(aluno.notas[0], aluno.notas[1], aluno.notas[2])

if (media >= 6) {
    console.log(`${aluno.nome} sua média é: ${media} - APROVADO!`)
    continue
}
console.log(`${aluno.nome} sua média é: ${media} - REPROVADO!`)
}
