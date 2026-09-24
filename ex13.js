const users = [
{
    nome: "Wendel",
    idade: 30,
    email: "wendel@gmail.com",
    senha: "teste123"
},
{
    nome: "Joao",
    idade: 16,
    email: "joao@gmail.com",
    senha: "joao1234"
}
]

const produtos = [
{
    nome: "Nescau",
    preco: 2.20,
    restrito: false,
},
{
    nome: "Café",
    preco: 15.00,
    restrito: false,
},
{
    nome: "Sao Braz",
    preco: 10.00,
    restrito: true,
},
{
    nome: "Derby",
    preco: 12.00,
    restrito: true,
}   
]

function login (email, senha) {
    if(email === "" || senha === "") {
    console.log("Email e senha são obrigatórios!")
    return
    }
    
    const userData = users.find(user => user.email === email)   //Método FIND para encontrar o user pelo email

    if(userData === undefined) { 
        console.log("Email ou Senha inválidos!")
        return
    }

    if(senha !== userData.senha) {
        console.log ("Email ou senha inválidos!")
        return
    }
    return userData
}

function listarProdutos(idade) {
    if (idade <18) {
        const produtosPermitidos = produtos.filter(produto => produto.restrito == false)  // FILTER para filtrar os produtos restritos

        return produtosPermitidos
    }

    return produtos
}

async function acessarSistema(email, senha) {
    const userData = await Promise.resolve(login(email, senha))
    
    if(userData === undefined){
    
        return
    }

    const produtos = listarProdutos (userData.idade)

    console.log(produtos)
}

acessarSistema("wendel@gmail.com", "teste123")