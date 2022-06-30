/* Desafio:
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando? 

R: "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
R: 
1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?

*/


const nome = prompt("Nos diga seu nome:");
const idade = prompt ("Agora, você poderia nos dizer sua idade?");
const lang = prompt ("hmmm... e qual linguagem de programação você está estudando?");
const msg = `Que legal ${nome}, você tem ${idade} anos e está aprendendo ${lang}`;

alert(msg);

const newlang = prompt ("mais uma coisinha... vc gostaria de estudar RUBY? Responda com o número 1 para sim e 2 para não")

if (newlang == 1) {
    alert(`Muito bom ${nome}! Continue estudando e você terá muito sucesso.`)
}else{
    alert(`Ahh que pena ${nome}... Já tentou aprender outras linguagens?`)
}
