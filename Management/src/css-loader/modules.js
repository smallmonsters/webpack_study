import _ from 'lodash';
import style from "./css/style.css"
console.log(style)
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add(style.hello);
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component());