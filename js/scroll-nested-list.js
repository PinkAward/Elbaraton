const navigateLeft = document.getElementById('navigateLeft');
const footer = document.getElementById('footer');

function scrollNestedList() {
  function heightTop(capture){
    var rect = capture.getBoundingClientRect();
    return rect.top;
  }
  
  if((heightTop(navigateLeft) + document.body.scrollTop) + navigateLeft.offsetHeight >= (heightTop(footer) + document.body.scrollTop) - 10)
    navigateLeft.style.position = 'absolute';
    
  if(document.body.scrollTop + window.innerHeight < (heightTop(footer) + document.body.scrollTop))
  navigateLeft.style.position = 'fixed';
}
export default scrollNestedList;