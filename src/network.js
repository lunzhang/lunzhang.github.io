import Neuron from './neuron.js';
import {networkNodes} from './data.js';

export default class Network{

  constructor(canvas){
    this.canvas = canvas;
    this.neurons = {};
    this.init();
  }

  init(){
    for(let prop in networkNodes){
      this.neurons[prop] = (new Neuron(networkNodes[prop]));
    }
  }

  drawNeurons(){
      let ctx = this.canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'white';

      let ratioY = this.canvas.height / 800;
      let ratioX = this.canvas.width / 1600;

      for(let prop in this.neurons){
        let neuron = this.neurons[prop];

        //draw neuron
        ctx.beginPath();
        ctx.arc(ratioX*neuron.x,ratioY*neuron.y, Math.random()*2 + 1,0,2*Math.PI);
        ctx.fill();

        //draw neuron neighbors
        for(let i = 0;i<neuron.neighbors.length;i++){
          let neighbor = networkNodes[neuron.neighbors[i]];
          ctx.moveTo(ratioX*neuron.x,ratioY*neuron.y);
          ctx.lineWidth = (Math.random()*7 + 1)/100;
          ctx.lineTo(ratioX*neighbor.x, ratioY*neighbor.y);
          ctx.stroke();
        }

      }
  }

}
