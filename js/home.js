import categories from '../categories.js';
import products from '../products.js';

console.log('Hola mundo');
console.log(categories);
console.log(products);

const content = document.getElementById('content');
const categorias = document.getElementById('categorias');

function imprimir (product){
  const productsPrint = `
    <div class="content-item">
      <h3>${product.name}</h3>
      <p class="precio"> ${product.price}</p>
      <p> Cantidad: ${product.quantity}<br>
          Disponibilidad: ${product.available}<br>
          SN: ${product.sublevel_id}</p>
      <button>Comprar</button>
    </div>
  `;
  content.insertAdjacentHTML('beforeEnd', productsPrint);
}

products.products.forEach((product)=> {
  imprimir(product);
})

// function searchProduct (producto){
//   return producto
// }
// var filtrados = products.products.filter(searchProduct);

function imprimircat (categoria){
  const categoriesPrint = `
    <ol>
      <ul>
        <li>
        <input type="checkbox">${categoria.name}
        </li>
      </ul>
    </ol>
  `;
  categorias.insertAdjacentHTML('beforeEnd', categoriesPrint);
}


function run(categoria) {
    console.log(categoria.name);
    imprimircat(categoria)
    if (categoria.sublevels) {
        categoria.sublevels.forEach((sublevel)=>{ run(sublevel) })
    }
}

categories.categories.forEach((categoria)=> {
  run(categoria);
})

var navigateLeft = document.getElementById('navigateLeft');
var footer = document.getElementById('footer');

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
