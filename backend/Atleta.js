export class Atleta {
    static #idStatic = 0;
    #id;
    #nome;
    #idade;
    #cpf;
    #nacionalidade;
    #modalidade;

    constructor (nome, idade, cpf, nacionalidade, modalidade) {
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
        this.#nacionalidade = nacionalidade;
        this.#modalidade = modalidade;

        this.#id = Atleta.#idStatic;
        Atleta.#idStatic++;
    }


    static get id(){
        return this.id;
    }


    get nome(){
        return this.#nome;
    }

    
    set nome(nome){
        if (nome.length != 0){
            this.#nome = nome;
        }
    }

    get idade(){
        return this.#idade;
    }


    get cpf(){
        return this.#cpf;
    }
    
    get opcao(){
        return this.#modalidade;
    }

    toString() {
        return ("\nNome: " + this.#nome +
        "\nCPF: " + this.#cpf +
        "\nIdade: " + this.#idade +
        "\nOpção Corrida: " + this.#modalidade);
    } 

    relatorio() {
        return ("\nNome: " + this.#nome +
            "\nNome das corridas: " + this.nomeCorridasPassadas);
    }

}