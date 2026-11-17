// Dados primitivos, String, Number, Undefined, Null, Boolean.
const nome = 'Palmira'; // string
const nome1 = "Palmira"; // stringconst nome = 'Palmira'; // string
const nome2 = `Palmira`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; //undefined ->não aponta para local nenhum da memória
const sobreNomeAluno = null; // Nulo -> Não aponta para locl nenhum da memória
const aprovado = false; // Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2