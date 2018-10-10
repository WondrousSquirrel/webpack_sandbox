/**
 * теперь lodash подгружается как сторонняя библиотека
 * и собирается webpack`ом, а не загружается через script 
 * в index.html  
 * */ 
import _ from 'lodash';
import printMe from './print';
import { cube } from './math';

import './Components/index_component/style.css';
import Icon from './Components/index_component/icon.png';
import Data from './Components/index_component/data.xml'

function component () {
    let element = document.createElement('div');
    let element2 = document.createElement('pre');
    let btn = document.createElement('button');

    btn.innerHTML = 'Click me';
    btn.onclick = printMe;

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    element2.innerHTML = [
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    
    // Добавление favicon`а на страницу
    document.querySelector("link[rel='shortcut icon'").href = Icon;
    
    console.log(Data);
    element.appendChild(btn);

    return element2;
}

//document.body.appendChild(component());

let element = component();  // сохраняем элемент для перерисовки
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', () => {
        console.log('Accepting the updated printMe module');
        // printMe();
        document.body.removeChild(element);
        element = component(); // заново рендерим компонент для обновления события
        document.body.appendChild(element);
    })
}