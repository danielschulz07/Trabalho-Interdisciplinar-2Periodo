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
}