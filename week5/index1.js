function getdetails(){
    var a = document.forms["details"]["firstname"].value
    var b = document.forms["details"]["lastname"].value
    var c = document.forms["details"]["e-mail"].value
    alert("Your name is: "+a+" "+b+"\nYour e-mail is:"+c);
}