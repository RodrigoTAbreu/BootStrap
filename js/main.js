
function btn(){
    alert("Obrigado ! você clicou.");
    document.getElementById("tks").innerHTML= "<b>Clicado !!</b>!!";
}

function redirecionar(){
    /*window.open("https://www.uol.com.br/"); ABRE EM UMA NOVA JANELA*/ 
    window.location.href = "https://www.uol.com.br/" /* ABRE EM UMA MESMA JANELA DO SITE.*/
}   
function trocar(){
    document.getElementById("mousemove").innerHTML = "Você passou o mouse no lugar certo"
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui !!";

}
function carrega(){
    alert("Pagina Carregada !!!");
}
function funcaochange(elemento){ /* Pegando o valor selecionado no SELECT */
    console.log(elemento.value);

}

/*
function soma(n1, n2){
    return n1 + n2;

}
var validar
function valida_idade(idade){

    if (idade >= 18){
        validar = true;
}else{
    validar = false;
}
    return validar;
}
var idade = prompt("Qual a sua idade ?");
valida_idade(idade);
console.log(validar);
*/
/*
alert(soma(5,10));
*/
