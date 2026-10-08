function exibirResumoProduto(produto) {
    return "Produto: " + produto.nome +
           " | Preço: R$ " + produto.preco.toFixed(2) +
           " | Estoque: " + produto.quantidade + " unidades.";
}

let produtoEstoque = {
    nome: "Teclado",
    preco: 89.90,
    quantidade: 15
};

let resumo = exibirResumoProduto(produtoEstoque);

console.log(resumo);
