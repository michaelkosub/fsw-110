var text2 = document.getElementById("text2")
var text1 = document.getElementById("text1")
var one = document.getElementById("one")
function add(){
    console.log (text1.value)
    first = parseInt(text1.value);
    second = parseInt(text2.value);
    result = first + second;
    console.log(result)
    var H1= document.createElement("h1")
    H1.textContent = result
    one.append(H1)
    H1.style.border= "2px solid black"
}

var text3 = document.getElementById("text3")
var text4 = document.getElementById("text4")
var two = document.getElementById("two")

function subtract(){
    console.log (text3.value)
    a = parseInt(text3.value);
    b = parseInt(text4.value);
    result = a - b;
    console.log(result)
    var H1= document.createElement("h1")
    H1.textContent = result
    one.append(H1)
    H1.style.border= "2px solid black"
}

var text5 = document.getElementById("text5")
var text6 = document.getElementById("text6")
var three = document.getElementById("three")

function subtract(){
    console.log (text5.value)
    c = parseInt(text5.value);
    d = parseInt(text6.value);
    result = c * d;
    console.log(result)
    var H1= document.createElement("h1")
    H1.textContent = result
    one.append(H1)
    H1.style.border= "2px solid black"
}



var text7 = document.getElementById("text7")
var text8 = document.getElementById("text8")
var four = document.getElementById("four")

function divide(){
    console.log (text7.value)
    e = parseInt(text7.value);
    f = parseInt(text8.value);
    result = e / f;
    console.log(result)
    var H1= document.createElement("h1")
    H1.textContent = result
    one.append(H1)
    H1.style.border= "2px solid black"
}



  

