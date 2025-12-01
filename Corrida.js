import { Pessoa } from "./Pessoa.js";
export class Corrida {
    static #idCorridaStatic = 0;
    #idCorrida;
    #dataCorrida;
    #limiteCorredores;
    #nomeCorrida;
    #distancia;


    constructor(dataCorrida, limiteCorredores, nomeCorrida, distancia){
        this.#dataCorrida = dataCorrida;
        this.#limiteCorredores = limiteCorredores;
        this.#nomeCorrida = nomeCorrida;
        this.#distancia = distancia;

        this.#idCorrida = Corrida.#idCorridaStatic;
        Corrida.#idCorridaStatic++;
    }

    get idCorrida(){
        return this.#idCorrida;
    }

    historico(pessoa){
        pessoa.historico(pessoa.id,this.#nomeCorrida);
    }

        toString() {
        return ("\nid: " + this.idCorrida);
    } 
}