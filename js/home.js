import categories from '../categories.js';
import products from '../products.js';
import ordenador from './ordenador.js';
import printNestedList from './print-nested-list.js';
import printProduct from './print-product.js';
import disponible from './disponible.js';
import pricesMore from './filter-Price-More.js';
import pricesLess from './filter-price-Less.js';
import stockOrdenador from './stock-ordenador.js';
import printModal from './print-modal.js';
import scrollNestedList from './scroll-nested-list.js';

console.log('Hola mundo');
console.log(categories);
console.log(products);

const content = document.getElementById('content');
const cartFixed = document.getElementById('cart-fixed');
const categorias = document.getElementById('categorias');

document.addEventListener("scroll", function(){
  scrollNestedList();
});

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

renderProducts(products.products);

categories.categories.map((categoria)=> {
  printNestedList(categoria, categorias);
  console.log(categoria)
})

const buttonBuy = document.querySelectorAll('#buttonBuy');
const buy = document.getElementById('buy-open-modal');

buttonBuy.forEach((clicked)=>{
  clicked.addEventListener('click',addToCart )
})
  buy.addEventListener('click', mostrarModal)

function mostrarModal (){
  printModal(cart, cartFixed);
}
function addToCart(){
  const id = this.dataset.id;
  const productBought  = addProduct(id, products.products);
  buy.setAttribute('data-count', productBought.length);
  buy.classList.add('show-count');
  buy.classList.add('buy-notify');
}
const cart = [];
function addProduct(id, products ){
  const product = products.find(product => product.id === id);
  cart.push(product);
  console.log(cart);
  return cart;
  }

