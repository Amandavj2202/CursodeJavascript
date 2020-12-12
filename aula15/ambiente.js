let num = [5 , 8 ,9]
console.log('Nosso vetor é o ' + num)
num[3]=6 // adiciona elemento no array
console.log('Nosso vetor é o ' + num)
num.push(7) // adiciona elemento no array
console.log('Nosso vetor é o ' + num)
console.log('exibe um elemento do vetor ' + num[2])

console.log('qtd array '+ num.length) // qtd de elemntos no array
console.log('ordenado '+ num.sort()) //funcao ordem array
let id = num.indexOf(9)
if (id == -1) {
    console.log('Valor não encontrado')
} else {
    console.log('O valor 9 esta na posição ' + id) //funcao mostra a chave de identificao de um elemento
}
