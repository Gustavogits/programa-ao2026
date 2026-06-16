import leia from "readline-sync"

console.log("==== DESARME A BOMBA ====");
console.log("UMABOMBA FOI ENCONTRADA, VOCE PRECISA CORTOR O FIO CARTO!");
console.log("VOCE PRECISA CORTAR O FIO CERTO E VOCE TEM 3 TENTATIVAS!");
console.log("============");

var fios = [
    "vermelho", "azul", "verde", "amarelo", "preto",
    "branco", "laranja","roxo", "marrom", "cinza"
];

var fioc = fios[Math.floor(Math.random() * fios.length)];
var tentativas = 3;
var desarmou = false

do {
    var escolha = leia.keyInSelect(fios, `escolha um fio para cortar, voce tem $(tentativas) tentativas`)
    
var fioE = fios[escolha];
console.log(fioE);

if(fioE === fioc){
    console.log("VOCE CORTOU O FIO CORRETO!");
    console.log("BOMB HAS BEEN DEFUSED");
    desarmou = true;
} else {
    console.log("VOCE CORTOU O FIO " + fioE);
    console.log("ESSE FIO NAO ERA O FIO CORREO!");

    tentativas--;
    fios.splice(escolha, 1);
}

console.log('=======================')
} while (tentativas > 0 && desarmou === false);

if(desarmou === false) {
    console.log('KABUMMMMMMMMMMMMMMMMMMM!!!!!!!!!')
    console.log("O FIO CORRETO ERA O " + fioc)
}
