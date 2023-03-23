// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}
// console.log(soma(2,3))

// // // EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt("Dê o seu ola!")
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// // EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("qual a altura?")
  const largura = prompt('qual a largura?')
  const area =  altura*largura  
  console.log(area) 
}

// // EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Em que ano você esta?")
  const anoNascimento = prompt("Qual seu ano de nascimento?")
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = (peso/(altura*altura))
  return IMC 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Quantos anos você tem?")
  const email = prompt("Qual o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite 3 cores favoritas. Sua primeira.")
  const cor2 = prompt('A segunda.')
  const cor3 = prompt('A terceira')
  console.log([cor1,cor2,cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringUpper = string.toUpperCase()
  return stringUpper
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const venda = custo /valorIngresso
  return venda
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0]
  const ultimo = array[array.length-1]
  
  array[0] = ultimo
  array[array.length-1] = primeiro

  return array
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const checagemStrings = string1.toUpperCase() === string2.toUpperCase()
  return checagemStrings
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
const minhaFuncao = () =>{ 
  return "Olá, mundo!"
}
console.log(minhaFuncao())

