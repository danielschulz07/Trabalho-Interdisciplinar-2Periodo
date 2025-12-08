import { Atleta } from "./Atleta.js";

const ate = new Atleta("dada", "20", 12345678910, "OpcTrail")
const vetAtletas = [ate];
console.log(ate)


export function pesquisarAtleta(nome){
    let indAtleta = vetAtletas.findIndex(objProd => objProd.nome == nome);
    return (indAtleta == -1) ? null : vetAtletas[indAtleta];
}

export function inserirAtleta(nome, idade, cpf, opcao){
    let atletaEncontrado = pesquisarAtleta(nome);

    if(atletaEncontrado == null){
        let atleta = new Atleta(nome, idade, cpf, opcao);
        vetAtletas.push(atleta);
        console.log(vetAtletas);
        return true;
    }
    return false;
}

export function excluirAtleta(nome){
    let indAtleta = vetAtletas.findIndex(objProd => objProd.nome == nome);

    if (indAtleta >= 0) {
        vetAtletas.splice(indAtleta, 1);
        return true;
    }
    return false;
}

export function alterarAtleta(nome) {
    let atletaEncontrado = pesquisarAtleta(nome);

    if (atletaEncontrado != null) {
        return atletaEncontrado;
    }
    return false;
}


