/*2. Escreva uma função chamada ehPar que receba um número como parâmetro e
retorne true se o número for par e false caso seja ímpar.*/
function prinp(){
    alert("Seu numero é par")
}

function prini(){
    alert("Seu numero é impar")
}

function receber() {
    n = Number(prompt("Digite um número: "))
}
function comparar(v){
    let resto= n % 2
    if (resto == 0){
        prinp()
    }
    else {
        prini()
    }
}
let n 
receber()
comparar(n)
