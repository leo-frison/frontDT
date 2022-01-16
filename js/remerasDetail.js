let remerasDetail = document.getElementById('remerasDetail');
let catalogoContainer = document.getElementById('catalogoContainer');
let detailContainer = document.getElementById('detailContainer');
let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let counter = document.getElementById('counter')

detailContainer.style = "display:none"
let product = {}
const detail = (itemId) =>{
    let item = listaRemeras.find(el => el.id === itemId)
    product = item
    let render = `
        <div class="container d-flex my-5">
            <div class="w-100">
                <img src="${product.imgURL}" class="img-fluid">
            </div>
            <div class="container px-5">
                <h3 class="detail-title">${product.description}</h3>
                <p class="detail-price">$${product.price}</p>
                <p></p>
                <form class="detail-form" action="https://api-server-node.cf/checkout" method="POST" class="as-producttile-info" style="float:left;min-height: 168px;">
                    <br>
                   
                    <div class="mt-3">
                       <h4><b>Cantidad</b></h4>
                        <div class="contador d-flex">
                        <input id="description" type="hidden" name="description" value="${product.description}">
                        <input id="price" type="hidden" name="price" value="${product.price}">
                        <input id="quantity" type="number" name="quantity" value="${product.quantity}">
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-center">
                        <input type="hidden" name="title" value="${product.title}">
                        <input id="price" type="hidden" name="price" value="${product.price}">
                        <button class="boton-aniadir btn me-5 p-3 w-100">Añadir al carrito</button>
                        <button type="submit" class="boton-comprar btn p-3 w-100" onclick="pay()">Comprar ahora</button>
                    </div>
                </form>
            </div>
        </div>
    `
    catalogoContainer.style = "display:none"
    detailContainer.style = "display:block"
    remerasDetail.innerHTML = render
}
