const products = document.getElementById("products");
const linkAutos = "https://japceibal.github.io/emercado-api/cats_products/101.json";

document.addEventListener("DOMContentLoaded",()=>{

listadoProductos();
})

function listadoProductos(){
    fetch(linkAutos)
    .then(response => response.json())
    .then(data => {
        data.products.forEach(element => {
            console.log(element)
            let h3 = document.createElement("h3");
            h3.innerHTML+= element.name + " - " + element.currency + " " + element.cost;
            let p1 = document.createElement("p");
            p1.innerHTML+=element.description;
            let p2 = document.createElement("p");
            p2.innerHTML+=element.soldCount+ " vendidos";
            let nDiv = document.createElement("div");
            let image = document.createElement("img");
            image.setAttribute("src",element.image);
            nDiv.appendChild(image);
            nDiv.appendChild(h3);
            nDiv.appendChild(p1);
            nDiv.appendChild(p2);
            products.appendChild(nDiv);
        });

    })

}