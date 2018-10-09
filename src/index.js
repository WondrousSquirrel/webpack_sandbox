import _ from 'lodash'; //
/**
 * теперь lodash подгружается как сторонняя библиотека
 * и собирается webpack`ом, а не загружается через script 
 * в index.html  
 * */ 

function component () {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());