var frequenciaDePalavras = require('./index');

describe('Frequencia de palavras', () => {

  test('Deve testar a frase "Quero fazer o crescer para poder crescer profissionalmente"', () => {
    var resultado = frequenciaDePalavras("crescer", "Quero fazer o crescer para poder crescer profissionalmente")
    expect(resultado).toEqual("A palavra crescer aparece 2 de vezes na frase");
  })

  test('Deve testar a frase "Amar e sonhar, sonhar e viver, viver e curtir, curtir e amar"', () => {
    var resultado = frequenciaDePalavras("amar", "Amar e sonhar, sonhar e viver, viver e curtir, curtir e amar")
    expect(resultado).toEqual("A palavra amar aparece 2 de vezes na frase");
  })

  test('Deve testar uma frase sem ocorrencias', () => {
    var resultado = frequenciaDePalavras("carro", "Adoro esportes")
    expect(resultado).toEqual("A palavra carro aparece 0 de vezes na frase");
  })

});