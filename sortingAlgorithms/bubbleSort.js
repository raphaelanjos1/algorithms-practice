// Ordenar antes, depois pesquisar a informação especificada.

// Lista (array) representando a estrutura de dados a ser ordenada:

var ArrayList = function () {
  var array = []; // {1}
  this.insert = function (item) {
    //{2}
    array.push(item);
  };
  this.toString = function () {
    //3
    return array.join();
  };
  // {1} = armazena os itens em um array;
  // {2} = adiciona elementos na estrutura de dados;
  // {3} = exibe o resultado

  // ----------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||----------

  // Criando a função bubbleSort
  this.bubbleSort = function () {
    //{1}
    var length = array.length;
    for (var i = 0; i < length; i++) {
      //{2}
      for (var j = 0; j < length - 1; j++) {
        //{3}
        if (array[j] > array[j + 1]) {
          // {4}
          swap(array, j, j + 1); //{5}
        }
      }
    }
  };

  // {1} = Armazena o tamanho de array.
  // {2} = Laço externo que faz uma iteração pelo array, da primeira à ULTIMA posição. O número de passagens é igual ao tamanho do array.
  // {3} = Laço interno que faz uma iteração pelo array da primeira posição até o PENULTIMO item, no qual compararemos o item atual com o próximo (linha {4})
  // Se os itens estiverem fora de ordem (se o atual for maior que o próximo), a troca é feita pela linha 5.

  // ----------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||----------

  // Bubble sort melhorado
  // Subtraindo o número de passagens pelo laço externo do laço interno, evitamos todas as comparações desnecessárias feitas pelo laço interno.

  this.modifiedBubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  };
};

// ----------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||----------

// Declarando a função swap:

var swap = function (array, index1, index2) {
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
};

// Gerando automaticamente um array não ordenado:

function createNonSortedArray(size) {
  var array = new ArrayList();
  for (var i = size; i > 0; i--) {
    array.insert(i);
  }
  return array;
}

// ----------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||--------------------||----------

var array = createNonSortedArray(5);
console.log(array.toString());
array.bubbleSort();
console.log("bubble sort", array.toString());

var newArray = createNonSortedArray(5);
console.log(newArray.toString());
newArray.modifiedBubbleSort();
console.log("modified bubble sort", newArray.toString());
