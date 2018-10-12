function stockOrdenador(products){
  return products.sort(function(c,d){
    const floatC = c.quantity;
    const floatD = d.quantity;
    return  floatD - floatC;
  });
}
export default stockOrdenador;