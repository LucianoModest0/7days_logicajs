let res = document.getElementById('result');

function pegarValor() {
    firstNumber = document.getElementById('n1');
    n1 = Number(firstNumber.value);
    secondNumber = document.getElementById('n2');
    n2 = Number(secondNumber.value);



}

function soma(){
    res.innerHTML = n1 + n2; 
}

function subtracao(){
    res.innerHTML = n1 - n2; 
}

function multiplicacao(){
    res.innerHTML = n1 * n2; 
}

function divisao(){
    res.innerHTML = n1 / n2; 
}

function sair() {
    res.innerHTML = 'Até a próxima';
}