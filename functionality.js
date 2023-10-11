//! Codigo para realizar slice del carousel  */
/* 
const { Carousel } = require("bootstrap");
const buttonizq = document.querySelector("btnset");
const buttonright = document.querySelector("btnsett");
const carousel = document.querySelector(".carousel-item");

buttonizq.addEventListener("click", () => {
    carousel.scrollLeft -= carousel.offsetWidth;
});

buttonright.addEventListener("click", () => {
    carousel.scrollRight += carousel.offsetWidth;
});
 */
//? Codigo para traer informacion de la API  *//

/*   (async function() {
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

  main((data) => {
    console.log(data.orders.orders.nodes[0].lineItems.nodes[0].image.url);
  })

  main(data => {
    data.forEach((data) => {
        const article = document.createRange().createContextualFragment(`
        <div class="carousel-item-contenido">
            <div class="carousel-item-contenido-imagen">
                <img class="nmi1" src="${data.orders.nodes[0].lineItems.nodes[0].image.url}" alt="img1">
            </div>
            <div class="carousel-item-contenido-titulo">
                <h2>${data.orders.nodes[0].lineItems.nodes[0].title}</h2>
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
 
 */

//! How to make a call of the API from shopfy acording to chatgpt-4 //

/* // Set up API endpoint and access token
const apiEndpoint = 'https://081815-3.myshopify.com/admin/api/2021-07';
const accessToken = 'ebc4603e86a1433e8af284c407cce495';

// Set up product ID and retrieve product data
const productId = '123456789';
const productEndpoint = `${apiEndpoint}/products/${productId}.json`;
const productData = await fetch(productEndpoint, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': accessToken
  }
})
.then(response => response.json())
.catch(error => console.error(error));

// Retrieve image URLs for product
const imageUrls = productData.product.images.map(image => image.src);

// Create carousel and display images
const carousel = document.getElementById('carousel');
imageUrls.forEach(url => {
  const img = document.createElement('img');
  img.src = url;
  carousel.appendChild(img);
});

 */

//? another athempt to achieve the tarjet of make the carousel call  //  
/* 
// Set up API endpoint
const apiEndpoint = 'https://gradistore-spi.herokuapp.com/products/all';

// Make API request to retrieve data
fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    // Retrieve image URL from API response
    const imageUrl = data[0].image_url;

    // Create img element and set src attribute to image URL
    const carouserl = document.querySelector(".carousel-item");
    Carousel = document.createElement('img');
    /* const img = document.createElement('img'); */
/*      img.src = imageUrl;*/
/*  
    // Append img element to DOM
    document.body.appendChild(img);
  })
  .catch(error => console.error(error));

*/
//? another option //

array = {"products":{"nodes":[  {"id":"gid://shopify/Product/8141368164662","title":"The Complete Snowboard","tags":["32","Premium","Snow","Snowboard","Sport","Winter"],"totalInventory":35,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image22.png?v=1676927632"},"prices":{"max":{"amount":"699.95","currencyCode":"EUR"},"min":{"amount":"699.95","currencyCode":"EUR"}}},
                                {"id":"gid://shopify/Product/8141368361270","title":"The Minimal Snowboard","tags":["80"],"totalInventory":49,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image22_4ad46bdf-b6cd-45f8-a3ac-ff126e0b53b2.png?v=1676927735"},"prices":{"max":{"amount":"885.95","currencyCode":"EUR"},"min":{"amount":"885.95","currencyCode":"EUR"}}},
                                {"id":"gid://shopify/Product/8141368295734","title":"The 3p Fulfilled Snowboard","tags":["120","Accessory","Sport","Winter"],"totalInventory":19,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image22_1.png?v=1676927534"},"prices":{"max":{"amount":"2629.95","currencyCode":"EUR"},"min":{"amount":"2629.95","currencyCode":"EUR"}}},
                                {"id":"gid://shopify/Product/8141368262966","title":"The Multi-location Snowboard","tags":["70","Premium","Snow","Snowboard","Sport","Winter"],"totalInventory":99,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image22_1_530ba195-743f-4857-a7dd-c99c107052eb.png?v=1676927748"},"prices":{"max":{"amount":"729.95","currencyCode":"EUR"},"min":{"amount":"729.95","currencyCode":"EUR"}}},
                                {"id":"gid://shopify/Product/8141368492342","title":"The Hidden Snowboard","tags":["460","Premium","Snow","Snowboard","Sport","Winter"],"totalInventory":50,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image22_1_7619433d-c328-4d03-a4f6-aa12a46368a7.png?v=1676927723"},"prices":{"max":{"amount":"749.95","currencyCode":"EUR"},"min":{"amount":"749.95","currencyCode":"EUR"}}},
                                {"id":"gid://shopify/Product/8141368426806","title":"The Draft Snowboard","tags":["55"],"totalInventory":20,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image25.png?v=1676927706"},"prices":{"max":{"amount":"2629.95","currencyCode":"EUR"},"min":{"amount":"2629.95","currencyCode":"EUR"}}},
                                {"id":"gid://shopify/Product/8141368394038","title":"The Archived Snowboard","tags":["320","Archived","Premium","Snow","Snowboard","Sport","Winter"],"totalInventory":50,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image22_2_b46d7c2d-b2fa-439a-b1ce-36ab050cd1b2.png?v=1676927647"},"prices":{"max":{"amount":"629.95","currencyCode":"EUR"},"min":{"amount":"629.95","currencyCode":"EUR"}}},
                                {"id":"gid://shopify/Product/8141368230198","title":"The Multi-managed Snowboard","tags":["210","Premium","Snow","Snowboard","Sport","Winter"],"totalInventory":100,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image25_1_c58dfa13-fd24-43e3-8108-aea4e43864e0.png?v=1676927763"},"prices":{"max":{"amount":"629.95","currencyCode":"EUR"},"min":{"amount":"629.95","currencyCode":"EUR"}}},
                                {"id":"gid://shopify/Product/8141368197430","title":"The Collection Snowboard: Hydrogen","tags":["180","190","Accessory","Sport","Winter"],"totalInventory":50,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image22_83943c83-edb0-4b44-bd38-98495eff167c.png?v=1676927659"},"prices":{"max":{"amount":"600.0","currencyCode":"EUR"},"min":{"amount":"600.0","currencyCode":"EUR"}}},
                                {"id":"gid://shopify/Product/8141368131894","title":"The Collection Snowboard: Oxygen","tags":["350","Accessory","Sport","Winter"],"totalInventory":50,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image22_2_d537f9ae-50f5-4ee2-bc69-e2639599de21.png?v=1676927613"},"prices":{"max":{"amount":"1025.0","currencyCode":"EUR"},"min":{"amount":"1025.0","currencyCode":"EUR"}}},
                                {"id":"gid://shopify/Product/8141368099126","title":"The Collection Snowboard: Liquid","tags":["320","Accessory","Sport","Winter"],"totalInventory":50,"tracksInventory":true,"featuredImage":{"url":"https://cdn.shopify.com/s/files/1/0730/1113/4774/products/image25_1.png?v=1676927676"},"prices":{"max":{"amount":"749.95","currencyCode":"EUR"},"min":{"amount":"749.95","currencyCode":"EUR"}}}
                            ]
                    }
        }

// Obtener el array de productos
let products = array["products"]["nodes"];

// Crear una cadena HTML para las imágenes
let images_html = "";

// Iterar sobre los productos y agregar sus imágenes a la cadena HTML
for (let i = 0; i < products.length; i++) {
  // Obtener la imagen destacada del producto actual
  let product_image_url = products[i]["featuredImage"]["url"];
  
  // Agregar la imagen a la cadena HTML
  images_html += `
  <h2 class="carousel-item-contenido-titulo">Add </h2>
  <img src="${product_image_url}" alt="Product image ${i+1}" />
  <p class="carousel-item-contenido-precio">${products[i]["prices"]["min"]["amount"]}</p>
    `;
}

// Obtener el elemento HTML donde se mostrarán las imágenes
let image_container = document.querySelector(".carousel-itemn");

// Establecer la cadena HTML de las imágenes como el contenido del elemento HTML
image_container.innerHTML = images_html;

//? Another way to do this part of code //
/* const first_product_image_url = array ["products"]["nodes"][0]["featuredImage"]["url"]
console.log(first_product_image_url)



const carousel = document.querySelectorAll(".carousel-itemn");
carousel.forEach((carousel) => {
    carousel.innerHTML += `
    <div class="carousel-item1">
        <img src="${first_product_image_url}" class="d-block w-100" alt="...">
    </div>
    `
});

carousel(); 
*/

//! this section we are gonna do the carousel moving action funconality //

const carrusel = document.querySelector(".carousel-itemn");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();

//* This section we are gonna do the buttons transition to the left and right functionality *//
/* 
const carousel = document.querySelector(".carousel-itemn");
const btnLeft = document.querySelector(".btnsetleft");
const btnRight = document.querySelector(".btnsettright");
const scrollPosition = 0;
const scrollAmount = 200; // Cantidad de desplazamiento en píxeles

function leftview (){
btnLeft.addEventListener("click", scrollCarouselLeft);
function scrollCarouselLeft() {
  scrollPosition -= scrollAmount;
  carousel.scrollTo({
    top: 0,
    left: scrollPosition,
    behavior: "smooth"
  });
}}
leftview();

function rightview (){
btnRight.addEventListener("click", scrollCarouselRight);
function scrollCarouselRight() {
  scrollPosition += scrollAmount;
  carousel.scrollTo({
    top: 0,
    left: scrollPosition,
    behavior: "smooth"
  });
}}

rightview(); */
 

const carousel = document.querySelector('.carousel-itemn');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const carouselWidth = carousel.offsetWidth;

btnLeft.addEventListener('click', scrollLeft);
btnRight.addEventListener('click', scrollRight);

function scrollLeft() {
  carousel.scrollLeft -= carouselWidth;
}

function scrollRight() {
  carousel.scrollLeft += carouselWidth;
}
