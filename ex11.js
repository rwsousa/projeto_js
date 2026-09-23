const user = {
    nome: "Wendel",
    idade: 26,
    cores: ["azul", "verde", "vermelho"],
    carro: {
        marca: "Audi",
        modelo: "RS6",
        ano: 2025,
        cor: "grafite",
        combustivel: ["gasolina", "etanol", "eletrico"]
    }
}

// console.log(user.nome)
// console.log(user.cores[2])
console.log(user.carro.marca, user.carro.modelo, user.carro.combustivel[2])