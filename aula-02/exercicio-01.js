function somaElementos(vetor) {
  let soma = 0;
  for (let i = 1; i < vetor.length; i++) {
    soma =+ vetor[i];
  }
  return soma;
}

const numeros = [1, 2, 3, 4, 5,10];
const resultado = somaElementos(numeros);
console.log("A soma dos elementos é:", resultado);

