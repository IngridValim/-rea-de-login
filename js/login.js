/**
 * Preciso capiturar o e-mail e senha que o usuário digitou
 * quando eu clicar em entrar.
 * 
 * Verificar se o e-mail ou senha estão errados.
 * 
 * Se tiver correto, entrar na tela principal.
 * Se tiver errado, mandar mensagem e continuar na teala de login.**/

const EMAIL = "admin@admin.com";
const SENHA = "123456";


let campoEmail = document.querySelector ("#E-mail")
let campoSenha = document.querySelector ("#Senha")
let btnEntrar = document.getElementById ("btn-entrar")

btnEntrar.addEventListener("click", () => {
 let emailDigitado = campoEmail.value;
 let senhaDigitada = campoSenha.value;

 if (emailDigitado != EMAIL || senhaDigitada != SENHA){
    alert ("E-mail ou Senha incorretos! Tente novamente");
 return;
 }

 window.open("home.html", "_self")
});
   // capiturando os valores digitados pelo usuário.


    // validando o e-mail e a senha.
    

    

    // acessar o sistema
//location.href= 'home.html'
