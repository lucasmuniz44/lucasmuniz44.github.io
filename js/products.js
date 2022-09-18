if (localStorage.getItem("userLog") != undefined){
    document.getElementById("Usuario").innerHTML = localStorage.getItem("userLog");
}

const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DES_BY_NAME = "ZA";
const ORDER_ASC_BY_PRICE = "$";
const ORDER_DES_BY_PRICE = "$$";
const ORDER_DES_BY_SOLD = "REL";
let FiltroArray = [];
let min = 0;
let max = 0;

function comparacion(a, b) {
    return a.name.localeCompare(b.name)
}


function sortAndShowCategories(criterio, array) {
    if (criterio === ORDER_ASC_BY_NAME) {
        FiltroArray = array.sort(comparacion)
    }
    else if (criterio === ORDER_DES_BY_NAME) {
        FiltroArray = array.reverse(comparacion)
    }
    else if (criterio === ORDER_ASC_BY_PRICE) {
        FiltroArray = array.sort((a, b) => { return a.cost - b.cost })
    }
    else if (criterio === ORDER_DES_BY_PRICE) {
        FiltroArray = array.sort((a, b) => { return b.cost - a.cost })
    }
    else if (criterio === ORDER_DES_BY_SOLD) {
        FiltroArray = array.sort((a, b) => { return b.soldCount - a.soldCount })
    }

    document.getElementById("info").innerHTML = " ";
    showList(FiltroArray);
}

document.addEventListener("DOMContentLoaded", function (a) {
    fetch(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE)
        .then(respuesta => respuesta.json())
        .then(data => {
            FiltroArray = data.products;
            showList(FiltroArray);
        })



    document.getElementById("sortByNameAsc").addEventListener("click", function () {
        sortAndShowCategories(ORDER_ASC_BY_NAME, FiltroArray);
    });

    document.getElementById("sortByNameDesc").addEventListener("click", function () {
        sortAndShowCategories(ORDER_DES_BY_NAME, FiltroArray);
    });

    document.getElementById("sortByPriceAsc").addEventListener("click", function () {
        sortAndShowCategories(ORDER_ASC_BY_PRICE, FiltroArray);
    });

    document.getElementById("sortByPriceDesc").addEventListener("click", function () {
        sortAndShowCategories(ORDER_DES_BY_PRICE, FiltroArray);
    });

    document.getElementById("sortByRelevance").addEventListener("click", function () {
        sortAndShowCategories(ORDER_DES_BY_SOLD, FiltroArray);
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function () {
        min = document.getElementById("rangeFilterCountMin").value;
        max = document.getElementById("rangeFilterCountMax").value;
        document.getElementById("info").innerHTML = ""
        showList(FiltroArray)
    });

    document.getElementById("clearRangeFromFilter").addEventListener("click", function () {
        min = document.getElementById("rangeFilterCountMin").value = "";
        max = document.getElementById("rangeFilterCountMax").value = "";
        document.getElementById("info").innerHTML = ""
        showList(FiltroArray)
    });

})


function showList(array) {
    array.forEach(element => {
        if (((min == 0) || (parseInt(element.cost) >= min)) &&
            ((max == 0) || (parseInt(element.cost) <= max))) {

        var elementHTML =
        `<div class="list-group-item list-group-item-action">
        <div class="row">
        <div class="col-3">
        <img src="${element.image}" alt="imagen producto" class="img-thumbnail">
        </div>
        <div class="col">
        <div class="d-flex justify-content-between"
        <div class="mb-1">
        <h4>${element.name + " - " + element.currency + " " + element.cost} </h4>
        <small class="text-muted">${element.soldCount + " vendidos"} </small>
        </div>
        <p>${element.description}</p>

         </div>
      </div>
    </div>
 </div>`
            document.getElementById("info").innerHTML += elementHTML;
        }
    });
}
