if (localStorage.getItem("userLog") != undefined){
    document.getElementById("Usuario").innerHTML = localStorage.getItem("userLog");
} else (document.getElementById("logOut").innerHTML = "Iniciar sesión")

function cerrarSesion(){
    localStorage.removeItem("userLog");
    location.reload();
}

const INFO_URL = CART_INFO_URL + "25801" + EXT_TYPE;
let productos = {};
let precioUnitario = 0;
let subtotal = 1;

document.addEventListener("DOMContentLoaded", () => (
    fetch(INFO_URL)
        .then(respuesta => respuesta.json())
        .then(data => {
            productos = data.articles[0];
            cartProducts(productos)   
        })
))

function cartProducts(){
    listaDesplegable = `<td><img src="${productos.image}" style="max-height: 70px; max-width: 70px;" class="img-thumbnail"></td>
    <td>${productos.name}</td>
    <td>${productos.currency + " " + productos.unitCost}</td>
    <td><input type="number" class="form-control" style="max-width: 70px;" value=1 id="cantArticulo" onchange="subtotalCambiante()"></td>
    <td id="subtotalProd">${productos.unitCost}</td>`
    document.getElementById("carritoInfo").innerHTML = listaDesplegable
}

function subtotalCambiante(){
    document.getElementById("subtotalProd").innerHTML = productos.unitCost * document.getElementById("cantArticulo").value
}