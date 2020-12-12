function contar() {
    let inicio = Number(document.getElementById('txtinicio').value)
    let fim = Number(document.getElementById('txtfim').value)
    let passo = Number(document.getElementById('txtpasso').value)
    let res = document.querySelector('div#res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando:<br>'
        if (passo <= 0) {
            window.alert('Passo invalido!Considerando passo = 1')
            passo = 1
        }
        if (inicio < fim) {
            for (let i = inicio; i <= fim; i += passo) {
                res.innerHTML += i + '\u{1F638} \u{1F449}'    
            }            
        } else {
            for (let i = inicio; i >= fim; i -= passo) {
                res.innerHTML += i + '\u{1F638} \u{1F449}'    
            }
        }
        
        res.innerHTML += '\u{2764}' 
    }
    
}
