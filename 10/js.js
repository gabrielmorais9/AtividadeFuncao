/*10. Escreva um programa completo para análise de uma turma contendo três
funções:
a) verificarAprovacao(nota): retorna true se a nota for ≥ 60 e false caso
contrário.
b) contarAprovados(listaAlunos): recebe um array de objetos (onde cada
objeto é um aluno com {nome, nota}). Percorre a lista, chama a função
verificarAprovacao para cada aluno e retorna o total de alunos aprovados.
c) executarAnalise(): função principal que solicita via prompt o cadastro de 4
alunos (armazenando-os num array de objetos), chama contarAprovados e
exibe o total de aprovados no console.log.*/

function executarAnalise(){
    const escola = []
    cadastro(escola)
    const aprovados = contarAprovados(escola)
    alert(`Total de aprovados: ${aprovados}`)
}

function cadastro(escola){
    for(let i = 0; i < 4; i++){
        const aluno = {}
        let nome = prompt("Digite o nome do aluno: ")
        let nota = Number(prompt("Digite a nota do aluno: "))

        aluno.nome = nome
        aluno.nota = nota
        escola[i] = aluno
    }
}

function contarAprovados(escola){
    let contador = 0

    for(let n of escola){
        if(verificarAprovacao(n.nota)){
            contador++
        }
    }

    return contador
}

function verificarAprovacao(nota){
    if(nota >= 60){
        return true
    } else {
        return false
    }
}

executarAnalise()
