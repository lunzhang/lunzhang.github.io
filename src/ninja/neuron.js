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
      let x = this.x * ratioX;
      let y = this.y * ratioY;

      //draw neuron
      ctx.beginPath();
      let radgrad = ctx.createRadialGradient(x,y,0,x,y,this.size*5);
      radgrad.addColorStop(0, '#ffffff');
      radgrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = radgrad;
      ctx.fillRect(x-this.size*5,y-this.size*5,this.size*10,this.size*10);

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
