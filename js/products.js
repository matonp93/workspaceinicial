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
            p1.classList.add('descripcion')
            p1.innerHTML+=element.description;
            let p2 = document.createElement("p");
            p2.classList.add('vendidos')
            p2.innerHTML+=element.soldCount+ " vendidos";
            
            /* Contenedores y clase de divs*/
            let containerDiv = document.createElement("div")
            containerDiv.classList.add('productcard')
            let imgDiv = document.createElement("div");
            imgDiv.classList.add('imgdiv')
            let h3Div = document.createElement("div");
            h3Div.classList.add('h3div')
            let pDiv = document.createElement("div");
            pDiv.classList.add('pdiv')
            let p2Div = document.createElement("div")
            p2Div.classList.add('p2div')
            let image = document.createElement("img");
            image.setAttribute("src",element.image);
            imgDiv.appendChild(image);
            h3Div.appendChild(h3);
            h3Div.appendChild(p1);
            p2Div.appendChild(p2);
            containerDiv.appendChild(imgDiv)
            containerDiv.appendChild(h3Div)
            containerDiv.appendChild(p2Div)
            products.appendChild(containerDiv);
        });

    })

}