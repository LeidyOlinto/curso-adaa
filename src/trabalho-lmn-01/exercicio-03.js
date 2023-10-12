// Um sistema foi projetado para colher dos usuários durante o cadastro seu primeiro nome,
// segundo nome e terceiro nome.
// Após alguns anos os desenvolvedores notaram que nunca precisaram desses
// valores de forma separada e agora precisam inserir um só atributo.
// A lista original é assim:
// const usuarios = [
//   {
//     "primeiroNome": "Antonio",
//     "segundoNome": "Freitas",
//     "terceiroNome": "Oliveira",
//     "age": 35
//   },
//   {
//     "primeiroNome": "Manuel",
//     "segundoNome": "Guedes",
//     "terceiroNome": "Peixoto",
//     "age": 23
//   }
// ];
//Agora eles precisam que a lista fique assim:
// const usuarios1 = [
//   {
//     "nome ": "Antonio Freitas Oliveira",
//     "age": 35
//   },
//   {
//     "nome ": "Manuel Guedes Peixoto",
//     "age": 23
//   }
// ];
// Para resolver esse problema, crie uma função chamada montarNomesCompletos que deve:
// Receber um array de objetos onde cada objeto seja composto pelos atributos primeiroNome,
//segundoNome e terceiroNome.
// Retornar um array nos quais os objetos tenham apenas os atributos nome e idade.
// Esse novo atributo idade deve ser a junção dos antigos atributos primeiroNome,
//segundoNome e terceiroNome.
// Utilize for in no seu desenvolvimento.

function montarNomesCompletos(usuarios) {
  const novosUsuarios = [];

  for (const usuario of usuarios) {
    const nomeCompleto = `${usuario.primeiroNome} ${usuario.segundoNome}  ${usuario.terceiroNome}`;
    const novoUsuario = {
      age: usuario.age,
      nome: nomeCompleto
      
    };
    novosUsuarios.push(novoUsuario);
  }
  return novosUsuarios;
}
const usuarios = [
    {
      "primeiroNome": "Antonio",
      "segundoNome": "Freitas",
      "terceiroNome": "Oliveira",
      "age": 35
    },
    {
      "primeiroNome": "Manuel",
      "segundoNome": "Guedes",
      "terceiroNome": "Peixoto",
      "age": 23
    }
  ];

const usuariosComNomesCompletos = montarNomesCompletos(usuarios);
console.log(JSON.stringify(usuariosComNomesCompletos, null, 2));
