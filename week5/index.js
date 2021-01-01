const form = document.myForm


form.addEventListener("submit",(event) =>{
    event.preventDefault()
    alert(`${form.firstName.value}`)
})

form.addEventListener("submit",(event) =>{
    event.preventDefault()
    alert(`${form.lastName.value}`)
})

form.addEventListener("submit",(event) =>{
    event.preventDefault()
    alert(`${form.age.value}`)
})

form.addEventListener("submit",(event) =>{
    event.preventDefault()
    alert(`${form.gender.value}`)
})

form.addEventListener("submit",(event) =>{
    event.preventDefault()
    alert(`${form.lastName.value}`)
})