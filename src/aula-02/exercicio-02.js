function encontrarMaximo(vetor) {
  return vetor.length ? Math.max(...vetor) : null;
}

const vetor = [10, 5, 8, 15, 3];
const maximo = encontrarMaximo(vetor);
console.log("O valor máximo no vetor é:", maximo);






