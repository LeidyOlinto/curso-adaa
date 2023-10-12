function validarFeedbackValidos(feedback) {
  const feedbacksValidos = ["Ruim", "Pessimo", "Regular", "Bom", "Otimo"];
  return (
    feedbacksValidos.includes(feedback) ||
    (feedback === "Péssimo" && feedbacksValidos.includes("Pessimo")) ||
    (feedback === "Ótimo" && feedbacksValidos.includes("Otimo"))
  );
}
const feedbackDigitado = "Péssimo";
const feedbackEValido = validarFeedbackValidos(feedbackDigitado);
console.log(feedbackEValido);
if (feedbackDigitado) {
  console.log("o feedback é valido!");
} else
  (feedbackDigitado) => {
    console.log("O feedback é invalido");
  };

//git do professor.
//https://github.com/evercan/aula-1091
