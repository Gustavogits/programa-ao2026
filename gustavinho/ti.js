import leia, { questionInt } from "readline-sync"

// var senhaPadrao = "1234";
// var senha = leia.question("DIGITE SUA SENHA: ");

// if(senha === senhaPadrao){
//     console.log("ACESSO PERMITIDO")
// } else {
//     console.log("ACESSO NEGADO")
// }



// //DESAFIO DO PAR OU IMPAR;
// var numero = 6;

// if(numero %2 == 0){
//     console.log("SEU NUMERO É PAR")
// } else {
//     console.log("SEU NUMERO É IMPAR")
// }



// var dia = leia.question("DIGITE O DIA DA SEMANA: ");

// if(dia === 0 || dia === 1){
//     console.log("VOCE NAO PODE TRAFEGAR NA SEGUNDA-FEIRA!!!")
// } else if(dia === 2 || dia === 3){
//     console.log("VODE NAO PODE TRAFEGAR NA TERÇA-FEIRA!!!")
// } else if(dia === 4 || dia === 5){
//     console.log("VOCE NAO PODE TRAFEGAR NA QUARTA-FEIRA!!!")
// } else if(dia === 6 || dia === 7){
//     console.log("VOCE NAO PODE TRAFEGAR NA QUINTA-FEIRA!!!")
// } else if(dia === 8 || dia === 9){
//     console.log("VOCE NAO PODE TRAFEGAR NA SEXTA-FEIRA!!!")
// }



// var maças = leia.questionInt("DIGITE A QUANTIDADE DE MAÇAS QUE VOCE VAI COMPRAR: ");

// if(maças >=0 && maças <= 11){
//     console.log(maças * 0.30)
// } else {
//     console.log(maças * 0.25)
// }



// var cliente1 = leia.question("DIGITE O NOME DO PRIMEIRO CLIENTE: ");
// var valor1 = leia.questionFloat("DIGITE O VALOR PAGO PELO PRIMEIRO CLIENTE: ");
// var cliente2 = leia.question("DIGITE O NOME DO SEGUNDO CLIENTE: ")
// var valor2 = leia.questionFloat("DIGITE O VALOR PAGO PELO SEGUNDO CLIENTE: ")

// console.log("O NOME DO PRIMEIRO CLIENTE É: " + cliente1);
// console.log("O VALOR PAGO PELO PRIMEIRO CLIENTE É: " + valor1);
// console.log("O NOME DO SEGUNDO CLIETE É: " + cliente2);
// console.log("O VALOR PAGO PELO SEGUNDO CLIENTE É: " + valor2);
// console.log(valor1 + valor2);
// console.log((valor1 + valor2) /2);



// var produto = leia.questionFloat("DIGITE O VALOR DO SEU PRODUTO: ");
// var moeda1 = leia.questionFloat("DIGITE A QUANTIDADE DE MOEDAS DE UM REAL QUE VOCE POSSUI: ")
// var moeda2 = leia.questionFloat("DIGITE A QUANTIDADE DE MOEDAS DE CINQUENT CENTAVOS QUE VOCE POSSUI: ")
// var moeda3 = leia.questionFloat("DIGITE A QUANTIDADE DE MOEDAS DE VINTE E CINCO CENTAVOS QUE VOCE POSSUI: ")
// var moeda4 = leia.questionFloat("DIGITE A QUANTIDADE DE MOEDAS DE DEZ CENTAVOS QUE VOCE POSSUI: ")
// var moeda5 = leia.questionFloat("DIGITE A QUANTIDADE DE MOEDAS DE CINCO CENTAVOS QUE VOCE POSSUI: ")

// var moeda1 = (moeda1 * 1);
// var moeda2 = (moeda2 * 0.50);
// var moeda3 = (moeda3 * 0.25);
// var moeda4 = (moeda4 * 0.10);
// var moeda5 = (moeda5 * 0.05);
// var total = (moeda1 + moeda2 + moeda3 + moeda4 + moeda5);

// if(total >= produto){
//     console.log("VOCE PODE COMPRAR O PRODUTO!!!")
// } else {
//     console.log("VOCE NAO PODE COMPRAR O PRODUTO!!!")
// }



// var salario = leia.questionFloat("DIGITE O VALOR DO SEU SALARIO: ");
// var emprestimo = leia.questionFloat("DIGITE O VALOR DO SEU EMPRESTIMO: ");
// var numeroI = leia.questionInt("DIGITE QUANTAS VEZES VOCE PEDIRA EMPRESTIMOS: ");
// var prestaçao = emprestimo / numeroI

// if(prestaçao >= salario * 0.30){
//     console.log("VOCE NAO PODE RECEBER!!!")
// } else {
//     console.log("VOCE PDE RECEBER!!!")
// }



// var mes = [
//     "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "desembro"
// ]

// var opçao = leia.keyInSelect(mes, "DIGITE O SEU MES: ");

// if(mes === 'janeiro' || mes === 'março' || mes === 'maio' || mes === 'julho' || mes === 'agosto' || mes === 'outubro' || mes === 'novembro' || mes === 'desembro'){
//     console.log("SEU MES TEM 31 DIAS!!!")
// } else if(mes === 'fevereiro'){
//     console.log("SEU MES TEM 28 OU 29 DIAS!!!")
// } else {
//     console.log("SEU MES TEM 30 DIAS!!!")
// }



// var nome = leia.question("DIGITE O SEU NOME: ");
// var salario = leia.questionFloat("DIGITE O SEU SALARIO: ");
// var dependentes = leia.questionInt("DIGITE QUANTOS DEPENDENTES VOCE TEM: ");
//  if(dependentes === 0){
//     var salarioTotal = salario * 1.02
//     console.log(salarioTotal)
//  }else if(dependentes === 1){
//     var salarioTotal = salario * 1.05
// console.log(salarioTotal)
//  }else if(dependentes === 2){
//     var salarioTotal = salario * 1.07
// console.log(salarioTotal)
//  }else if(dependentes === 3){
//     var salarioTotal = salario * 1.10
// console.log(salarioTotal)
//  }else if(dependentes >= 4){
//     var salarioTotal = salario * 1.15
// console.log(salarioTotal)
//  }



// var opçao = leia.keyInSelect(['R$10','R$25','R$50', 'outro valor'], 'QUANTO DESEJA DOAR? ')

// if(opçao === 0) {
//     console.log("MUITO OBRIGADO, VOCE DOOU R$10,00");
// } else if(opçao === 1) {
//     console.log("MUITO OBRIGADO, VOCE DOOU R$25,00");
// } else if(opçao === 2) {
//     console.log("MUITO OBRIGADO, VOCE DOOU R$50,00");
// } else if(opçao === 3) {
//     var valor = leia.questionFloat("INFORME O VALOR QUE VOCE DESEJA DOAR: R$");
//     console.log("MUITO OBRIGADO, VOCE DOOU R$" + valor.toFixed(2));
// }



// var time1 = leia.questionInt("DIGITE QUNTOS GOLS O PRIMEIRO TIME FEZ: ");
// var time2 = leia.questionInt("DIGITE QUNTOS GOLS O SEGUNDO TIME FEZ: ");
// var diferença = time1 - time2
// var diferença2 = time2 - time1

// if(diferença === 0 || diferença2 === 0){
//     console.log("EMPATOU!!!")
// } else if(diferença >= 1 && diferença <= 3 || diferença2 >= 1 && diferença2 <= 3){
//     console.log("PARTIDA NORMAL!!!")
// } else if(diferença >= 4 || diferença2 >= 4){
//     console.log("GOLEADA!!!")
// }



// var idade = leia.questionInt("QUAL A SUA IDADE? ");

// if(idade >= 18){
//     console.log("PODE VIAJAR!!!")
// } else if(idade < 18){
// var permissao = leia.question("POSSUI PERMISSAO DOS PAIS? ")
// if(permissao === 'sim'){
// console.log("PODE VIAJAR!!!")
// }
// }


//TODAS AS ATIVIDADES |
//    SEMANA 14       |



var nota1 = leia.questionFloat("DIGITE O VALOR DA PRIMEIRA NOTA: ");
var nota2 = leia.questionFloat("DIGITE O VALOR DA SEGUNDA NOTA: ");
var nota3 = leia.questionFloat("DIGITE O VALOR DA TERCEIRA NOTA: ");
var resultado = (nota1 + nota2 + nota3) / 3;

console.log(resultado >= 7 ? "APROVDO" : "REPROVADO");