if (localStorage.getItem("userLog") != undefined){
    document.getElementById("Usuario").innerHTML = localStorage.getItem("userLog");
} else (document.getElementById("logOut").innerHTML = "Iniciar sesión")

function cerrarSesion(){
    localStorage.removeItem("userLog");
    location.reload();
}