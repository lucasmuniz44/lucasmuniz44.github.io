document.getElementById("confirmado").addEventListener("click", function(){

    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value

    if (email && pass) {

        window.location.href = "index.html"

    }else{
        window.locationn.href = "login.html"
    }
    
});