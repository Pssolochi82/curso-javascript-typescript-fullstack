// Este exercicio é para trocar o valor das variaveis

let varA = 'A'; // B
let varB = 'B';// C
let varC = 'C'; // A

//const varATemp = varA; // usamos essa função desse jeito para não perder o valor de A
//varA = varB;
//varB = varC;
//varC = varATemp; // Usando assim o valor de A não se perde.

//Podemos também resolver de uma outra maneira esse mesmo exercicio:

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

