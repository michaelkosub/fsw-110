var H1 = document.createElement("h1");
H1.innerHTML = "Hello World";
document.body.append(H1);
H1.style.fontSize = "30px"
H1.style.color = "red"
H1.style.textAlign = "center";

for(var i = 0; i < 9; i++){
    var H1 = document.createElement("hi");
    H1.innerHTML = "Hello World";
    document.body.append(H1);
    H1.style.textAlign = "center";
    H1.style.color = "blue";
    H1.style.fontSize = "50px";
}

var names = ["steve","larry","joe","shirley","steph","nate","rick","emily"]

for(var i = 0; i < names.length; i++){
    var li = document.createElement("li")
    li.innerHTML = names[i]
    document.body.append(li)
    li.style.color = "green"
    li.style.fontSize = "20px"
}