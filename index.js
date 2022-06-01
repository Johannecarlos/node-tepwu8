const clientes = [
  ['Vanessa', 4],
  ['Gabriel', 1],
  ['Andreia', 3],
  ['Juliana', 5],
  ['Gilberto', 2],
];
console.table(clientes);
clientes.sort((a, b) => b[1] - a[1]);
console.table(clientes);

const numeros = [10, 5, 1000, 500000, 1.99];
console.table(numeros);
numeros.sort((a, b) => b - a);
console.table(numeros);
