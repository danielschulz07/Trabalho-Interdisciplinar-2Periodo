import { Corrida } from "./Corrida";

export class Maratona{
    #idMaratona;
    #modalidade;

    constructor(modalidade){
        this.#modalidade = modalidade;
        this.#idMaratona = super.idCorrida;
    }

}