function imprimircat (categoria, element){
  const categoriesPrint = `
    <ol>
      <ul>
        <li>
        <input type="checkbox">${categoria.name}
        </li>
      </ul>
    </ol>
  `;
  element.insertAdjacentHTML('beforeEnd', categoriesPrint);
}

function printNestedList(categoria, element) {
    imprimircat(categoria, element)
    if (categoria.sublevels) {
        categoria.sublevels.forEach((sublevel)=>{ printNestedList(sublevel, element) })
    }
}
export default printNestedList;
