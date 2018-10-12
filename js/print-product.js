function printProduct (product){
  const toString = product.available;
  const x = toString.toString();
  const booleantoString= x.replace('true', 'Si').replace('false', 'No')
  const productsPrint = `
    <div class="content-item" id="available">
      <h3>${product.name}</h3>
      <p class="precio"> ${product.price}</p>
      <p> Cantidad: ${product.quantity}<br>
          Disponible: ${booleantoString}<br>
          SN: ${product.sublevel_id}</p>
      <button>Comprar</button>
    </div>
  `;
  content.insertAdjacentHTML('beforeEnd', productsPrint);
}
export default printProduct;
