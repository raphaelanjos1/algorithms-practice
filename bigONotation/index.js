function increment(num) {
  return ++num;
}

console.log(increment(1));

// Executando increment(1), o tempo de execução será x.
// Se o parâmetro for alterado para increment(2), o tempo de execução será o mesmo
// Por esse motivo, a função increment é um exemplo de O(1) - constante.

// ----------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||----------

// Algoritmo de busca sequencial

function sequentialSearch(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (item === array[i]) {
      // {1}
      return i++;
    }
  }
  return -1;
}

var elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sequentialSearch(elements, 1));
console.log(sequentialSearch(elements, 11));

// O custo é igual ao numero de vezes que executamos o IF de {1}.
// Passando um array com 10 elementos e procurando pelo elemento 1, na primeira tentativa encontraremos o elemento. Custo 1.
// Procurando pelo elemento 11, {1} será executado 10 vezes e o valor não será encontrado, retornando -1. O custo será 10.
// O custo total sempre depende do tamanho do array e do item que procuramos.
// Concluimos que sequentialSearch tem uma complexidade O(n), onde n é o tamanho do array (entrada).

// ----------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||----------

// Para exemplificar O(n²), usaremos o algoritmo de bubble sort.

function swap(array, index1, index2) {
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
}

// function bubbleSort(array) {
//   var length = array.length;
//   for (var i = 0; i < length; i++) {
//     //{1}
//     for (var j = 0; j < length - 1; j++) {
//       //{2}
//       if (array[j] > array[j + 1]) {
//         swap(array, j, j + 1);
//       }
//     }
//   }
// }

// Considerar custo 1 para a execução de cada laço "for" das linhas {1} e {2}.

// Alterando o código para calcular o custo

function bubbleSort(array) {
  var length = array.length;
  var cost = 0;
  for (var i = 0; i < length; i++) {
    //{1}
    cost++;
    for (var j = 0; j < length - 1; j++) {
      //{2}
      cost++;
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  console.log("cost for bubbleSort with input size " + length + " is " + cost);
}

bubbleSort(elements);
// Ao executar bubbleSort para um array de tamanho 10, o custo será 100 (10²).
// O código de complexidade O(n) tem apenas 1 laço, enquanto o código O(n²) tem 2 laços aninhados
