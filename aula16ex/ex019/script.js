let num = document.getElementById('txtnum')
let tab = document.getElementById('seltab')
let res = document.querySelector('div#res')
let valores = []

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }  
}
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value,valores)) {
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `Valor ${num.value} adicionado.`
        tab.appendChild(opt)  
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou ja tem na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let soma = 0
        for (const c in valores) {
            soma += valores[c]
        }
        res.innerHTML = ''
        res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${Math.max(...valores)} <br>`
        res.innerHTML += `O menor valor informado foi ${Math.min(...valores)}<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}<br>`
        res.innerHTML += `A media dos valores digitados é, ${soma/valores.length}<br>`
    }
}
