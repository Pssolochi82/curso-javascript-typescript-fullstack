/*
Palmira Solochi, tem 41 anos, pesa 84 kg
tem 1.8 de altura e o seu IMC é de 25.925925925925924
Palmira Solochi nasceu em 1985.
*/
const nome = 'Palmira';
const sobrenome = 'Solochi';
const idade = 41;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal = 84
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2026 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
