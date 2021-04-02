//====================================================//
//==================DESCRIÇÂO========================//
//TRANSFOMAR O VALOR DE UM PLAYSTASHION NO VALOR EM DÓLAR EM REAL//
var moeda = prompt("PARA CAUCULAR: \nDólar Americano digite: 1 \nPara Dólar Canadense digite: 2 \nPara Dólar Australiano digite: 3 \nPara Euro digite: 4 \nPara Libra digite: 5 \n")


if (moeda == 1) {
    var dolarAm = parseFloat(prompt("Qual o valor em Dólar Americano US$"))
    var real = dolarAm * 5.67
    var realConv = real.toFixed(2)
    document.getElementById("fundo").innerHTML = "<h2> O valor em reias é R$" + realConv + "</h2>";
} else if (moeda == 2) {
    var dolarCan = parseFloat(prompt("Qual o valor em Dólar Canadense CAD $"))
    var real = dolarCan * 4.49
    var realConv = real.toFixed(2)
    document.getElementById("fundo").innerHTML = "<h2> O valor em reias é R$" + realConv + "</h2>";
} else if (moeda == 3) {
    var dolarAs = parseFloat(prompt("Qual o valor em Dólar Australiano AUD $"))
    var real = dolarAs * 4.30
    var realConv = real.toFixed(2)
    document.getElementById("fundo").innerHTML = "<h2> O valor em reias é R$" + realConv + "</h2>";
} else if (moeda == 4) {
    var euro = parseFloat(prompt("Qual o valor em Euro €"))
    var real = euro * 6.66
    var realConv = real.toFixed(2)
    document.getElementById("fundo").innerHTML = "<h2> O valor em reias é R$" + realConv + "</h2>";
} else if (moeda == 5) {
    var libra = parseFloat(prompt("Qual o valor em Libra £"))
    var real = libra * 6.66
    var realConv = real.toFixed(2)
    document.getElementById("fundo").innerHTML = "<h2> O valor em reias é R$" + realConv + "</h2>";
} else {
    document.getElementById("fundo").innerHTML = "<h2> Opção inválida!</h2>";
} 

//Revisão
//variáveis var int - float - string
//alert - parseInt - parseFloat - prompt
//operações + somar * multiplicar
//comentário final


//parseFloat - converte para float ou ponto flutuante
//parseInt - converte para Inteiro
//toFixed(2) - para arredondamento de casa decimais (6) colocasse a quantid.
