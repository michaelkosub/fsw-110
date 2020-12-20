const form = document.myForm

form.addEventListner("submit", (event) => {
    event.preventDefault()

    console.log(form.gender.value)

})

function getdetails(){
    var a = document.form["details"]["Fistname"]["Lastname"].value;
    var b = document.form["details"]["Age"].value;
    var c = document.form["details"]["Gender"].value;
    var d = document.form["details"]["Location"].value;
    var e = document.form["details"]["Allergies"].value;
    
alert(" Name:"+a+"Age:"+b+ "Gender:"+c+ "Location" +d+ "Aallergies"+e);
}