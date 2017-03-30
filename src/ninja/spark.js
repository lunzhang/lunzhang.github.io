import { networkNodes } from './data.js';

export default class Spark{

  constructor(config){
    this.x = config.x;
    this.y = config.y;
    this.id = config.id;
    this.currentTarget = 1;
    this.paths = [];
    this.speed = Math.ceil(Math.random()*20);
    this.init();
  }

  init(){
    // get target neuron and find shortest path to it
    let target = Math.floor(Math.random()*50+1);
    while(target == this.id){
      target = Math.floor(Math.random()*50+1);
    }
    this.target = networkNodes[target];
    this.getPaths([
      {
        path:[networkNodes[this.id]],
        node:networkNodes[this.id]
      }
    ]);

  }

  /** BFS to get path to target
  **  the first path returned will be the shortest path
  **/
  getPaths(queue){
    let newQueue = [];
    for(let i = 0;i<queue.length;i++){
      let node = queue[i].node;
      let path = queue[i].path;
      //if node is target, push to paths and return
      if(node == this.target){
        this.paths = path;
        return;
      }
      //loop through node neighbors and add to queue
      for(let j = 0;j<node.neighbors.length;j++){
        let neighbor = networkNodes[node.neighbors[j]];
        if(path.indexOf(neighbor) == -1){
          let newPath = path.slice();
          newPath.push(neighbor);
          newQueue.push({
            node:neighbor,
            path: newPath
          });
        }
      }
    }
    this.getPaths(newQueue);
  }

  draw(ctx){
    let x = this.x * ctx.canvas.width / 1600;
    let y = this.y * ctx.canvas.height / 800;

    let radgrad = ctx.createRadialGradient(x, y, 1, x, y, 10);

    //draw spark
    radgrad.addColorStop(0, '#ffffff');
    radgrad.addColorStop(0.1, '#5695ff');
    radgrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = radgrad;
    ctx.fillRect(x-10, y-10, 20, 20);
    return this.update();
  }

  update(){
    let target = this.paths[this.currentTarget];

    //reached end of path
    if(target == undefined ) return false;

    //calculate distance and speed
    let dx = target.x - this.x;
    let dy = target.y - this.y;
    let dist = Math.sqrt(dx*dx+dy*dy);
    let velX = (dx/dist)*this.speed;
    let velY = (dy/dist)*this.speed;
    velX = isNaN(velX) ? 0 : velX;
    velY = isNaN(velY) ? 0 : velY;

    this.x += velX;
    this.y += velY;

    //if it has reached target go to next
    if( (dx > 0 && this.x > target.x) || (dx < 0 && this.x < target.x) ||
    (dy > 0 && this.y > target.y) || (dy < 0 && this.y < target.y) ){
      this.currentTarget++;
    }

    return true;
  }

}
