import categories from '../categories.js';
import products from '../products.js';
import ordenador from './ordenador.js';
import printNestedList from './print-nested-list.js';
import printProduct from './print-product.js';
import disponible from './disponible.js';
import pricesMore from './filter-Price-More.js';
import pricesLess from './filter-price-Less.js';
import stockOrdenador from './stock-ordenador.js';

console.log('Hola mundo');
console.log(categories);
console.log(products);

const content = document.getElementById('content');
const categorias = document.getElementById('categorias');

function renderProducts (products){
  products.forEach((product)=>{
    printProduct(product);
  })
}
function order (){
  const orderedProducts = ordenador(products.products);
  content.innerHTML="";
  renderProducts(orderedProducts);
}
renderProducts(products.products);
const orderButton = document.getElementById('orderButton');
orderButton.addEventListener('click', order)

function stockOrder (){
  const filteredStock = stockOrdenador(products.products);
  content.innerHTML="";
  renderProducts(filteredStock); 
}
const filterStockQuantity = document.getElementById('filterStockQuantity');
filterStockQuantity.addEventListener('click', stockOrder)

function filterPriceMore (){
  const filteredPricesMore = pricesMore(products.products);
  content.innerHTML="";
  renderProducts(filteredPricesMore); 
}
const filterPriceMoreButton = document.getElementById('filterPriceMoreButton');
filterPriceMoreButton.addEventListener('click', filterPriceMore)

function filterPriceLess (){
  const filteredPricesLess = pricesLess(products.products);
  content.innerHTML="";
  renderProducts(filteredPricesLess); 
}
const filterPriceLessButton = document.getElementById('filterPriceLessButton');
filterPriceLessButton.addEventListener('click', filterPriceLess)

function disponibles (){
  const availableProducts = disponible(products.products);
  content.innerHTML="";
  renderProducts(availableProducts); 
}
const availableButton = document.getElementById('availableButton');
availableButton.addEventListener('click', disponibles)

categories.categories.forEach((categoria)=> {
  printNestedList(categoria, categorias);
})

const navigateLeft = document.getElementById('navigateLeft');
const footer = document.getElementById('footer');

function checkOffset() {
  function getRectTop(el){
    var rect = el.getBoundingClientRect();
    return rect.top;
  }

  if((getRectTop(navigateLeft) + document.body.scrollTop) + navigateLeft.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
    navigateLeft.style.position = 'absolute';
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
    navigateLeft.style.position = 'fixed';
}

document.addEventListener("scroll", function(){
  checkOffset();
});
