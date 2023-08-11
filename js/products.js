const products = document.getElementById("products");
const linkAutos = "https://japceibal.github.io/emercado-api/cats_products/101.json";

document.addEventListener("DOMContentLoaded",()=>{

listadoProductos();
})

function listadoProductos(){
    fetch(linkAutos)
    .then(response => response.json())
    .then(data => {
        console.log(data.products)
        let table = document.createElement("table");
        table.setAttribute("id","products-table");
        data.products.forEach(element => {
            console.log(element)
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");  
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let image = document.createElement("img");
            let h3 = document.createElement("h3");
            image.setAttribute("src",element.image);
            td1.appendChild(image);
            h3.innerHTML+=element.name;  // <h3>(Nombre elemento)</h3>
            td2.innerHTML+=h3.textContent + "<br>" + element.description;
            td3.innerHTML+=element.soldCount + " vendidos";
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr); 
        });
        products.appendChild(table);
    })

}