var categoriesArray = [];


function showCategoriesList(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let category = array[i];

        if (i == 0) {
            htmlContentToAppend += `
        <div class="list-group-item list-group-item-action ">
            <div class="row " id="` + category.name + `"onclick="location.href='listado2.html'">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` + category.name + `</h4>
                        <small class="text-muted">` + category.productCount + ` artículos</small>
                    </div>
                    <div> ` + category.description + `</div>
                </div>
            </div>
        </div>
        `
        } else {
            htmlContentToAppend += `
        <div class="list-group-item list-group-item-action ">
            <div class="row " id="` + category.name + `">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` + category.name + `</h4>
                        <small class="text-muted">` + category.productCount + ` artículos</small>
                    </div>
                    <div> ` + category.description + `</div>
                </div>
            </div>
        </div>
        `
        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}


  //que el documento se encuentra cargado, es decir, se encuentran todos los
  //elementos HTML presentes.
  document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        }
    });
});
