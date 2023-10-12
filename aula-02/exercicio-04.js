function verificarPosicaoPacienteFila(nomePaciente) {
  const posicao = pacientes.indexOf(nomePaciente) + 1;
  return posicao || null;
}

const pacientes = [
"Bento Raimundo Cavalcanti",
"Oliver Samuel Cardoso",
"Geraldo Ryan Danilo Carvalho",
"Isis Tatiane Sophie Santos",
"Clarice Esther Moraes",
];

const nomeProximoPaciente = "Isis Tatiane Sophie Santos";
const posicaoProximoPaciente = verificarPosicaoPacienteFila(nomeProximoPaciente, pacientes);

if (posicaoProximoPaciente !== null) {
  console.log(`A posição do paciente ${nomeProximoPaciente} na fila é: ${posicaoProximoPaciente}`);
} else {
  console.log(`Paciente ${nomeProximoPaciente} não encontrado na fila.`);
}