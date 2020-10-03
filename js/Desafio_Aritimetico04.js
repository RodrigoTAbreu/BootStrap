function calc(){
  let valor1 = document.getElementById('tvalor1')
  let km = Number(valor1.value)
  let valor2 = document.getElementById('tcomb')
  let comb = Number(valor2.value)
  let imprime = document.getElementById('res')
  let result = km / comb

  imprime.innerHTML = `${result.toFixed(3)}` 
}

