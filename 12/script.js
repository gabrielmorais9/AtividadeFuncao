function verificarOrcamento(valorProduto, saldoDisponivel) {
    if (saldoDisponivel >= valorProduto) {
        return true;
    }

    return false;
}

let precoProduto = Number(prompt("Digite o valor do produto:"));
let dinheiroDisponivel = Number(prompt("Digite o saldo disponível:"));

let podeComprar = verificarOrcamento(precoProduto, dinheiroDisponivel);

if (podeComprar) {
    console.log("O saldo é suficiente para comprar o produto.");
} else {
    console.log("O saldo não é suficiente para comprar o produto.");
}
