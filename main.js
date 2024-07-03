//jogar valores na tela

function insert(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num;

}

/*

if(resultado != ""){
    document.getElementById('resultado-null').innerHTML = ""
} else {
    document.getElementById('resultado-null').innerHTML = "0"
} */

//limpar conteudo

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

//apagar

function apagar(){
    var apaga = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = apaga.substring(0, apaga.length -1);
}

//clacular
function calculo(){
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
};