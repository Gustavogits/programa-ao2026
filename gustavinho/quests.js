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

var pessoas = 0
var masc = 0
var femi = 0

while(pessoas <= 10){
    var altura = leia.questionFloat("Digite a sua altura: ")
    var genero = leia.keyInSelect(['MASCULINO','FEMININO'], "Informe o seu genero")
    if(genero === 0){
        masc++;
    } else if(genero === 1){
        femi++;
    } else {
        console.log("Voce nao respondeu!!!")
    }
    maiorvalor = (maiorvalor < numero) ? numero : maiorvalor
    menorvalor = (menorvalor > numero) ? numero : menorvalor
    valores++;
}
