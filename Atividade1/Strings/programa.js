// Strings

// 1) Concatenar strings
let nome = "Cícero";
let sobrenome = "Ferreira";

console.log("Olá " + nome + " " + sobrenome);


console.log(`========================`);
// 2) Métodos de strings
let frase = "Aprendendo JavaScript!."

console.log("A frase tem", frase.length, "caracteres") //Length mostra o número de caracteres da frase
console.log(frase.toUpperCase()) // Função para transformar os caracteres em maiúsculos.
console.log(frase.toLowerCase()) // Função para transformar os caracteres em minúsculos.


console.log(`========================`);
// 3) Substituir partes da string
// O método replace() em JavaScript é utilizado para substituir partes de uma string por outra. Ele pode ser usado com uma string ou uma expressão regular como padrão de busca.
let frase2 = "JavaScript é divertido";
console.log(`Frase antes da substituição ${frase2}`);

let novaFrase2 = frase2.replace("divertido", "incrível");
console.log(`Frase depois da substituição ${novaFrase2}`);


console.log(`========================`);
// 4) Dividir uma string
// O método split() em JavaScript é utilizado para dividir uma string em um array de substrings, com base em um delimitador especificado.
let frutasString = "maçã,banana,laranja"

let frutasArray = frutasString.split(",");

console.log(frutasArray)