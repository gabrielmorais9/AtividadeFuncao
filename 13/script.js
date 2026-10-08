function converterRealParaEuro(valor, cotacao) {
    return valor / cotacao;
}

function converterEuroParaReal(valor, cotacao) {
    return valor * cotacao;
}

function converterRealParaDolar(valor, cotacao) {
    return valor / cotacao;
}

function converterDolarParaReal(valor, cotacao) {
    return valor * cotacao;
}

function mostrarMenu() {
    let opcao;

    do {
        opcao = prompt(
            "CONVERSOR DE MOEDAS\n\n" +
            "1 - Real para Euro\n" +
            "2 - Euro para Real\n" +
            "3 - Real para Dólar\n" +
            "4 - Dólar para Real\n" +
            "5 - Fechar programa\n\n" +
            "Escolha uma opção:"
        );

        if (opcao === "1") {
            let reais = Number(prompt("Digite o valor em reais:"));
            let cotacaoEuro = Number(prompt("Digite a cotação do euro em reais:"));
            let resultado = converterRealParaEuro(reais, cotacaoEuro);
            console.log("Valor em euros: € " + resultado.toFixed(2));

        } else if (opcao === "2") {
            let euros = Number(prompt("Digite o valor em euros:"));
            let cotacaoEuro = Number(prompt("Digite a cotação do euro em reais:"));
            let resultado = converterEuroParaReal(euros, cotacaoEuro);
            console.log("Valor em reais: R$ " + resultado.toFixed(2));

        } else if (opcao === "3") {
            let reais = Number(prompt("Digite o valor em reais:"));
            let cotacaoDolar = Number(prompt("Digite a cotação do dólar em reais:"));
            let resultado = converterRealParaDolar(reais, cotacaoDolar);
            console.log("Valor em dólares: US$ " + resultado.toFixed(2));

        } else if (opcao === "4") {
            let dolares = Number(prompt("Digite o valor em dólares:"));
            let cotacaoDolar = Number(prompt("Digite a cotação do dólar em reais:"));
            let resultado = converterDolarParaReal(dolares, cotacaoDolar);
            console.log("Valor em reais: R$ " + resultado.toFixed(2));

        } else if (opcao !== "5") {
            console.log("Opção inválida.");
        }

    } while (opcao !== "5");

    console.log("Programa encerrado.");
}

mostrarMenu();
