import leia from "readline-sync";

var opçoes = ["PEDRA","PAPEL","TESOURA"];

var numeroS = Math.floor(Math.random() * 3);
var escolha = leia.keyInSelect(opçoes, "ESCOLHA SUA OPÇAO: ");

if(escolha === -1) {
    console.log("OPÇAO INVALIDA, JOGO CANSELADO!!!")
} else {
console.log("VOCE ESCOLHEU: " + opçoes[escolha]);
console.log("COMPUTADOR ESCOLHEU: " + opçoes[numeroS]);

if(numeroS === escolha) {
console.log("EMPATE!!!")
} else if(
    escolha === 0 && numeroS === 2 ||
    escolha === 1 && numeroS === 0 ||
    escolha === 2 && numeroS === 1 
){
    console.log("O USUARIO GANHOU!!!!")
}else {
    console.log("O COMPUTADOR GANHOU!!!!")
}
}