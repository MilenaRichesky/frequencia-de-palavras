function frequenciaDePalavras(palavra, frase) {    
    const options = 'ig';
    const expression = new RegExp(palavra, options);
    const result = frase.match(expression);
    const quantidade = result?.length || 0;

    return `A palavra ${palavra} aparece ${quantidade} de vezes na frase`;
}

module.exports = frequenciaDePalavras;