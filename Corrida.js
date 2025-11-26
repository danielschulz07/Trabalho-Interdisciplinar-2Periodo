export class Corrida {
    static #idCorrida = 0;
    #dataCorrida;
    #limiteCorredores;


    constructor(dataCorrida,limiteCorredores){
        this.#dataCorrida = dataCorrida;
        this.#limiteCorredores = limiteCorredores;

        Corrida.#idCorrida++;
    }
}