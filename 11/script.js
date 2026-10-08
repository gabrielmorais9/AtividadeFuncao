function calcularJurosSimples(capital, taxa, tempo) {
    let juros = capital * (taxa / 100) * tempo;
    return juros;
}

let valorInvestido = Number(prompt("Digite o capital:"));
let taxaMensal = Number(prompt("Digite a taxa de juros (%):"));
let meses = Number(prompt("Digite o tempo em meses:"));

let jurosCalculados = calcularJurosSimples(valorInvestido, taxaMensal, meses);

console.log("Juros: R$ " + jurosCalculados.toFixed(2));
