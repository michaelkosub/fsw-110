var form = document.myform
console.log(form)

function cap(first){
    console.log(first)
    return first[0].toUpperCase()+ first.slice(1)
    
}

var button = document.getElementById("submit")
console.log(button)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(form.First.value, form.Second.value)
    var list = document.getElementById("list")
    console.log(list)
    var Li = document.createElement("li")
    list.append(Li)
    Li.textContent =cap (form.First.value )+ " " +cap(form.Second.value)

    var del = document.createElement("button")
    Li.append(del)
    del.textContent = "Delete"
   

    del.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(form.First, form.Second)
        list.removeChild(list.childNodes[0]);
        
        
    
})

})