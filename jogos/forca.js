import leia from "readline-sync"

const partes = [
  `
  +---+
  |   |
      |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

var palavras = [
  "javascript", "computador", "programacao", "algoritmo", "variavel",
  "funcao", "terminal", "internet", "logica", "senai", "teclado"
]

var letrasCertas = [];
var letrasErradas = [];
var tentativas = 6;
var venceu = false;

var palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
console.log(palavraSecreta)

function desenhaForca(erros) {
    console.log(partes[erros]);
}

while(tentativas > 0 && venceu === false){
    console.clear();
    console.log("=== JOGO DA FORCA ===");

    desenhaForca(letrasErradas.length);

    var palavraMontada = "";
    for(var i = 0; i < palavraSecreta.length; i++) {
if(letrasCertas.includes(palavraSecreta[1])){
    palavraMontada += palavraSecreta[1] + " ";
} else {
    palavraMontada += "_ "
}
    }

console.log("Palavra: " + palavraMontada);
console.log("Tentativas restantes: " + tentativas);
console.log("Letras erradas: " + letrasErradas.join(', '));
console.log();

var letra = leia.question("Digite uma letra: ").toLowerCase();
if(letra.length !== 1){
    console.log("Digite apemas uma letra!!!")
    leia.question("Pressione a tecla ENTER para continuar...")
} else if(letrasCertas.includes(letra) || letrasErradas.includes(letra)) {
    console.log("Voce ja tentou essa letra!!!")
    leia.question("Pressione a tecla ENTER para continuar...")
} else if(palavraSecreta.includes(letra)) {
    letrasCertas.push(letra);
} else {
    letrasErradas.push(letra);
    tentativas--;
}

venceu = true;
for(var i = 0; i < palavraSecreta.length; i++) {
    if(letrasCertas.includes(palavraSecreta[1]) === false) {
        venceu === false;
    }
}

}

