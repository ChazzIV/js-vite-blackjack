import _ from 'underscore';

import { crearDeck, pedirCarta , valorCarta, turnoComputadora, crearCartaHTML} from "./usescases";

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;

//referencias de html
const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHtml           = document.querySelectorAll('small');

const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

//Funcion para crear un deck
deck = crearDeck(tipos, especiales);

//Eventos
btnPedir.addEventListener('click', function () {
    const carta = pedirCarta(deck);
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;

    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHtml[1], divCartasComputadora, deck);
    } else if (puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHtml[1], divCartasComputadora, deck);
    }
});

btnDetener.addEventListener('click' , () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHtml[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHtml[0].innerText = 0;
    puntosHtml[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});