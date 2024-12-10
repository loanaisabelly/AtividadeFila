"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var Queue_1 = require("./Queue");
var fila = new Queue_1.Queue();
var escolha;
var continua = '0';
while (continua !== '0') {
    console.log('\n**************************');
    console.log('1 - Adicionar Cliente na Fila');
    console.log('2 - Listar todos os Clientes');
    console.log('3 - Retirar cliente da Fila');
    console.log('0 - Sair');
    console.log('\n**************************');
    escolha = readlinesync.questionInt('\nEntre com a opção desejada: ');
    switch (escolha) {
        case 1:
            var nome = readlinesync.question('Digite o nome: ');
            fila.enqueue(nome);
            fila.printQueue();
            console.log("Cliente adiconado");
            break;
        case 2:
            console.log("Lista de clientes na Fila: ");
            fila.printQueue();
            break;
        case 3:
            var remover = fila.dequeue();
            if (remover) {
                console.log("Cliente saiu da Fila");
                fila.printQueue();
            }
            else {
                console.log("A fila está vazia.");
            }
            break;
        case 0:
            console.log("Saindo do Menu");
            process.exit();
            break;
        default:
            console.log("Opção Invalida!!. Tente Novamente");
    }
}
