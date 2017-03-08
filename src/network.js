import Neuron from './neuron.js';
import Spark from './spark.js';
import { networkNodes } from './data.js';

export default class Network{

  constructor(canvas){
    this.canvas = canvas;
    this.neurons = {};
    this.sparks = [];
    this.init();
  }

  init(){
    for(let prop in networkNodes){
      this.neurons[prop] = (new Neuron(networkNodes[prop]));
    }
    this.sparks.push(new Spark(this.neurons[1]));
  }

  drawNeurons(){
    let ctx = this.canvas.getContext('2d');
    ctx.strokeStyle = 'white';
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'white';
    ctx.fillStyle = 'white';

    for(let prop in this.neurons){
      let neuron = this.neurons[prop];
      neuron.draw(ctx);
    }

  }

  animateSpark(){
    let ctx = this.canvas.getContext('2d');
    for(let i = 0;i<this.sparks.length;i++){
      this.sparks[i].draw(ctx);
    }
  }

}
