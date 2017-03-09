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

    this.addSpark();

  }

  addSpark(){
    let addSpark = Math.random();
    if(addSpark > .95) this.network.addSpark();
    requestAnimationFrame(()=>{
      this.addSpark();
    });
  }

  resizeCanvas(){
    this.canvas.height = this.wrapper.clientHeight;
    this.canvas.width = this.wrapper.clientWidth;
  }

}

const app = new App();
