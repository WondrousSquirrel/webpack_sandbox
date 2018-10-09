/**
 * теперь lodash подгружается как сторонняя библиотека
 * и собирается webpack`ом, а не загружается через script 
 * в index.html  
 * */ 
import _ from 'lodash';
import './Components/index_component/style.css';
import Icon from './Components/index_component/icon.png';
import Data from './Components/index_component/data.xml'

function component () {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Добавление favicon`а на страницу
    document.querySelector("link[rel='shortcut icon'").href = Icon;

    console.log(Data);

    return element;
}

document.body.appendChild(component());