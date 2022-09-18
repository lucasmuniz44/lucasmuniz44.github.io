if (localStorage.getItem("userLog") != undefined){
    document.getElementById("Usuario").innerHTML = localStorage.getItem("userLog");
}

document.getElementById("confirmado").addEventListener("click", function () {

    inputEmail = document.getElementById("inputEmail").value
    inputPass = document.getElementById("inputPass").value

    if (inputEmail == null || inputEmail == "") {
        document.getElementById("inputEmail").value = "Ingrese un Email"
        window.location.href = "login.html";

    } else if(inputPass == null || inputPass == ""){
        document.getElementById("inputPass").value = "Ingrese una contraseña"
        window.location.href = "login.html";

    } else if (inputEmail != "" && inputPass != ""){
        localStorage.setItem("userLog", inputEmail)
        window.location.href = "index.html";
    }

});

//document.getElementById("confirmado").addEventListener("click", function () {

//    inputEmail = document.getElementById("inputEmail").value
//    inputPass = document.getElementById("inputPass").value

//    if (inputEmail && inputPass) {
//        localStorage.setItem("userLog", inputEmail)
//        window.location.href = "index.html";

//    } else {
//        error.textContent = "Please enter a valid number"
//        window.location.href = "login.html";
//    }

//});