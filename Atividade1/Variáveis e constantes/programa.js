// Variáveis e constantes


// 1) Criar uma variável
let nome = "Cícero";
console.log(nome);


console.log(`========================`);
// 2) Constante de PI
const PI = 3.14;
console.log(`O número PI é: ${PI}`);


console.log(`========================`);
// 3) Troca de valores
let a = 2;
let b = 4;
console.log(`a antes da troca = ${a}`);
console.log(`b antes da troca = ${b}`);

[a, b] = [b, a];

console.log(`a depois da troca = ${a}`);
console.log(`b depois da troca = ${b}`);


console.log(`========================`);
// 4) Incremento de variável
let contador = 0;

while (contador < 10) {
    contador += 1;
    console.log(contador)
} 