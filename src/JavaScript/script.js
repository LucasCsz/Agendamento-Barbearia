document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

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

//Botão POP-UP "Segunda"
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

//Botão POP-UP "Terça"
var botãoEnviarTerça = document.getElementById('btn-terca');

var divParaMostrarpop1 = document.getElementById('click-div');

var esconderListaHorario1 = document.getElementById('click2');


botãoEnviarTerça.addEventListener('click', function () {
    if (divParaMostrarpop1.style.display === 'none') {
        divParaMostrarpop1.style.display = 'block';
        esconderListaHorario1.style.display = 'none';

    } else {
        divParaMostrarpop1.style.display = 'none';
    }
});

//Botão POP-UP "Quarta"
var botãoEnviarQuarta = document.getElementById('btn-quarta');

var divParaMostrarpop2 = document.getElementById('click-div');

var esconderListaHorario2 = document.getElementById('click3');


botãoEnviarQuarta.addEventListener('click', function () {
    if (divParaMostrarpop2.style.display === 'none') {
        divParaMostrarpop2.style.display = 'block';
        esconderListaHorario2.style.display = 'none';

    } else {
        divParaMostrarpop2.style.display = 'none';
    }
});

//Botão POP-UP "Quinta"
var botãoEnviarQuinta = document.getElementById('btn-quinta');

var divParaMostrarpop3 = document.getElementById('click-div');

var esconderListaHorario3 = document.getElementById('click4');


botãoEnviarQuinta.addEventListener('click', function () {
    if (divParaMostrarpop3.style.display === 'none') {
        divParaMostrarpop3.style.display = 'block';
        esconderListaHorario3.style.display = 'none';

    } else {
        divParaMostrarpop3.style.display = 'none';
    }
});

//Botão POP-UP "Sexta"
var botãoEnviarSexta = document.getElementById('btn-sexta');

var divParaMostrarpop4 = document.getElementById('click-div');

var esconderListaHorario4 = document.getElementById('click5');


botãoEnviarSexta.addEventListener('click', function () {
    if (divParaMostrarpop4.style.display === 'none') {
        divParaMostrarpop4.style.display = 'block';
        esconderListaHorario4.style.display = 'none';

    } else {
        divParaMostrarpop4.style.display = 'none';
    }
});

//Botão POP-UP "Sábado"
var botãoEnviarSabado = document.getElementById('btn-sabado');

var divParaMostrarpop5 = document.getElementById('click-div');

var esconderListaHorario5 = document.getElementById('click6');


botãoEnviarSabado.addEventListener('click', function () {
    if (divParaMostrarpop5.style.display === 'none') {
        divParaMostrarpop5.style.display = 'block';
        esconderListaHorario5.style.display = 'none';

    } else {
        divParaMostrarpop5.style.display = 'none';
    }
});



//Botão Digitar nome
var botaoSim = document.getElementById('sim');

var divParaName = document.getElementById('option-name');

var esconderDiv = document.getElementById('click-div');


botaoSim.addEventListener('click', function () {
    if (divParaName.style.display === 'none') {
        divParaName.style.display = 'block';
        esconderDiv.style.display = 'none';

    } else {
        divParaName.style.display = 'none';
    }
});


//Botão aparecer horário marcado
var botaoEnviar = document.getElementById('enviar');

var divHorario = document.getElementById('message-confirm');

var esconderOption = document.getElementById('option-name');


botaoEnviar.addEventListener('click', function () {
    if (divHorario.style.display === 'none') {
        divHorario.style.display = 'block';
        esconderOption.style.display = 'none';

    } else {
        divHorario.style.display = 'none';
    }
});

var botaoAgendamento = document.getElementById('click-list');

var sectionDiv = document.getElementById('click-section');



botaoAgendamento.addEventListener('click', function () {
    if (sectionDiv .style.display === 'none') {
        sectionDiv .style.display = 'block';
        botaoAgendamento.style.display = 'none';

    } else {
        sectionDiv.style.display = 'none';
    }
});













