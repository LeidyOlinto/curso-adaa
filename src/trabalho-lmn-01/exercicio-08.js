
// Um engenheiro civil precisa calcular se em um determinado galpão cabem todos as 
// caixas que estão chegando em um caminhão.
// Ele possui as medidas de todas as caixas, que foram dadas assim:
// const caixas = [
//   [4, 2, 4],
//   [3, 3, 3],
//   [1, 1, 2],
//   [2, 1, 1],
// ];

// - Ele gostaria de saber qual é o volume total dessas caixas juntas.
// - Para resolver esse problema, crie uma função chamada calcularVolumeDeconstiasCaixas:

// 1. Receber um array de array onde cada array são as medidas de uma caixa.
// 2. Retornar um number que seja o volume total dessas caixas juntas.
// 3. Utilize a função `reducer()` em seu desenvolvimento.

function calcularVolumeDasCaixas(caixas) {
  const volumeTotal = caixas.reduce((totalVolume, caixa) => {
    const volumeCaixa = caixa.reduce((volume, medida) => volume * medida, 1);
    return totalVolume + volumeCaixa;
  }, 0);

  return volumeTotal;
}
const caixas = [
  [4, 2, 4],
  [3, 3, 3],
  [1, 1, 2],
  [2, 1, 1],
];

const volumeTotal = calcularVolumeDasCaixas(caixas);
console.log(volumeTotal);
