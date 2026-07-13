import leia from "readline-sync"

// QUESTAO 1

// var numero = leia.questionInt("Digite um numero: ");

// while (numero <= 100){
//     console.log(numero)
//     numero++;
// }


// QUESTAO 2

// var inicio = 1000;
// var file = 1999;

// while (inicio <= fim) {
//     if(inicio % 11 === 5) {
//         console.log("Numero: " + inicio);
//     }
//     inicio++;
// }


// QUESTAO 3

// var numero = leia.questionInt("Digite um numero: ");

// while (numero >= 0){
//     console.log(numero)
//     numero--;
// }


// QUESTAO 4

// var valores = 1
// var maiorvalor
// var menorvalor

// while (valores <= 5){
//      var numero = leia.questionInt("Digite um numero: ")
//      if(valores === 1){
//         maiorvalor = numero
//         menorvalor = numero
//      }
//      maiorvalor = (maiorvalor < numero) ? numero : maiorvalor
//      menorvalor = (menorvalor > numero) ? numero : menorvalor
//      valores++;
// }

// console.log("O maior numero é " + maiorvalor + ", E o menor numero é " + menorvalor);


// QUESTAO 5

// var xerox = leia.questionFloat("Digite quantaz vezes voce pedira xerox: ")

// while(xerox <= 500){
//     var custo = xerox * 0.33
//     var total = custo.toFixed(2)
//     console.log("Voce pagou " + total + " em xerox")
//     xerox++;
// }



//  QUESTAO 6

// var qnt = 1

// while(qnt <= 5){
//     var tabuada = leia.questionInt("Digite um numero de 0 ate 10: ")

//     var numero1 = tabuada * 1
//     var numero2 = tabuada * 2
//     var numero3 = tabuada * 3
//     var numero4 = tabuada * 4
//     var numero5 = tabuada * 5
//     var numero6 = tabuada * 6
//     var numero7 = tabuada * 7
//     var numero8 = tabuada * 8
//     var numero9 = tabuada * 9
//     var numero10 = tabuada * 10

//     console.log(numero1)
//     console.log(numero2)
//     console.log(numero3)
//     console.log(numero4)
//     console.log(numero5)
//     console.log(numero6)
//     console.log(numero7)
//     console.log(numero8)
//     console.log(numero9)
//     console.log(numero10)

//     qnt++;
// }



// // QUESTAO 7

// var numero1 = leia.questionInt("Digite um numero de 10 ate 499: ")

// while(numero1 <= 500){
//     console.log(numero1)
//     numero1++;
// }

// var numero2 = leia.questionInt("Digite um numero de 900 ate 999: ")

// while(numero2 <= 1000){
//     console.log(numero2)
//     numero2++;
// }



// QUESTAO 8

// var qnt = 1
// var pares = 1
// var impar = 0

// while(qnt <= 6){
//     var numeros = leia.questionInt("Digite o numero: ")
//     if(numeros % 2 === 0){
//         var abc =  pares *= numeros
//     } else {
//         var abc = impar += numeros
//     }

// qnt++;
// }

// console.log("Soma dos impares: " + impar)
// console.log("Multiplicaçao dos pares: " + pares)



// QUESTAO 9

// var contador = 0;

// while (true) {
//     var numero = leia.questionInt("Digite um numero (0 para encerrar): ");

//     if (numero === 0) {
//         break;
//     }

//     if (numero > 100 && numero < 200) {
//         contador++;
//     }
// }

// console.log(`Quantidade de numeros entre 100 e 200: ${contador}`);



//  questao 10

// var anos = 0;
// var valentina = 1.50;
// var joao = 1.40;

// while (joao <= valentina) {
//     valentina += 0.02; 
//     joao += 0.03;  
//     anos++;
// }

// console.log(`Anos: ${anos}`);
// console.log(`Altura da Valentina: ${valentina.toFixed(2)} m`);
// console.log(`Altura do João: ${joao.toFixed(2)} m`);



// QUESTAO 11

// var pessoas = 0;

// var maiorAltura = 0;
// var menorAltura = 0;

// var somaAlturas = 0;

// var somaMulheres = 0;
// var qtdMulheres = 0;

// var qtdHomens = 0;

// while (pessoas < 10) {

//     var genero = leia.keyInSelect(["F", "M"], "INFORME O GENERO");

//     var altura = leia.questionFloat("DIGITE SUA ALTURA: ");

//     if (altura > maiorAltura) {
//         maiorAltura = altura;
//     }

//     if (altura < menorAltura) {
//         menorAltura = altura;
//     }

//     somaAlturas += altura;

//     if (genero === 0) {
//         somaMulheres += altura;
//         qtdMulheres++;
//     }

//     if (genero === 1) {
//         qtdHomens++;
//     }

//     pessoas++;
// }

// var mediaMulheres = qtdMulheres > 0 ? somaMulheres / qtdMulheres : 0;
// var mediaPopulacao = somaAlturas / 10;
// var percentualHomens = (qtdHomens / 10) * 100;

// console.log("\nRESULTADOS");
// console.log(`Maior altura: ${maiorAltura.toFixed(2)} m`);
// console.log(`Menor altura: ${menorAltura.toFixed(2)} m`);
// console.log(`Média das mulheres: ${mediaMulheres.toFixed(2)} m`);
// console.log(`Média da população: ${mediaPopulacao.toFixed(2)} m`);
// console.log(`Percentual de homens: ${percentualHomens}%`);



// QUESTAO 12

// console.log("=== JOGO DO NÚMERO MÁGICO ===");
// console.log("1 - PvP");
// console.log("2 - PvE");

// var modo = leia.questionInt("Escolha o modo: ");

// var numeroMagico;

// if (modo === 1) {
//     console.clear();
//     numeroMagico = leia.questionInt("Mestre, digite o numero magico: ");
//     console.clear();
// } else if (modo === 2) {
//     console.log("===");
//     console.log("Escolha a dificuldade:");
//     console.log("1 - Facil (1 a 10)");
//     console.log("2 - Medio (1 a 50)");
//     console.log("3 - Dificil (1 a 100)");

//     var dificuldade = leia.questionInt("Opcao: ");
//     var max;

//     if (dificuldade === 1) {
//         max = 10;
//     } else if (dificuldade === 2) {
//         max = 50;
//     } else {
//         max = 100;
//     }

//     numeroMagico = Math.floor(Math.random() * max) + 1;
// } else {
//     console.log("Modo invalido!");
//     process.exit();
// }

// var tentativas = 0;
// var chute;

// do {
//     chute = leia.questionInt("Digite seu chute: ");
//     tentativas++;

//     if (chute > numeroMagico) {
//         console.log("O numero magico e menor!");
//     } else if (chute < numeroMagico) {
//         console.log("O numero magico e maior!");
//     }

// } while (chute !== numeroMagico);

// console.log("")
// console.log("Parabens! Voce acertou o numero magico!");
// console.log("Numero de tentativas: " + tentativas);



// QUESTAO 13

// var num = leia.questionInt("Digite a quantidade de termos da sequencia Fibonacci: ");

// var a = 1;
// var b = 1;

// if (num >= 1) {
//     console.log(a);
// }

// if (num >= 2) {
//     console.log(b);
// }

// for (var i = 3; i <= num; i++) {
//     var c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }



// QUESTAO 14

// var numero = leia.questionInt("DIGITE UM NUMERO: ");

// var total = 1;

// while (numero > 1) {
//     total = total * numero;
//     numero--;
// }

// console.log("Fatorial =", total);



// QUESTAO 15

// var numero = leia.questionInt("Digite um numero decimal: ");

// var binario = "";

// if (numero === 0) {
//     binario = "0";
// } else {
//     while (numero > 0) {
//         var resto = numero % 2;
//         binario = resto + binario;
//         numero = Math.floor(numero / 2);
//     }
// }

// console.log("Numero em binario: " + binario);



// QUESTAO 16

// var maiorMedia = 0;
// var melhorAluno = "";

// for (var i = 1; i <= 10; i++) {
//     console.log("")
//     console.log("Aluno " + i);

//     var nome = leia.question("Nome: ");
//     var nota1 = leia.questionFloat("Nota 1: ");
//     var nota2 = leia.questionFloat("Nota 2: ");
//     var nota3 = leia.questionFloat("Nota 3: ");

//     var media = (nota1 + nota2 + nota3) / 3;

//     console.log("Media: " + media.toFixed(2));

//     if (i === 1 || media > maiorMedia) {
//         maiorMedia = media;
//         melhorAluno = nome;
//     }
// }

// console.log("")
// console.log("=== RESULTADO ===");
// console.log("Aluno com a maior media: " + melhorAluno);
// console.log("Maior media: " + maiorMedia.toFixed(2));
