const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

fetch(URL)
    .then( respuesta => respuesta.json() )
    .then( data => {
        const ArrayDatos = data.products;
        showList(ArrayDatos);
    } )

function showList(array){
    array.forEach(element => {
        var elementHTML = ` <div class="list-group-item">
        <div class="row">
        <div class="col-3">
        <img src="${element.image}" alt="producto" class="img-thumbnail">
        </div>
        <div class="col">
        <h4>${element.name + " - USD " + element.cost} </h4>
        <p>${element.description}</p>
        <small class="text-muted">${element.soldCount + " vendidos"} </small>

         </div>
      </div>
  </div> `
        document.getElementById("info").innerHTML += elementHTML;
    });
}