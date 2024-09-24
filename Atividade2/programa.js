// Exercício de JavaScript


// Questão 1: Criando um Vetor
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}


console.log("========================");
// Questão 2: Filtrando Números
const pares = [];

for (let k = 0; k < numeros.length; k++) {
    if (numeros[k] % 2 === 0) {
        console.log(numeros[k])
    }
}


console.log("========================");
// Questão 3: Estrutura de Condição
let numero = 0; 

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}


console.log("========================");
// Questão 4: Objetos e Propriedades
const pessoa = {
    nome: "Cícero",
    idade: 26,
    cidade: "Brasília"
}

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} e moro em ${pessoa.cidade}.`)


console.log("========================");
// Questão 5: Manipulando Objetos
pessoa.profissao = "Programador";

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade}, moro em ${pessoa.cidade} e sou ${pessoa.profissao}.`)