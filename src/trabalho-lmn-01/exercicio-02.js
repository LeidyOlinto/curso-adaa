// Uma grande empresa de e-commerce está fazendo se preparando para as festas de
//  fim de ano e para atrair mais clientes
//  para o grande dia da promoção quer colocar um contador em seu site.

// Os clientes abrirão o site e terão um contador mostrando quantos dias faltam para o Natal:

// Dado esse contexto, desenvolva uma função que calcula o número de dias até o próximo Natal.
// A função deve retornar uma string no seguinte formato:
// '(...) dias restantes até o Natal!', onde '(...) ' é o número de dias restantes


function diasAteNatal() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const dataProximoNatal = new Date(anoAtual, 11, 25);
  if (dataAtual > dataProximoNatal) {
    dataProximoNatal.setFullYear(anoAtual + 1);
  }
  const diferencaEmMilissegundos = dataProximoNatal - dataAtual;
  const diasRestantes = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
  const mensagem = `${diasRestantes} dias restantes até o Natal!`;
  return mensagem;
}
console.log(diasAteNatal());

