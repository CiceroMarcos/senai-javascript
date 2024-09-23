// Operadores

// 1) Operadores aritméticos
let a = 4;
let b = 8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


console.log(`========================`);
// 2) Operadores de comparação
let c = 5;
let d = 7;

console.log(c == d);
console.log(c === d);
console.log(c != d);
console.log(c !== d);
console.log(c < d);
console.log(c > d);
console.log(c <= d);
console.log(c >= d);


console.log(`========================`);
// 3) Operadores lógicos
let verdadeiro = true;
let falso = false;

console.log(verdadeiro && falso);
console.log(verdadeiro && verdadeiro);
console.log(falso && verdadeiro);
console.log(falso && falso);

console.log(verdadeiro || falso);
console.log(verdadeiro || verdadeiro);
console.log(falso || verdadeiro);
console.log(falso || falso);

console.log(verdadeiro != falso);
console.log(verdadeiro != verdadeiro);
console.log(falso != verdadeiro);
console.log(falso != falso);


console.log(`========================`);
// 4) Operador ternário
let idade = 26;

let mensagem = (idade >= 18) ? "A pessoa é maior de idade." : "A pessoa é menor de idade.";

console.log(mensagem)