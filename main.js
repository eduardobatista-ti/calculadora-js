//função para jogar numeros na tela

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//função clear

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

//função backspace

function apagar(){
    var apaga = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = apaga.substring(0, apaga.length -1);
}

//função calcular  

function calculo(){
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
};

//capturar url

var url_atual = window.location.href;
console.log(url_atual);