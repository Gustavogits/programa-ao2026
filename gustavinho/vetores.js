import leia from "readline-sync"

// QUESTAO 1

// var listaNomes = ["Gustavo","Joao","Pedro"];

// console.log(listaNomes);
// console.log(listaNomes[0]);
// console.log(listaNomes[1]);
// console.log(listaNomes[2]);

// listaNomes[3] = "Guilherme"
// console.log(listaNomes[3]);

// console.log(listaNomes);


// // TAMANHO DA LISTA
// console.log(listaNomes.length)

// // ULTIMO ITEM DA LISTA
// console.log(listaNomes[listaNomes.length - 1]);



// MATRIZ

var matriz = [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
];

function pedirPosicao(index) {
var linha = leia.questionInt("Digite a linha: ");
var coluna = leia.questionInt("Digite a coluna: ");
matriz[linha][coluna] = index % 2 === 0 ? "X" : "O";
}

function desenharJogoDaVelha() {
for(var i = 0; i < matriz[0].length; i++) {
    console.log(" " + matriz[i][0] + " | " + matriz[i][1] + " | " + matriz[i][2])

if (i < 2) {
    console.log("--------------")
  }
 }
}

for (var i = 0; i < 9; i++) {
pedirPosicao(i);
desenharJogoDaVelha();
}



