// CARTÃO DE VISITA
const nome = "Enzo";
const idade = 22;
const cidade = "Sumaré";

console.log("Olá, meu nome é", nome + "tenho", idade + "moro em", cidade + '.');

// TESTE DE MUTABILIDADE
const anoDeNascimento = 2003;
// da erro

let idadeAtual = 22;
idadeAtual = 23;

console.log("Minha idade atual:", idadeAtual);

// CONTA DO RESTAURANTE
const jantar = 150;
const taxaServico = 0.10;
const gorjeta = jantar * taxaServico;
const total = jantar + gorjeta;
const porPessoa = total / 3;

console.log("Cada amigo deve pagar: R$", porPessoa);

// STATUS DO SISTEMA
let usuarioLogado = false;
console.log("Status inicial:", usuarioLogado);

usuarioLogado = true;
console.log("Status após login:", usuarioLogado);

// CONTROLE DE ESTOQUE
let estoqueCamisetas = 50;

estoqueCamisetas = estoqueCamisetas - 15;
estoqueCamisetas = estoqueCamisetas - 12;

console.log("Quantidade de camisetas disponíveis:", estoqueCamisetas);


const primeiroNome = "Enzo";
const nomeDoMeio = "Galgani";
const sobrenome = "Nunes";

const nomeCompleto = primeiroNome + " " + nomeDoMeio + " " + sobrenome;

console.log(nomeCompleto);

// CALCULADORA DE ÁREA
const largura = 10;
const comprimento = 25;

const area = largura * comprimento

console.log("A área do terreno é de " + area + " m²");

// LOJA ONLINE
const produto = "Camiseta Básica"
let preco = 100;
const freteGratis = true;

const desconto = 20;
preco = preco - desconto;

console.log( produto, preco, freteGratis);