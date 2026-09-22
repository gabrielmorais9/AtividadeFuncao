/*3. Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura
em Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32).*/

function receber(){
    let cel= Number(prompt("Digite a temperatura em Celcius: "))
    return cel
}
function calcular(v){
    let fa = (v*1.8)+32
    return fa
}
function mostrar(i){
    alert(`A temperatura atual em Fahrenheit é ${i}`)
}
let celcius = receber()
let f = calcular(celcius)
mostrar(f)