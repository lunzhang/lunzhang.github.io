export default class Spark{

  constructor(config){
    this.x = config.x;
    this.y = config.y;
  }

  draw(ctx){
    let x = this.x * ctx.canvas.width / 1600;
    let y = this.y * ctx.canvas.height / 800;
    let radgrad = ctx.createRadialGradient(x, y, .1, x, y, 20);

    //draw spark
    radgrad.addColorStop(0, '#ffffff');
    radgrad.addColorStop(0.1, '#5695ff');
    radgrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = radgrad;
    ctx.fillRect(x-20, y-20, 40, 40);
  }

}
