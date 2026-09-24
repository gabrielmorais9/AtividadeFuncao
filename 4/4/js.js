/*4. Crie uma função chamada calcularIMC que receba o peso (kg) e a altura (m). A
função deve calcular o IMC e retornar uma string com a classificação:
• IMC < 18.5: "Abaixo do peso"
• IMC entre 18.5 e 24.9: "Peso normal"
• IMC ≥ 25.0: "Sobrepeso"
*/

function receber() {
    kg = Number(prompt("Digite seu peso em kilos: "))
    m = Number(prompt("Digite sua altura em metros: "))
}

function calc(a,b){
    let t = kg / (m*m)
    return t
}
function ver(imc){
     if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else {
        return "Sobrepeso"; 
    }
}
function most(i){
    let corrigido = peso.toFixed(2)
    alert(`Seu imc é ${i} e ele é ${corrigido}`)
}


let kg , m 
receber()
let peso = calc(kg,m)
let result = ver(peso)
most(result)