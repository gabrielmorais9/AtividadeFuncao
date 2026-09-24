/*9. Crie duas funções para avaliar o desempenho de um aluno:
a) calcularMediaArray(notas): recebe um array de números (notas) e retorna
a média aritmética simples dessas notas.
b) avaliarAluno(aluno): recebe um objeto aluno contendo as propriedades
nome e notas (onde notas é um array com 3 notas). A função deve chamar
internamente a função calcularMediaArray. Se a média for ≥ 60, retorna
"Aprovado", caso contrário, retorna "Reprovado".*/


function receber(){
    nome = prompt("Digite o nome do aluno: ")
    for(let i = 0;i <3 ; i ++){
        notas[i] = Number(prompt("Digite a nota : "))
    }
}

function media(n){
    let soma = 0
    for (let i of n.notas){
        soma= soma + i 
    }
    total= soma / 3
    return total
}

function avaliar(aluno){
    medio = media(aluno)
    if (medio >= 60){
        alert ("Aprovado")
    }
    else{
        alert("Reprovado")
    }
}

const notas = []
let nome 
const aluno = {nome , notas}
receber()
avaliar(aluno)