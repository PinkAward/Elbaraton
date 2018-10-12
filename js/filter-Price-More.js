function stringToNumber(string){
    var a = string.replace('$', '').replace(',','.');
    var a_int = parseFloat(a);
    return a_int
  }
function pricesMore (products){
  return products.filter((product)=>{
    const priceNumber = stringToNumber(product.price);
    console.log(priceNumber)
      return priceNumber >= 5.000
  })
}

export default pricesMore;