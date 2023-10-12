// Antepassados e descendentes
// Uma genealogista está montando uma árvore genealógica para uma família. 
// A cada novo indivíduo ser catalogado e inserido na pesquisa ela gostaria de deixar o processo mais fácil
//  pois hoje ela recebe a geração e o sexo desse indivíduo.
// A tabela na qual ela se baseia é essa:
// Geração	Masculino	Feminino
// -3	bisavô	bisavó
// -2	avó	avô
// -1	pai	mãe
// 0	próprio indivíduo	

// function determinarParentesco(geracao, sexo) {
//   const generacoes = {
//     '-3': {
//       masculino: 'bisavô',
//       feminino: 'bisavó',
//     },
//     '-2': {
//       masculino: 'avô',
//       feminino: 'avó',
//     },
//     '-1': {
//       masculino: 'pai',
//       feminino: 'mãe',
//     },
//     '0': {
//       masculino: 'próprio indivíduo',
//       feminino: 'próprio indivíduo',
//     },
//   };

//   return generacoes[geracao] ? generacoes[geracao][sexo] : 'Desconhecido';
// }
// console.log(determinarParentesco('-2', 'masculino'));
// console.log(determinarParentesco('-1', 'feminino')); 


function posicaoNaArvoreGenealogica(geracao, sexo) {
  const generacoes = {
    '-3': {
      masculino: 'bisavô',
      feminino: 'bisavó',
    },
    '-2': {
      masculino: 'avô',
      feminino: 'avó',
    },
    '-1': {
      masculino: 'pai',
      feminino: 'mãe',
    },
    '0': {
      masculino: 'próprio indivíduo',
      feminino: 'próprio indivíduo',
    },
  };
  if (generacoes[geracao]) {
    if (sexo === 'masculino') {
      return generacoes[geracao].masculino;
    } else if (sexo === 'feminino') {
      return generacoes[geracao].feminino;
    }
  }

  return 'Desconhecido';
}

// Exemplo de uso:
console.log(posicaoNaArvoreGenealogica('-2', 'feminino')); // Retorna 'avó'
console.log(posicaoNaArvoreGenealogica('-1', 'feminino')); // Retorna 'mãe'
