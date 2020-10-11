let size = 8;
let b = ' ';
let resp = document.getElementById('tab');


for (let linha = 0; linha < size; linha++){ /* contando a linha */
    for (let col = 0; col <size; col++){ /*contando a coluna */
        if( (linha + col) %2 == 0) { /*se a soma da linha e da col for resto 0 */
            b += ` ` /*imprime espaço */
        }else {
            b += `#`; /*se não imprime # */
        }
    
    }
    b +=`\n` /*ao final de cada for da linha aplicar-se a espaço */
}
console.log(b) /*impressão no console */

