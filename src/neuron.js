import {networkNodes} from './data.js';

export default class Neuron{

    constructor(config){
        this.id = config.id;
        this.x = config.x;
        this.y = config.y;
        this.size = config.size;
        this.lineWidth = config.lineWidth;
        this.neighbors = config.neighbors;
    }

    draw(ctx){
      let ratioX = ctx.canvas.width / 1600;
      let ratioY = ctx.canvas.height / 800;

      //draw neuron
      ctx.beginPath();
      ctx.arc(ratioX*this.x,ratioY*this.y, this.size,0,2*Math.PI);
      ctx.fill();

      //draw neuron connections
      ctx.lineWidth = this.lineWidth;
      for(let i = 0;i<this.neighbors.length;i++){
        let neighbor = networkNodes[this.neighbors[i]];
        ctx.moveTo(ratioX*this.x,ratioY*this.y);
        ctx.lineTo(ratioX*neighbor.x, ratioY*neighbor.y);
        ctx.stroke();
      }

    }

}
