/*8. Crie duas funções para autenticação de acesso:
a) validarSenha(senha): retorna true se a string senha tiver pelo menos 6
caracteres, ou false caso contrário.
b) autenticarUsuario(usuario, senha): chama internamente a função
validarSenha. Se a senha for válida, retorna "Acesso concedido para
[usuario]". Caso contrário, retorna "Senha muito curta para o usuário
[usuario]".
*/


/*Tive dificuldadde pra realizar a repetição e erros de escopo , alem de erros de igitação*/

function autenticar(){
    let verifica
    
    let usuario = prompt("Digite seu usuario: ")
    do{
        let senha = prompt("Digite sua senha: ")
        verifica = validar(senha,usuario)
    }while (verifica === true)
    
}

function validar(v,user){
    let quantidade = v.length
    if(quantidade >=6 ){
        alert(`Acesso concedido ao usuario ${user}`)
        return false
    }
    else {
        alert("Senha muito curta")
        return true
    }
}
autenticar()