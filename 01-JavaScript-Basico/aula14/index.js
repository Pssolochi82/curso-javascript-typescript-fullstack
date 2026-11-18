// IEEE 754-2008
let num1 = 0.7; //number
let num2 = 0.1; //number

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0

num1 = parseFloat(num1.toFixed(2)); // A que pode também utilizar Number que o resulto será igual.

console.log(num1);
console.log(Number.isInteger(num1));


// Numbers em JavaScript
//let num1 = 10; //number
//let num2 =2.5; //number

//console.log(num1.toString() + num2); // Quando usamos esta operação não estamos a editar a variavél, estamos a converter numa String, será realizado uma concatenação
// num1 = num1.toString();
//console.log(typeof num1); // o Typeof simplesmente identifica a string
//console.log(num1.toString(2)); // Vamos fazer uma representação binaria
//console.log(num1.toFixed(2)); //Vamos arrendodar as casas decimas e definimos quantas casas decimas queremos colocar
//console.log(Number.isInteger(num1)); // Essa função ou metodo vai retornar verdadeiro ou false
//console.log(Number.isNaN(temp));
//let temp = num1 + '5';
//console.log(temp);