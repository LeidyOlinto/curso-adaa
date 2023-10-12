function removerFeedbacksDuplicados(feedbacks) {
  const feedbacksUnicos = new Set(feedbacks);

  // Converter o conjunto de volta em um array
  const feedbacksSemDuplicados = Array.from(feedbacksUnicos);
  return feedbacksSemDuplicados;
}

// Exemplo de uso:
const feedbacks = [
  "Melhorar responsividade do site",
  "Erros confusos",
  "Os botões são intuitivos",
  "Erros confusos",
];

const feedbacksSemDuplicados = removerFeedbacksDuplicados(feedbacks);
console.log(feedbacksSemDuplicados);

