function stringToNumber(string){
  var a = string.replace('$', '').replace(',','.');
	var a_int = parseFloat(a);
	var flo = Math.round(a_int * 1000) / 1000
	console.log(flo);
  return flo
}
function printModal (cart, cartFixed){
	let total = 0;
  cart.forEach((item) => total = total + stringToNumber(item.price));
	total = Math.round(total * 1000) / 1000;
	const ModalPrint = `
		<div class="comprar-container">
			<span class="close-modal" id="close-modal">x</span>
			<div class="info-compra">
				<small>Tu orden en</small>
				<h3>El baratón</h3>
				<p>Dirección de envío: <strong>Cr 4 # 54</strong></p>
			</div>
			<div class="bloquesCompra">
				<h3>Resumen</h3>
				<div class="listb">
					${cart.map((item)=> `<li><p>${item.name} </p> <p><span class="add" id="plus">+</span>1<span class="add">−</span></p> <p>${stringToNumber(item.price)}</p></li>`).join('')}
				</div>
			</div>
			<div class="bloquesPago">
				<li>
					<p>Subtotal: </p>
					<p>${total}</p>
				</li>
				<button class="buttonCarrito">Comprar</button>
			</div>
		</div>
		`;
		cartFixed.insertAdjacentHTML('beforeEnd', ModalPrint);
		const closeModal = document.getElementById('close-modal')
      closeModal.addEventListener('click',(event) => {
      cartFixed.innerHTML="";
    });
}
export default printModal;
