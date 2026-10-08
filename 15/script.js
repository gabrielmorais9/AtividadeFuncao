function calcularSubtotalItem(item) {
    return item.preco * item.quantidade;
}

function calcularTotalCarrinho(carrinho) {
    let totalCompra = 0;

    for (let item of carrinho) {
        totalCompra += calcularSubtotalItem(item);
    }

    return totalCompra;
}

let carrinho = [
    {
        nome: "Mouse",
        preco: 50,
        quantidade: 2
    },
    {
        nome: "Teclado",
        preco: 100,
        quantidade: 1
    },
    {
        nome: "Fone",
        preco: 80,
        quantidade: 2
    }
];

let valorTotal = calcularTotalCarrinho(carrinho);

console.log("Total da compra: R$ " + valorTotal.toFixed(2));
