var idade = 70
console.log('voce tem ' + idade + ' anos')
if (idade < 16) {
    console.log('Menor de idade, não vota')
} else if (idade < 18 || idade > 65) {
        console.log('voto opcional')
} else {
    console.log('Maior de idade, vota!') 
}