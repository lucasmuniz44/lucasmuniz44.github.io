    if  (localStorage.getItem("userLog") != undefined){
    document.getElementById("Usuario").innerHTML = localStorage.getItem("userLog");
}

document.getElementById("confirmado").addEventListener("click", function () {

    inputEmail = document.getElementById("inputEmail").value
    inputPass = document.getElementById("inputPass").value

    if (inputEmail == null || inputEmail == "") {
        window.location.href = "login.html";

    } else if(inputPass == null || inputPass == ""){
        window.location.href = "login.html";

    } else if (inputEmail != "" && inputPass != ""){
        localStorage.setItem("userLog", inputEmail)
        window.location.href = "index.html";
    }

});