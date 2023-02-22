/************
 * Objetivo:  Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 22/02/2023
 * Autor: Lucas Vinicius
 * Versão: 1.1
 */
console.log('**********************')
console.log('       Tabuada        ');
console.log('**********************')

var readline = require('readline');
var tabuada = require('./modulo/tabuada.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Primeiro multiplicando?: ', function (primeiroMultiplicando) {
    let tabuada1 = primeiroMultiplicando

    entradaDados.question('Primeiro multiplicador?: ', function (multiplicadorPrimeiro) {
        let multiplicador1 = multiplicadorPrimeiro
        console.log('---------------------------------------------')

        entradaDados.question('Segundo multiplicando?: ', function (segundoMultiplicando) {
            let tabuada2 = segundoMultiplicando

            entradaDados.question('Segundo multiplicador?: ', function (multiplicadorSegundo) {
                let multiplicador2 = multiplicadorSegundo


                if (tabuada1 == '' || multiplicador1 == '' || tabuada2 == '' || multiplicador2 == '') {
                    entradaDados.close()
                }
                else if (multiplicador1 < 1 || multiplicador1 > 50 || multiplicador2 < 1 || multiplicador2 > 50) {
                    console.log('multipicador entre 1 a 50')
                    entradaDados.close()
                }
                else if (tabuada1 < 2 || tabuada2 > 100 || tabuada2 < 2 || tabuada2 > 100)
                    console.log('multiplicando entre 2 a 100')
                else if (isNaN(tabuada1) || isNaN(tabuada2) || isNaN(multiplicador1) || isNaN(multiplicador2)) {
                    console.log('preencha os campos com números')
                    entradaDados.close()
                }
                else {
                    console.log('---------------------------------------------')

                    console.log(`           Tabuada do [${primeiroMultiplicando}]`)
                    let conta1 = tabuada.tabuada1(tabuada1, multiplicador1)
                    console.log('---------------------------------------------')
                    console.log(`           Tabuada do [${segundoMultiplicando}]`)
                    let conta2 = tabuada.tabuada2(tabuada2, multiplicador2)

                }
            })
        })
    })
})