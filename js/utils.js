let $ = (selector, node = document) => {
  return node.querySelector(selector);
}


let CreateElement = (tagName, className = '', text) => {
  let element = document.createElement(tagName);
  element.setAttribute('class', className);
  if (text) {
    element.textContent = text
  }
  return element;
}