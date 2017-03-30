import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Ninja from './src/ninja/main.js';
import Space from './src/space/main.js';

//const ninja = new Ninja();
const space = new Space();

space.onFinish = ()=>{
    let intro = document.getElementById('intro');
    intro.style['visibility'] = 'visible';
};
