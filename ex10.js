const user = {
    nome: "Wendel",
    email: "wendel@gmail.com",
    senha: "123456"
}

const email = "wendel@gmail.com"
const senha = "1234567"

if (user.email !== email || user.senha !== senha) {
    console.log(`Email ou senha incorreto`)
    return
}

console.log ("Login efetuado com sucesso!")  // aspas " " (simples ou duplas) SOMENTE em textos
// console.log (`Bem vindo, ${user.nome}!`)  // crase ` ` sempre que usar um objeto DINÂMICO