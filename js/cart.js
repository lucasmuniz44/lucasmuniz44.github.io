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
let subtotal = 0;
let costoEnvio = 0;

document.addEventListener("DOMContentLoaded", () => (
    fetch(INFO_URL)
        .then(respuesta => respuesta.json())
        .then(data => {
            productos = data.articles[0];
            cartProducts(productos)
            subtotalCambiante(productos)
            calcEnvio(productos)
            calcTotal(productos)   

            document.getElementById("creditCardPaymentRadio").addEventListener("change", function(){
                document.getElementById("creditCardNumber").disabled = false;
                document.getElementById("creditCardSecurityCode").disabled = false;
                document.getElementById("dueDate").disabled = false;
                document.getElementById("bankAccountNumber").disabled = true;
                document.getElementById("paymentType").innerHTML = "Tarjeta de crédito"
            })
            
            
            document.getElementById("bankingRadio").addEventListener("change", function(){
                document.getElementById("creditCardNumber").disabled = true;
                document.getElementById("creditCardSecurityCode").disabled = true;
                document.getElementById("dueDate").disabled = true;
                document.getElementById("bankAccountNumber").disabled = false;
                document.getElementById("paymentType").innerHTML = "Transferencia bancaria"
            })
        })
))

function cartProducts(){
    listaDesplegable = `<td><img src="${productos.image}" style="max-height: 70px; max-width: 70px;" 
    class="img-thumbnail"></td>
    <td>${productos.name}</td>
    <td>${productos.currency + " " + productos.unitCost}</td>
    <td><input type="number" class="form-control" style="max-width: 70px;" min=1 value=1 
    id="cantArticulo" onchange="subtotalCambiante()"></td>
    <td id="subtotalProd">${productos.currency + " " + productos.unitCost}</td>`
    document.getElementById("carritoInfo").innerHTML = listaDesplegable
}

function subtotalCambiante(){
    subtotal = document.getElementById("subtotalProd").innerHTML = productos.unitCost * document.getElementById("cantArticulo").value
    document.getElementById("subtotalText").innerHTML = subtotal
    calcEnvio()
    calcTotal()
}

function calcEnvio(){
    if(document.getElementById("standard").checked){
        costoEnvio = subtotal * 0.05
        document.getElementById("shippingText").innerHTML = costoEnvio
    } else if (document.getElementById("express").checked){
        costoEnvio = subtotal * 0.07
        document.getElementById("shippingText").innerHTML = costoEnvio
    } else if (document.getElementById("premium").checked){
        costoEnvio = subtotal * 0.15
        document.getElementById("shippingText").innerHTML = costoEnvio
    }
    calcTotal()
}

function calcTotal(){
    document.getElementById("totalCostText").innerHTML = subtotal + costoEnvio
}

// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict'

    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')

    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()