function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!<b>";
}

function redirecionar(){
    //window.open abre numa outra janela
    window.open("http://google.com");

    //location.href abre na mesma janela
    //window.location.href = "http://amazon.com.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    elemento.innerHTML = "obrigado por passar o mouse"
}

function voltar(elemento){
   //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
   elemento.innerHTML = "passe o mouse aqui"
}

function load(){
    alert("pagina carregada")
}



/*
function soma(n1, n2){
    return n1 + n2
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual a sua idade?");
console.log(validaIdade(idade));
*/

/* CODIGOS AULA 1
var nome = "ricardo domingos"
var idade = 38
var idade2 = 10
var n1 = 12
var n2 = 20
var frase = "Japao é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos ")
console.log(nome)
console.log(idade)
console.log(frase)
//console.log(frase.replace("Japao", "Brasil"))
//alert(frase.replace("Japao", "Brasil"))
//console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
//console.log(idade + idade2)
console.log(n1 + n2) */

//CODIGOS AULA 2 JS
//Array

//var lista = ["maca", "pera", "laranja"]
//push para adicionar elementos a lista
//lista.push("uva")
//pop para remover elementos da lista
//lista.pop("maca")
//console.log(lista)
//console.log(lista[1])
//console.log(lista.reverse())
//console.log(lista.length)
//console.log(lista.toString())

//console.log(lista[0])
//console.log(lista.toString()[0])
//Join para inserir elementos graficos na lista
//console.log(lista.join(" | "))

//DICIONARIOS

/*
var fruta = {nome: "maca", cor: "vermelha"}
 console.log(fruta.nome)
 console.log(fruta.cor)
 */

/*
DICIONARIO DE LISTAS:

var frutas = [{nome: "maca", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas)
console.log(frutas[1].cor) */


//CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE

/*LACO DE REPETIÇÃO
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1
    //count++
} */

/*CONDICIONAIS
var idade = prompt("qual a sua idade? ")
if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade");
} */
 
/*Laco de repetição com incremento de 1
var count
for(count = 0; count <= 5; count++){
    alert(count);
}*/

//var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getMinutes())
//alert(d.getHours())