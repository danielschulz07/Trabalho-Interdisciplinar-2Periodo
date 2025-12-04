import * as CompeticoesControlCompetidor from "./competicoesControlCompetidor.js";
//import * as CompeticoesControlCompeticao from "./competicoesControlCompeticao.js";



const inNome = document.getElementById("inNome");
const dtDataNasc = document.getElementById("dtDataNasc");
const inIdade = document.getElementById("inIdade");
const inCpf = document.getElementById("inCpf");
const inNomeCorridaSelecionada = document.getElementById("inNomeCorridaSelecionada");
const btInscrever = document.getElementById("btInscrever");
const outSaida = document.getElementById("outSaida");

const inNomeCorrida = document.getElementById("inNomeCorrida");
const inDistancia = document.getElementById("inDistancia");
const dtCorrida = document.getElementById("dtCorrida");
const inQtdCompetidores = document.getElementById("inQtdCompetidores");
const inGanhoElevacao = document.getElementById("inGanhoElevacao");
const qtdCheckpointMaratona = document.getElementById("qtdCheckpointMaratona");
const qtdCheckpointTrail = document.getElementById("qtdCheckpointTrail");
const btCadastrarCorrida = document.getElementById("btCadastrarCorrida");

const slcOpcaoCorrida = document.getElementById("slcOpcaoCorrida");
const slcOpcaoModalidade = document.getElementById("slcOpcaoModalidade");
const slcOpcaoModalidadeTrail = document.getElementById("slcOpcaoModalidadeTrail");
const slcOpcaoDificuldade = document.getElementById("slcOpcaoDificuldade");




if(btInscrever){
btInscrever.addEventListener('click', function (){
    
let nome = (inNome.value).toUpperCase();
let nomeCompeticaoSlc = (inNomeCorridaSelecionada.value).toUpperCase();
let opcao = slcOpcaoCorrida.value;
let dtNascPessoa = new Date(dtDataNasc.value);
let idade = Number(inIdade.value);
let cpf = inCpf.value;

    if (nome == "") {
        outSaida.style.color = "red";
        outSaida.textContent = "O campo Nome deve ser preenchido!";
        inNome.focus();
    } else if (!dtDataNasc.value || isNaN(new Date(dtDataNasc.value).getTime())) {
        outSaida.style.color = "red";
        outSaida.textContent = "Deve ser preenchido uma data válida";
        dtDataNasc.focus();
    } else if (idade == "" || idade < 18) {
        outSaida.style.color = "red";
        outSaida.textContent = "Deve ser preenchido uma idade válida";
        inIdade.focus();
    } else if (cpf.length != 11) {
        outSaida.style.color = "red";
        outSaida.textContent = "Deve ser preenchido uma CPF válido";
        inCpf.focus();
    } else if (opcao == "Selecione a corrida") {
        outSaida.style.color = "red";
        outSaida.textContent = "Selecione o tipo de Competição";
        slcOpcaoCorrida.focus();
    } else if (nomeCompeticaoSlc == "") {
        outSaida.style.color = "red";
        outSaida.textContent = "Deve ser preenchido a competição que deseja participar";
        inNomeCorridaSelecionada.focus();
    } else {
        //erro ao verificar  a opção abaixo
        let competidor = CompeticoesControlCompetidor.adicionarPessoa(nome, dtNascPessoa, idade, cpf, opcao, nomeCompeticaoSlc);
        if(competidor == undefined){
            outSaida.style.color = "blue";
            outSaida.textContent = "O novo produto foi acrescentado com sucesso!";
        } else {
            outSaida.style.color = "red";
            outSaida.textContent = "Erro! O Competidor " + nome + " já estava cadastrado!";
            inNome.focus();
        }
    }
})
}

if(btCadastrarCorrida){
btCadastrarCorrida.addEventListener('click', function () {
    
let nomeCompeticao = (inNomeCorrida.value).toUpperCase();
let distancia = Number(inDistancia.value);
let dataCorrida = new Date(dtCorrida.value);
let qtdCompetidores =  Number(inQtdCompetidores.value);
let ganhoElevacao = Number(inGanhoElevacao.value);
let qtdCheckMaratona = Number(qtdCheckpointTrail.value);
let qtdCheckTrail = Number(qtdCheckpointTrail.value);
let opcao = slcOpcaoModalidade.value;

    if(nomeCompeticao == ""){
        outSaida.style.color = "red";
        outSaida.textContent = "O campo Nome da Competição deve ser preenchido!";
        inNomeCorrida.focus();
    } else if(distancia <= 0){
        outSaida.style.color = "red";
        outSaida.textContent = "O campo Distancia deve ser preenchido com um valor acima de 0!";
        inDistancia.focus();
    } else if (!dtCorrida.value || isNaN(dataCorrida.getTime())) {
        outSaida.style.color = "red";
        outSaida.textContent = "Deve ser preenchida uma data válida!";
        dtCorrida.focus();  
    } else if(qtdCompetidores <= 0){
        outSaida.style.color = "red";
        outSaida.textContent = "O campo Quantidade de Competidores deve ser preenchido com um valor acima de 0!";
        inQtdCompetidores.focus();  
    } else if(opcao == "Selecione a modalidade"){
        outSaida.style.color = "red";
        outSaida.textContent = "Selecione uma modalidade!";
        slcOpcaoModalidade.focus();
    } else{




    }
    
    
    
    
    
    /*
    else if(ganhoElevacao <= 0){
        outSaida.style.color = "red";
        outSaida.textContent = "O campo Ganho de elevação deve ser preenchido com um valor acima de 0!";
        inGanhoElevacao.focus();
    } else if(qtdCheckMaratona <= 10){
        outSaida.style.color = "red";
        outSaida.textContent = "O campo Quantidade de CheckPoint deve ser preenchido com um valor acima de 0!";
        qtdCheckpointMaratona.focus();
    } else if(qtdCheckTrail <= 10){
        outSaida.style.color = "red";
        outSaida.textContent = "O campo Quantidade de CheckPoint deve ser preenchido com um valor acima de 0!";
        qtdCheckpointTrail.focus();
    }else {

        alert("qalo")

    }
    */
    })
}