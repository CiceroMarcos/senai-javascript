// Desafios

// 1) Contar vogais
// O método includes() em JavaScript é utilizado para verificar se um determinado valor está presente em um array ou em uma string. Ele retorna true se o valor for encontrado e false caso contrário.
// O método é case-sensitive para strings, o que significa que "A" e "a" são considerados diferentes.
const texto = "Hoje vou programar muito!";
const vogais = "aeiouAEIOU";
let contador = 0;

for (let letra of texto) {
    if (vogais.includes(letra)) {
        contador++;
    }
}

console.log(`Número de vogais: ${contador}`);


console.log(`========================`);
// 2) Reverso de uma string
// split(''): Divide a string em um array de caracteres.
// reverse(): Inverte a ordem dos caracteres no array.
// join(''): Junta os caracteres de volta em uma string.
const frase = "Olá, mundo!";
const stringInvertida = frase.split('').reverse().join('');
console.log(stringInvertida);


console.log(`========================`);
// 3) Comparação de strings
// toLowerCase(): Converte ambas as strings para minúsculas.
// Comparação: Compara as duas strings convertidas.
// A variável iguais será true se as strings forem iguais (ignorando maiúsculas e minúsculas) e false caso contrário.
const string1 = "Olá";
const string2 = "olá";

const iguais = string1.toLowerCase() === string2.toLowerCase();
console.log(iguais);