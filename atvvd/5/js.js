/*5. Crie uma função chamada somarElementos que receba um array de números
como parâmetro, percorra o vetor, some todos os valores e retorne o total.*/

function vetor(){
    let v = Number(prompt("Digite quantos numeros vc quer no vetor: "))
    let i = 0
    while (i < v){
        array[i] = Number(prompt("Digite um numero: "))
        i++
    }
    
}
function calcular(s){
    let total = 0
    for(let valor of s){
        total = total + valor
    }
    return total
}
function mostrar(m){
    alert(`Todos os valores do seu vetor somados são ${m}`)
}

let array = []
vetor()
let result = calcular(array)
mostrar(result)