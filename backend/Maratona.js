import { Competicao } from "./Competicao.js";

export class Maratona extends Competicao{
    #qtdPontoApoio;
    #altimetria
    
    constructor(nomeCompeticao, distancia, dataCompeticao, limiteCorredores, modalidade,local,  altimetria, qtdPontoApoio){
        super(nomeCompeticao, distancia, dataCompeticao, limiteCorredores, modalidade,local );
        
        this.#qtdPontoApoio = qtdPontoApoio;
        this.#altimetria = altimetria;
    }

    get qtdPontoApoio(){
        return this.#qtdPontoApoio;
    }

    set qtdPontoApoio(qtdPontoApoio){
        this.#qtdPontoApoio = qtdPontoApoio;
    }

    get altimetria(){
        return this.#altimetria;
    }

    set altimetria(altimetria){
        this.#altimetria = altimetria
    }
    
    toString() {
        return (super.toString() +
            "\nPontos Apoio: " + this.#qtdPontoApoio +
            "\n Altimetria> " + this.#altimetria);
    }
}