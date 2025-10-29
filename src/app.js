// Escribe una función fromListToObject que tome una matriz (array de arrays), y retorne un objeto con cada par de elementos de la matriz como un par clave-valor (key-value).
// 📎 Ejemplo:
// let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
// console.log(output); // --> { make : 'Ford', model : 'Mustang', year : 1964 }
// 💡 Pistas:
// No modifiques el array dado.

// Asume que todos los elementos del array serán de tipo string.

// Ten en cuenta que la entrada puede tener una cantidad de elementos que puede variar. Por ejemplo, si la entrada tenía 6 valores en lugar de 4, tu código debe ser capaz de adaptarse.

function fromListToObject(array) {
  // your code here
  let aux = {};
  for (let e of array) {
    aux[e[0]] = e[1];
  }
  return aux;
}

let output = fromListToObject([
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', 1964],
]);
console.log(output); // --> { make: 'Ford', model: 'Mustang', year: 1964 }


// 147 filpEveryNchars
// 📝 Instrucciones:
// Declara una función llamada flipEveryNChars.

// La función acepta 2 parámetros cuyos valores serán un string y un número.

// Cuando llames a la función, esta devuelve un string con cada n de caracteres invertidos, incluidos los espacios.

// 📎 Ejemplo:
// let input = 'a short example'; 
// let output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma
// Desglosando este ejemplo, pieza por pieza:

// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

function flipEveryNChars(input, n) {
  let result = "";       // Aquí guardaremos el resultado final

  // Recorremos el string de n en n
  for (let i = 0; i < input.length; i += n) {

    // Tomamos un pedazo (slice) de longitud n
    let chunk = input.slice(i, n + i);

    // Invertimos ese pedazo
    let reversedChunk = chunk.split("").reverse().join("");

    // Lo agregamos al resultado
    result += reversedChunk;
  }

  return result;
}

let input = "a short example";
let output2 = flipEveryNChars(input, 5);
console.log(output2); // --> ohs axe trelpma


//150 isRotated
// Una rotación en un string se define como quitar el primer elemento y concatenarlo al final. Dado N y una matriz de N cadenas. Tu trabajo es predecir el mínimo número de rotaciones en los strings para que todos los strings sean iguales.

// 📝 Instrucciones:
// La función isRotated recibe dos strings como parámetro, isRotated debe retornar true si el segundo string es una versión rotada del primer string.
// 📎 Ejemplo:
// let output = isRotated("Hello World", "orldHello W")
// console.log(output) // --> true

function isRotated(str1, str2) {
  // Si no tienen el mismo largo, no pueden ser rotaciones
  if (str1.length !== str2.length) {
    return false;
  }

  // Convertimos los strings en arreglos de caracteres (para poder rotarlos)
  let arr1 = [];
  for (let i = 0; i < str1.length; i++) {
    arr1.push(str1[i]);
  }

  let arr2 = [];
  for (let i = 0; i < str2.length; i++) {
    arr2.push(str2[i]);
  }

  // Intentaremos rotar arr2 tantas veces como largo tenga
  let vecesARotar = arr2.length;

  // Repetimos el proceso de rotar
  while (vecesARotar > 0) {
    // Guardamos el primer carácter
    let primerCaracter = arr2[0];

    // Quitamos el primer carácter del arreglo
    arr2.shift();

    // Lo agregamos al final (simula la rotación)
    arr2.push(primerCaracter);

    // Comparamos ambos arreglos convirtiéndolos a string
    if (JSON.stringify(arr2) === JSON.stringify(arr1)) {
      return true; // Si son iguales, sí es una rotación válida
    }

    // Restamos una rotación
    vecesARotar--;
  }

  // Si tras rotar todas las veces posibles nunca fueron iguales, no es rotación
  return false;
}

// Ejemplos:
console.log(isRotated('hello world', 'orldhello w')); // --> true
console.log(isRotated('hello world', 'omrel wp'));    // --> false



//146 flipPairs
// 📝 Instrucciones:
// Declara una función llamada flipPairs.

// La función acepta un string como parámetro.

// Cuando llames la función, debe retornar el string con cada par de caracteres invertidos, incluidos los espacios.

// 📎 Ejemplo:
// let input = 'check out how interesting this problem is, it\'s insanely interesting!';
// let output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!


function flipPairs(input) {
  let result = "";

  // Recorremos el string de 2 en 2
  for (let i = 0; i < input.length; i += 2) {

    // Tomamos el carácter actual
    let first = input[i];

    // Tomamos el siguiente carácter (puede no existir si es impar)
    let second = input[i + 1];

    // Si second existe, los invertimos
    if (second !== undefined) {
      result += second + first;
    } else {
      // Si no hay par (caracter sobrante), se agrega tal cual
      result += first;
    }
  }

  return result;
}

let input2 = "Can you see what this is about?";
let output3 = flipPairs(input2);
console.log(output3); 
// --> aC noy ues ehwtat ih ssia obtu?



//153 phoneNumber
// 📝 Instrucciones:
// Usa el esqueleto dado y modifica las funciones para que dado un array de números, genere un número de teléfono en el siguiente formato: (000) 000-0000
// 📎 Ejemplo:
// let output = PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render();
// console.log(output); // --> "(650) 835-9172"
// 💡 Pistas:
// No dejes ningún método sin usar.

// Este es un ejemplo de una mala implementación:

// function renderPhoneNumber(numbers){
//  return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
//    + numbers[3] + numbers[4] + numbers[5] + '-' 
//    + numbers[6] + numbers[7] + numbers[8] + numbers[9];
// }
// Lo que deberías hacer en su lugar es leer el esqueleto orientado a objetos y después de comprender el flujo de procesamiento de la información, completar la implementación.


function phoneNumber(numbers) {
  // Tomamos los primeros 3 números y los unimos
  let areaCode = numbers.slice(0, 3).join("");

  // Tomamos los siguientes 3
  let exchangeCode = numbers.slice(3, 6).join("");

  // Tomamos los últimos 4
  let lineNumber = numbers.slice(6, 10).join("");

  // Armamos el formato (000) 000-0000
  let result = "(" + areaCode + ") " + exchangeCode + "-" + lineNumber;

  return result;
}

// Ejemplo de uso
let output4 = phoneNumber([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
console.log(output4); // → "(650) 835-9172"



//07.2 Letter Counter
// Nuestro cliente necesita un programa que cuente las repeticiones de las letras en un string dado. Sé que es extraño, pero es muy testarudo ¡Lo necesitamos lo antes posible!

// 📝 Instrucciones:
// Crea un objeto donde las letras son las propiedades y los valores son el número de veces que esa letra se repite en toda la cadena.
// Por ejemplo:

// const word = "Hello World";

// // Debería imprimir en la consola { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
// 💡 Pistas:
// Recorre todo el string (usa un bucle).

// En cada iteración verifica si el objeto counts tiene la letra inicializada como una propiedad.

// Si no está inicializada, hazlo y establece el valor en 1 (la primera vez que se encuentra).

// Si ya se inicializó, simplemente incrementa el valor de la propiedad en uno.

// Recuerda ignorar los espacios en blanco en el string.

// Debes colocar en minúscula (lowercase) todas las letras para tener un conteo exacto de todas las letras.


let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Recorremos cada posición del string
for (let i in par) {

    // Tomamos la letra en la posición i y la pasamos a minúscula
    const letter = par[i].toLowerCase();

    // Si es un espacio, lo ignoramos
    if (letter == " ") continue;

    // Si la letra todavía no existe en el objeto, la inicializamos en 1
    else if (counts[letter] == undefined) {
        counts[letter] = 1;
    } 
    // Si ya existe, aumentamos en 1 su contador
    else {
        counts[letter] = counts[letter] + 1;
    }
}

console.log(counts);