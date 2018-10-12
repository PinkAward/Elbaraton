function stringToNumber(string){
  var a = string.replace('$', '').replace(',','.');
  var a_int = parseFloat(a);
  return a_int
}
function ordenador(products){
  return products.sort(function(a,b){
    const floatA = stringToNumber(a.price);
    const floatB = stringToNumber(b.price);
    return  floatA - floatB;
  });
}
export default ordenador;
