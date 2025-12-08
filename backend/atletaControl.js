import * as vetAtletas from "./atletaModel.js";

export function adicionar(nome, idade, cpf, opcao) {
    if (vetAtletas.inserirAtleta(nome, idade, cpf, opcao) == true) {
        return "Atleta inserido com sucesso!"
    }
    return "Erro! O Atleta " + nome + " já estava cadastrado!"
}

export function excluir(nome) {
    if (vetAtletas.excluirAtleta(nome, vetAtletas) == true) {
        return "Atleta excluido com sucesso!";
    }
    return "O Atleta não existe para excluir!";
}

export function modificar(nome) {
    let atletaEncontrado = vetAtletas.alterarAtleta(nome)
    return atletaEncontrado;
}
