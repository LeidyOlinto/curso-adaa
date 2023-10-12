// Miguel é fanático em compras e sempre está olhando site de descontos, nem sempre o site mostra a 
// porcentagem real de desconto e ele tem em mãos 
// os valores originais de determinados produtos que já está olhando faz tempo.
// Ele salvou o maior valor que aquele produto foi ofertado e o valor do desconto agora em porcentagem:
// const descontos = [
//   { valorOriginal: 1500, porcentagemDoDesconto: 50 },
//   { valorOriginal: 89, porcentagemDoDesconto: 20 },
//   { valorOriginal: 100, porcentagemDoDesconto: 75},
// ];
// Ele gostaria de que sua lista fosse retornada assim:
// const descontos = [
//   { valorOriginal: 1500, valorComDesconto: 750 },
//   { valorOriginal: 89, valorComDesconto: 71.2 },
//   { valorOriginal: 100, valorComDesconto: 25 },
// ];
// Para resolver esse problema, crie uma função chamada obterValorComDescontodeve:
// Receber um array de objetos com os atributos valorOriginal e porcentagemDoDesconto.
// Retornar um array de objetos com os atributos valorOriginal e valorComDesconto,
// onde o atributo valorComDesconto é o valor do produto com a porcentagem do desconto aplicada.



function obterValorComDesconto(produtos) {
  const produtosComDesconto = [];

  for (const produto of produtos) {
    const desconto = (produto.porcentagemDoDesconto / 100) * produto.valorOriginal;
    const valorComDesconto = produto.valorOriginal - desconto;

    produtosComDesconto.push({
      valorOriginal: produto.valorOriginal,
     // porcentagemDoDesconto: produto.porcentagemDoDesconto,
      valorComDesconto: valorComDesconto,
    });
  }
  return produtosComDesconto;
}

const descontos = [
  { valorOriginal: 500, porcentagemDoDesconto: 15 },
  { valorOriginal: 800, porcentagemDoDesconto: 35 },
  { valorOriginal: 2000, porcentagemDoDesconto: 65 },
];

const produtosComDesconto = obterValorComDesconto(descontos);
//console.log(produtosComDesconto);
console.log(JSON.stringify(produtosComDesconto, null, 1));