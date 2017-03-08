import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Network from './src/network.js';

export class App{

  constructor(){
    this.canvas = document.getElementById('world');
    this.wrapper = document.getElementById('world-wrapper');
    this.network = new Network(this.canvas);
    this.resizeCanvas();

    window.addEventListener('resize',(e)=>{
      this.resizeCanvas();
    });
    
    this.network.animateSpark();

  }

  resizeCanvas(){
    this.canvas.height = this.wrapper.clientHeight;
    this.canvas.width = this.wrapper.clientWidth;
    this.network.drawNeurons();
  }

}

const app = new App();
window.app = app;
