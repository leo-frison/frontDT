const renderCards = (list) => {
    let render = list.map(el => 
        `<div class="card border-0" style="width: 18rem;">
            <div class="cont-img-comprar d-flex justify-content-center">
                <button onclick ="detail(${el.id})" class="boton-compra-rapida border-0 rounded-pill w-50 align-self-center py-2">Compra Rápida</button>
                <img src="${el.imgURL}" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title">${el.title}</h5>
                <p class="card-text">$${el.price}</p>
            </div>
        </div>`
    )
    return render
} 