var frequenciaDePalavras = require('./index');

const theory = [
  {
    word: "crescer",
    phrase: "Quero fazer o crescer para poder crescer profissionalmente",
    result: "A palavra crescer aparece 2 de vezes na frase"
  },
  {
    word: "amar",
    phrase: "Amar e sonhar, sonhar e viver, viver e curtir, curtir e amar",
    result: "A palavra amar aparece 2 de vezes na frase"
  },
  {
    word: "carro",
    phrase: "Adoro esportes",
    result: "A palavra carro aparece 0 de vezes na frase"
  },
]

describe('Frequencia de palavras', () => {
  let value

  test.each(theory)('Deve testar a frase "$phrase"', ({ word, phrase, result }) => {
    value = frequenciaDePalavras(word, phrase)
    expect(value).toEqual(result);
  });

});