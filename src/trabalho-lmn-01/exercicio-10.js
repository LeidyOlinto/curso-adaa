// Ordenar Livros da Biblioteca
// A biblioteca de uma universidade federal está sendo digitalizada.
//  O catálogo dos livros já está presente dentro de um sistema desenvolvido internamente:
// const livros = [
//   { autor: "Guimarães Rosa", titulo: "Grande Sertão: Veredas", livroID: 1254 },
//   { autor: "Jorge Amado", titulo: "Capitães da Areia", livroID: 4264 },
//   {
//     autor: "Clarice Lispector",
//     titulo: "A Hora da Estrela",
//     livroID: 3245,
//   },
// ];
// O funcionário responsável pela catalogação agora precisa ordenar
//  os livros pelo título para apresentar no site da biblioteca.
// Para resolver esse problema, crie uma função chamada ordenarLivros que deve:
// Receber um array de objetos onde cada objeto seja composto pelos atributos autor, titulo e livroID.
// Retornar esse array com seus objetos em ordem alfabética crescente usando o titulo do livro.

function ordenarLivros(livros) {
  return livros.sort((livroA, livroB) => {
    const tituloA = livroA.titulo.toLowerCase();
    const tituloB = livroB.titulo.toLowerCase();
    return tituloA.localeCompare(tituloB);
  });
}

const livros = [
  { autor: "Guimarães Rosa", titulo: "Grande Sertão: Veredas", livroID: 1254 },
  { autor: "Jorge Amado", titulo: "Capitães da Areia", livroID: 4264 },
  {
    autor: "Clarice Lispector",
    titulo: "A Hora da Estrela",
    livroID: 3245,
  },
];
const livrosOrdenados = ordenarLivros(livros);
console.log(livrosOrdenados);
