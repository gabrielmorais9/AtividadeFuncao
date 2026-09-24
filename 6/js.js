/*6. Crie uma função chamada formatarPessoa que receba um objeto representando
uma pessoa com as propriedades nome, idade e profissao. A função deve retornar
uma frase formatada no padrão: "Olá, meu nome é [nome], tenho [idade] anos e
trabalho como [profissao]."
*/
function receber(){
    let objeto = {}
    objeto[0] = prompt("Digite seu nome: ")
    objeto[1] = prompt("Digite sua idade: ")
    objeto[2] = prompt("Digite su profissâo: ")

    return objeto
}

function mostrar(){
    alert(`Olá, meu nome é ${pessoa[0]}, tenho ${pessoa[1]} anos e
trabalho como ${pessoa[2]}.`)
}


let pessoa = receber()

mostrar()