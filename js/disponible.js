function disponible(products){
  return products.filter((product)=>{
      return product.available
  })
}

export default disponible;