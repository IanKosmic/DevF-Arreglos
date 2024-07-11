//Ejercicio 2 Arreglos
//Deberas realizar los ejercicios anexados abajo:
//1. Crear un array vacío, luego generar 10 números al azar y guardarlos 
//en un array. Mostrar en consola el resultado del array.

//2. El usuario deberá ingresar un string con varias palabras separadas por 
//coma en un popup y se deben convertir en un array, 
//(el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). 
//Mostrar en consola dicho resultado.

//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: 
//El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. 
//Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor 
//elemento de un arreglo.

// 1. Crear un array usando datos, luego generar 10 números al azar y guardarlos 
//en un array. Mostrar en consola el resultado del array.
let randomNumbers = [
        10,
        77,
        17,
        94,
        29,
        10,
        91,
        52,
        45,
        69,
];
console.log("Array de 10 números al azar:", randomNumbers);
let userInput = prompt("Ingresa varias palabras separadas por coma:");
let wordsArray = [];
let currentWord = "";
let index = 0;
for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === ',') {
        wordsArray[index] = currentWord;
        index++;
        currentWord = "";
    } else {
        currentWord += userInput[i];
    }
}
wordsArray[index] = currentWord; // Agregar la última palabra
console.log("Array de palabras ingresadas por el usuario:", wordsArray);

// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo 
//ordenado de menor a mayor, muestra el número menor y el número mayor.
let givenArray = [10, 40, 30, 20, 15, 5];
let minNumber = givenArray[0];
let maxNumber = givenArray[0];

// Encontrar el número menor y el número mayor manualmente
for (let i = 1; i < givenArray.length; i++) {
    if (givenArray[i] < minNumber) {
        minNumber = givenArray[i];
    }
    if (givenArray[i] > maxNumber) {
        maxNumber = givenArray[i];
    }
}

// Ordenar el array manualmente (usando el algoritmo de burbuja)
for (let i = 0; i < givenArray.length - 1; i++) {
    for (let j = 0; j < givenArray.length - 1 - i; j++) {
        if (givenArray[j] > givenArray[j + 1]) {
            let temp = givenArray[j];
            givenArray[j] = givenArray[j + 1];
            givenArray[j + 1] = temp;
        }
    }
}

console.log("Array ordenado de menor a mayor:", givenArray);
console.log("Número menor:", minNumber);
console.log("Número mayor:", maxNumber);
