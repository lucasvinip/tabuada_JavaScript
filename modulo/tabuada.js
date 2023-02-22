const tabuada1 = function(primeiroMultiplicando, multiplicadorPrimeiro) {
    let tabuada1 = Number(primeiroMultiplicando);
    let contador = Number(multiplicadorPrimeiro);
    let contTabuada = 0; // start da repetiçao
    let status = true;
    let resultado;

    if (tabuada1 == 0 || contador == 0)
        status = false;
    else{
        while(contTabuada <= contador){

            resultado = tabuada1 * contTabuada;

            // 2 * 0 = 0
            // console.log(tabuada + 'x' + contTabuada + '=' + resultado);
        	console.log(`${tabuada1} x ${contTabuada} = ${resultado}`);

            contTabuada = contTabuada + 1;
            // ou contTabuada ++;
            // ou contTabuada +=1;
        }
    } 
    return status;
 }

 const tabuada2 = function(segundoMultiplicando, multiplicadorSegundo) {
    let tabuada2 = Number(segundoMultiplicando);
    let contador = Number(multiplicadorSegundo);
    let contTabuada = 0; // start da repetiçao
    let status = true;
    let resultado;

    if (tabuada2 == 0 || contador == 0)
        status = false
    else if (isNaN(tabuada2) || isNaN(contador))
        console.log('preencha os campos com números')
    else{
        while(contTabuada <= contador){

            resultado = tabuada2 * contTabuada;

            // 2 * 0 = 0
            // console.log(tabuada + 'x' + contTabuada + '=' + resultado);
        	console.log(`${tabuada2} x ${contTabuada} = ${resultado}`);

            contTabuada = contTabuada + 1;
            // ou contTabuada ++;
            // ou contTabuada +=1;
        }
    } 
    return status;
 }

 module.exports = {
    tabuada1,
    tabuada2
 }