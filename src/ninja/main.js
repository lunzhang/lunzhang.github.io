import Network from './network.js';

export default class Ninja{

  constructor(){
    this.canvas = document.getElementById('ninja');
    this.wrapper = document.getElementById('ninja-wrapper');
    this.network = new Network(this.canvas);
    this.resizeCanvas();

    window.addEventListener('resize',(e)=>{
      this.resizeCanvas();
    });

    this.addSpark();

  }

  addSpark(){
    let addSpark = Math.random();
    if(addSpark > .975) this.network.addSpark();
    requestAnimationFrame(()=>{
      this.addSpark();
    });
  }

  resizeCanvas(){
    if(this.wrapper.clientHeight > 380){
        this.canvas.height = 380;
    }else{
      this.canvas.height = this.wrapper.clientHeight;
    }
    if(this.wrapper.clientWidth > 450){
      this.canvas.width = 450;
    }else{
      this.canvas.width = this.wrapper.clientWidth;
    }

  }

}
