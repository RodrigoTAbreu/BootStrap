function calc(){
  let valor = document.getElementById('tvalor')
  let saque = Number(valor.value)
  let resposta = document.getElementById('res')

  let cem = 0, cinq = 0, vint = 0, dez = 0, cinco = 0, dois = 2, um = 1; 
  let resto = 0
  
  /*MAT.FLOOR faz o arredondamento mais proximo da numero inteiro*/ 

  cem = Math.floor(saque / 100) /*CEM recebe o resultado de SAQUE / 100 */
  resto = saque %100            /*RESTO passa a ser o resto da divisão do SAQUE por 100 */
  cinq = Math.floor(resto / 50) /*agora RESTO vale o resto da divisão por 100; dividindo ele por 50 */
  resto = resto %50
  vint = Math.floor(resto/ 20)
  resto = resto %20
  dez = Math.floor(resto / 10)
  resto = resto %10
  cinco = Math.floor(resto/ 5)
  resto= resto %5
  dois = Math.floor(resto / 2)
  resto = resto %2
  un = Math.floor(resto / 1)
  resto = resto %1

resposta.innerHTML = `${saque}<p>`
resposta.innerHTML+= `Total de ${cem} cédulas de R$100,00<p>`
resposta.innerHTML+= `Total de ${cinq} cédulas de R$50,00<p>`
resposta.innerHTML+= `Total de ${vint} cédulas de R$20,00<p>`
resposta.innerHTML+= `Total de ${dez} cédulas de R$10,00<p>`
resposta.innerHTML+= `Total de ${cinco} cédulas de R$5,00<p>`
resposta.innerHTML+= `Total de ${dois} cédulas de R$2,00<p>`
resposta.innerHTML+=` Total de ${un} cédulas de R$1,00<p>`

}
