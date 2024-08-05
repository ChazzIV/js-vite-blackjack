import { pedirCarta , valorCarta , crearCartaHTML} from "./";

//turno de la computadora
export const turnoComputadora = (puntosMinimos, puntosHTML,divCartasComputadora, deck) => {
    if( !puntosMinimos || puntosMinimos.length === 0) throw new Error ('puntosMinimos Obligatorio');
    if( !puntosHTML ) throw new Error ('puntosHTML Obligatorio');
    
    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;
    
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if( puntosMinimos > 21) {
            break;
        } 

    } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ));

    setTimeout( () => {
        if( puntosComputadora === puntosMinimos ) {
            alert('nadie gana');
        } else if(puntosMinimos > 21) {
            alert('computadora gana');
        } else if(puntosComputadora > 21 ) {
            alert('jugador gana');
        } else {
            alert('Computadora Gana');
        }
    }, 100);
}
