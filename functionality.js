 function getProducts(done){

    const results = fetch("https://gradistore-spi.herokuapp.com/orders");
    results
        .then(response => response.json())
        .then(data => {done(data)
        });
}
getProducts((data) => {
    console.log(data.orders.nodes[0].lineItems.nodes[0]);
});


getProducts(data => { 
    
    data.results.forEach((orders) => {   
        const article = document.createRange().createContextualFragment(`
            <div class="carousel-item-contenido">
                <div class="carousel-item-contenido-imagen">
                    <img class="nmi1" src="${orders.nodes[0].lineItems.nodes[0].image.url}" alt="img1">
                </div>
                <div class="carousel-item-contenido-titulo">
                    <h2>${title}</h2>
                </div>
                <div class="startsdinamic"></div>
                <div class="carousel-item-contenido-discount">
                    <p>${total}</p>
                </div>
                <div class="carousel-item-contenido-precio">
                    <p>$$$$$</p>    
                </div>
                <div class="addcart"> 
                    <p class="textnex"></p>
                </div>
            </div>      
        `)
        const carousel = document.querySelector(".carousel-item");
        carousel.appendChild(article);
    })
})
 

/* async function getOrders() {
    const response = await fetch('https://gradistore-spi.herokuapp.com/orders');
    const data = await response.json();
    return data;
}

async function main() {
    const orders = await getOrders();
    console.log(orders);
  }
  
  main(); 

//! Codigo para realizar slice del carousel  *//

const buttonizq = document.querySelector("btnset");
const buttonright = document.querySelector("btnsett");
const carousel = document.querySelector(".carousel-item");

buttonizq.addEventListener("click", () => {
    carousel.scrollLeft -= carousel.offsetWidth;
});

buttonright.addEventListener("click", () => {
    carousel.scrollRight += carousel.offsetWidth;
});

//? Codigo para traer informacion de la API  *//


  (async function() {
    async function getOrders() {
      const response = await fetch('https://gradistore-spi.herokuapp.com/orders');
      const data = await response.json();
      return data;
    }
  
    async function main() {
      const orders = await getOrders();
      console.log(orders);
    }
  
    await main();
  })();

  getOrders(data => {
    console.log(data.orders.nodes[0].lineItems.nodes[0]);
  })

  getOrders(data => {
    data.response.forEach((orders) => {
        const article = document.createRange().createContextualFragment(`
        <div class="carousel-item-contenido">
            <div class="carousel-item-contenido-imagen">
                <img class="nmi1" src="${orders.nodes[0].lineItems.nodes[0].image.url}" alt="img1">
            </div>
            <div class="carousel-item-contenido-titulo">
                <h2>${data.nodes[0].lineItems.nodes[0].title}</h2>
            </div>
            <div class="startsdinamic"></div>
            <div class="carousel-item-contenido-discount">
                <p>${data.nodes[0].lineItems.nodes[0].total.shopMoney.amount}</p>
            </div>
            <div class="carousel-item-contenido-precio">
                <p>${data.nodes[0].lineItems.nodes[0].total.shopMoney.amount}</p>    
            </div>
            <div class="addcart"> 
                <p class="textnex"></p>
            </div>
        </div>
        `)
        const carousel = document.querySelector(".carousel-item");
        carousel.appendChild(article);
    })
  })