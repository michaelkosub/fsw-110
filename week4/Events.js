var H3 = document.createElement("h3");
H3.innerHTML = ("DJ/JS");
document.body.append(H3);
H3.style.border = "2px solid black";
H3.style.height = "40px";
H3.style.textAlign = "center";


H3.addEventListener("mousedown", () =>{
    H3.style.backgroundColor = "red"
})

H3.addEventListener("mouseover", () => {
    H3.style.backgroundColor = "blue"
})

H3.addEventListener("mouseup", () =>{
    H3.style.backgroundColor = "yellow"
})

H3.addEventListener("dblclick", () =>{
    H3.style.backgroundColor = "green"
})

H3.addEventListener("mouseout", ()=>{
    H3.style.backgroundColor = "orange";
})



