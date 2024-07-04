//SEGUNDA-FEIRA
var botao1 = document.getElementById('btn-button1');


var divParaMostrar1 = document.getElementById('click1');


botao1.addEventListener('click', function () {

    if (divParaMostrar1.style.display === 'none') {

        divParaMostrar1.style.display = 'block';
    } else {

        divParaMostrar1.style.display = 'none';
    }
});
//TERÇA-FEIRA
var botao2 = document.getElementById('btn-button2');


var divParaMostrar2 = document.getElementById('click2');

botao2.addEventListener('click', function () {
    if (divParaMostrar2.style.display === 'none') {
        divParaMostrar2.style.display = 'block';
    } else {
        divParaMostrar2.style.display = 'none';
    }
});

//QUARTA-FEIRA        
var botao3 = document.getElementById('btn-button3');

var divParaMostrar3 = document.getElementById('click3');

botao3.addEventListener('click', function () {
    if (divParaMostrar3.style.display === 'none') {
        divParaMostrar3.style.display = 'block';
    } else {
        divParaMostrar3.style.display = 'none';
    }
});

//QUINTA-FEIRA        
var botao4 = document.getElementById('btn-button4');

var divParaMostrar4 = document.getElementById('click4');

botao4.addEventListener('click', function () {
    if (divParaMostrar4.style.display === 'none') {
        divParaMostrar4.style.display = 'block';
    } else {
        divParaMostrar4.style.display = 'none';
    }
});

//SEXTA-FEIRA        
var botao5 = document.getElementById('btn-button5');

var divParaMostrar5 = document.getElementById('click5');

botao5.addEventListener('click', function () {
    if (divParaMostrar5.style.display === 'none') {
        divParaMostrar5.style.display = 'block';
    } else {
        divParaMostrar5.style.display = 'none';
    }
});

//SABADO       
var botao6 = document.getElementById('btn-button6');

var divParaMostrar6 = document.getElementById('click6');

botao6.addEventListener('click', function () {
    if (divParaMostrar6.style.display === 'none') {
        divParaMostrar6.style.display = 'block';
    } else {
        divParaMostrar6.style.display = 'none';
    }
});

//BOTÃO POP-UP "segunda"
var botaopop = document.getElementById('click-pop');

var divParaMostrarpop = document.getElementById('click-div');

var esconderListaHorario = document.getElementById('click1');


botaopop.addEventListener('click', function () {
    if (divParaMostrarpop.style.display === 'none') {   
        divParaMostrarpop.style.display = 'block';
        esconderListaHorario.style.display = 'none';
     
    } else {
        divParaMostrarpop.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const confirmYesButton = document.getElementById('sim');
    const confirmNoButton = document.getElementById('nao');
    const confirmationContainer = document.getElementById('click-div');
    const messageContainer = document.getElementById('message-confirm');

    confirmYesButton.addEventListener('click', () => {
        confirmationContainer.style.display = 'none';
        messageContainer.style.display = 'block';
    });

    confirmNoButton.addEventListener('click', () => {
        messageContainer.style.display = 'none';
        confirmationContainer.style.display = 'block';
    });
});






