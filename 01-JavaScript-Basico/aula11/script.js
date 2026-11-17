let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número');

num1 = Number(num1); // Estamos a fazer a conversão dos números
num2 = Number(num2);

//console.log(num1 + num2);

//const resultado = num1 + num2;
//alert('O resultado da sua conta foi: ' + resultado); Essa é uma das maneira de fazer.

//alert(`O resultado da sua conta foi: ${resultado}`); // Essa também é uma outra maneira de fazer
alert(`O resultado da sua conta foi: ${num1 + num2}`);// Essa também é uma terceira maneira de fazer, o resultado será o mesmo
