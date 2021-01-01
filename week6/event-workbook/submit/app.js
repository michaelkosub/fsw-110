// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

var a = document.getElementById("submit-me")
a.name.id="FirstName"
a.FirstName.name = "UserName"
a.age.id = "Date"
a.Date.age = "Number"
a.addEventListener("submit", function(e){
    e.preventDefault()
    alert(a.FirstName.value)
    alert(a.Date.value)
})
