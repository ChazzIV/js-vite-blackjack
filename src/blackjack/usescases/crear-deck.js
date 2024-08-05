import _ from 'underscore';
/**
 * 
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if( !tiposDeCarta || tiposDeCarta.length === 0) throw new Error ('tiposDeCarta Obligatorio');
    if( !tiposEspeciales || tiposEspeciales.length === 0) throw new Error ('tiposEspeciales Obligatorio');

    let deck = [];
    //se agregan las cartas del 2 al 10
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    //Se agregan las cartas especiales
    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    //se crea un arreglo que trae de forma aleatorea el deck
    deck = _.shuffle(deck)
    return deck;
}
