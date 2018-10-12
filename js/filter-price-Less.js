function stringToNumber(string){
    var a = string.replace('$', '').replace(',','.');
    var a_int = parseFloat(a);
    return a_int
  }
function pricesLess (products){
  return products.filter((product)=>{
    const priceNumberLess = stringToNumber(product.price);
      return priceNumberLess <= 5.000
  })
}

export default pricesLess;