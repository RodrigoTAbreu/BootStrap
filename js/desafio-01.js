function calc(){
    let numero = document.getElementById('nfuncionario')
    let horas = document.getElementById('htrabalhadas')
    let shora = document.getElementById('salhora')
    let nfunc = Number(numero.value)
    let horastrab = Number(horas.value)
    let salariohora= Number(shora.value)
    let resultado = document.getElementById('resp')
    let vlrsalario = horastrab * salariohora
    resultado.innerHTML = `O funcionário ${nfunc} receberá R$${vlrsalario.toFixed(2)} de salário.`
}