let remerasContainer = document.getElementById('remerasContainer')

let listaRemeras =[
    {   
        id: 1,
        description:"Remera Alfa",
        price:1000,
        imgURL:"../assets/images/remeraEjemplo.jpg",
        quantity:0
    },
    {
        id: 2,
        description:"Remera Beta",
        price:2000,
        imgURL:"../assets/images/remeraEjemplo.jpg",
        quantity:0
    },
    {
        id: 3,
        description:"Remera Gamma",
        price:3000,
        imgURL:"../assets/images/remeraEjemplo.jpg",
        quantity:0
    }
]

remerasContainer.innerHTML = renderCards(listaRemeras)

