if (localStorage.getItem("userLog") != undefined) {
    document.getElementById("Usuario").innerHTML = localStorage.getItem("userLog");
} else (document.getElementById("logOut").innerHTML = "Iniciar sesión")

function cerrarSesion() {
    localStorage.removeItem("userLog");
    location.reload();
}

const URL_INFO = PRODUCT_INFO_URL + localStorage.getItem("ProdID") + EXT_TYPE;
const URL_COMMENTS = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("ProdID") + EXT_TYPE;
let producto = {};
let producto_comentarios = {};

function setProduct(id){
    localStorage.setItem("ProdID", id);
    window.location.href = "product-info.html";
}

function showImages(product) {
    let imagen = " ";
    product.images.forEach(element => {
        imagen += `<div class="col">
    <img src="${element}" class="img-thumbnail">
    </div>`
    });
    document.getElementById("imgInfo").innerHTML = imagen;
}

document.addEventListener("DOMContentLoaded", () => (
    fetch(URL_INFO)
        .then(respuesta => respuesta.json())
        .then(data => {
            producto = data;

            document.getElementById("listado").innerHTML = "Volver a " + producto.category

            document.getElementById("listado").addEventListener("click", function () {
                localStorage.getItem("catID");
                window.location = "products.html"
            });

            document.getElementById("productoName").innerHTML = producto.name;

            document.getElementById("productoCostCurrency").innerHTML = producto.currency + " " + producto.cost;

            document.getElementById("productoDescription").innerHTML = producto.description;

            document.getElementById("productoCategory").innerHTML = producto.category;

            document.getElementById("productoSold").innerHTML = producto.soldCount;

            for (related of data.relatedProducts){
                document.getElementById("productRelated").innerHTML += `<div class="col" >
                <img onclick="setProduct(${related.id})"class="card-img-top" style="width: 19rem; cursor:pointer;" src="${related.image}" alt="Card image cap" onclick="setProdID()">
            <h5 class="ms-1">${related.name}</h5>
                </div>`
            }
            showImages(producto)
        })
))

fetch(URL_COMMENTS)
    .then(respuesta => respuesta.json())
    .then(data => {
        producto_comentarios = data
        document.getElementById("pruebaComentarios").innerHTML += `<h4>Comentarios</h4>`
        for (datos of data) {
            document.getElementById("pruebaComentarios").innerHTML += `<div class="list-group-item">
    <div class="row">
    <div class="col-12">
    <strong>${datos.user}</strong> ${datos.dateTime} 
    ${stars(datos.score)}
    <p>${datos.description}</p>
    </div>
    </div>
    </div>`
            console.log(datos.description)
        }
    })

function stars(numero) {
    let estrellas = " "
    for (i = 0; i < numero; i++) {
        estrellas += `<span class="fa fa-star checked"></span>`;
    }
    for (i = numero; i < 5; i++) {
        estrellas += `<span class="fa fa-star"></span>`;
    }
    return estrellas
}