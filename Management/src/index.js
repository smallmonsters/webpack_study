 import _ from 'lodash';
function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello21', 'webpack12'], ' ');
  return element;
}

document.body.appendChild(component());