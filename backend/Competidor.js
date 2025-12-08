export class Competidor {
    #idAtleta;
    #idCompeticao;
    #identificador;
    #classificacao;

    constructor(idAtleta,idCompeticao,identificador,classificacao){
        this.#idAtleta = idAtleta;
        this.#idCompeticao = idCompeticao;
        this.#identificador = identificador;
        this.#classificacao = classificacao;
    }

    get idAtleta(){
        return this.#idAtleta;
    }

    get idCompeticao(){
        return this.#idCompeticao;
    }
}