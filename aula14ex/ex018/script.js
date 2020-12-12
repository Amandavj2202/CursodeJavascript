function contar() {
    let num = Number(document.getElementById('txtnum').value)
    let tab = document.getElementById('seltab')
    
    if (num.length == 0) {
        tab.innerHTML = '' //limpa a area da tabuada
        window.alert('Digite o valor para calcular a tabuada')
    } else {
        tab.innerHTML = '' //limpa a area da tabuada
        for (let c = 1; c <= 10; c++) {
            let opt = document.createElement('option')
            opt.text = `${num} x ${c} = ${num*c}`
            opt.value = `tab${c}`
            tab.appendChild(opt)
        }     
    }
    
}