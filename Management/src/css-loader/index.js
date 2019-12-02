import _ from 'lodash';
// const css=require('./css/style.css').toString()
import css from "./css/style.css"
console.log(css.className)
// import("./css/style.css")
function component() {
  var element = document.createElement('div');
  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());