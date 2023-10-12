// Em uma empresa de fast-food, após a refeição, os clientes fazem uma avaliação da loja,
// com nota de 1 a 5 estrelas. Em determinado dia, foram atendidos exatamente 100 clientes, e as notas obtidas foram:

// Avaliação	Total de Clientes
// 1 estrela	2
// 2 estrelas	15
// 3 estrelas	18
// 4 estrelas	25
// 5 estrelas	40

// Após o fechamento do expediente, o gerente decidiu calcular a nota média das avaliações naquele dia;

// Para resolver esse problema, crie uma função chamada calcularMediaAvaliacao que deve:
//   2. Ter uma constante que define a quantidade de clientes sempre em 100;

//   2. Receber um array de objetos onde cada objeto seja composto pelos atributos numeroDeEstrelas e totalDeClientes;

//   3. Retornar a média das avaliações desse fast-food.

function calcularMediaAvaliacao(avaliacoes) {
  const clientesTotais = 100;
  let pontuacaoTotal = 0;

  for (const avaliacao of avaliacoes) {
    pontuacaoTotal += avaliacao.numeroDeEstrelas * avaliacao.totalDeClientes;
  }

  const media = pontuacaoTotal / clientesTotais;
  return media;
}
const avaliacoes = [
  { numeroDeEstrelas: 1, totalDeClientes: 2 },
  { numeroDeEstrelas: 2, totalDeClientes: 15 },
  { numeroDeEstrelas: 3, totalDeClientes: 18 },
  { numeroDeEstrelas: 4, totalDeClientes: 25 },
  { numeroDeEstrelas: 5, totalDeClientes: 40 },
];
const mediaAvaliacao = calcularMediaAvaliacao(avaliacoes);
console.log(`A média das avaliações é: ${mediaAvaliacao.toFixed(2)}`);
