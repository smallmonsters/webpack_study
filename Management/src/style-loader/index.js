import _ from 'lodash';
import './css/style.css';
import './css/style2.css';
// import styles from './css/styles.lazy.css';

function component() {
  var element = document.createElement('div');
  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}
// setTimeout(() => {
//   styles.use()
// }, 2000);

document.body.appendChild(component());