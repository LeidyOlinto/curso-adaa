// A funcionária de um banco percebeu que haviam muitos 
// clientes estavam com seus empréstimos atrasados. 
// Para alertá-los e solicitar o pagamento ela precisa da lista com os
//  nomes desses clientes e em seguida ela irá enviar para o setor financeiro disparar
//  os e-mails de cobrança. A lista atual é a seguinte:

// Para resolver esse problema, crie uma função chamada clientesComSaldoDevedor que deve:
// Receber um array de objetos onde cada objeto seja composto pelos atributos 
// nome e comSaldoDevedor.
// Retornar um array contendo somente os clientes com saldo devedor.
// Utilize while no seu desenvolvimento.
 
 
 function clientesComSaldoDevedor(clientes) {
  const clientesComSaldoDevedor = [];
  let i = 0;

  while (i < clientes.length) {
    if (clientes[i].comSaldoDevedor === true) {
      clientesComSaldoDevedor.push(clientes[i]);
    }
    i++;
  }
  return clientesComSaldoDevedor;
}
const clientes = [ 
  { nome: 'David', comSaldoDevedor: true},
  { nome: 'Vinoth', comSaldoDevedor: true},
  { nome: 'Divya', comSaldoDevedor: false},
  { nome: 'Ishitha', comSaldoDevedor: false},
  { nome: 'Thomas', comSaldoDevedor: true}
];

const clientesDevedores = clientesComSaldoDevedor(clientes);
console.log(clientesDevedores);

