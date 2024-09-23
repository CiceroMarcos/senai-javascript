// Tipos de dados

// 1) Identificando tipos
let nome = "Cícero"; // String
let idade = 26; // Number
let verdadeiro = true; // Boolean
let moto = { 
    marca: "Yamaha",
    modelo: "XJ6"
}; // Objeto
let frutas = ["banana", "morgango", "uva"]; // Array

console.log("Tipo de nome:", typeof nome);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de verdadeiro:", typeof verdadeiro);
console.log("Tipo de carro:", typeof moto);
console.log("Tipo de frutas:", typeof frutas); // É um array, mas é identificado como objeto


console.log(`========================`);
// 2) Conversão de tipos
let string = "42";
let numero = Number(string);
console.log("Tipo de numero:", typeof numero);


console.log(`========================`);
// 3) Operações com arrays
let numeros = [2, 4, 6, 8, 10];

let soma = numeros.reduce((soma, num) => soma + num, 0);
console.log(soma);


console.log(`========================`);
// 4) Manipulação de objetos
let carro = {
    marca: "Ford",
    modelo: "Fiesta",
    ano: 2015
}

console.log(carro)