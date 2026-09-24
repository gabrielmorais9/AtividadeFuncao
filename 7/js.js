/*7. Crie duas funções para processar o valor de uma venda:
a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem de
desconto, retornando o valor com o desconto aplicado.
b) processarVenda(valorBruto): recebe o valor bruto. Se for maior que 100,
chama internamente a função aplicarDesconto (com 10% de desconto) e
retorna o valor ajustado. Caso contrário, retorna o valor bruto sem
alterações.*/
function receber(){
    produto = Number(prompt("Digite o valor o seu produto: "))
}

function venda(p){
    if(p > 100){
        patualizado = desconto(p)
        mostrar(patualizado)
    }
    else{
        mostrar(p)
    }
}

function desconto(desc){
    let total = desc - (desc * 0.10)
    return total
}

function mostrar(i){
    alert (`O seu valor total atualizado é ${i}`)
}
let patualizado = 0
let produto = 0
receber()
venda(produto)