import * as THREE from './three.js';
import './CanvasRenderer.js';
import './Projector.js';

export default class Space{

  constructor(){
    this.speed = 1;
    this.end = false;
    this.wrapper = document.getElementById('weather-wrapper');
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 3000 );
    this.camera.rotation.x = -1.5;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.renderer = new THREE.CanvasRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.wrapper.clientWidth, this.wrapper.clientHeight);

    //creates circle group with 1000 circles
    let circle = Math.PI * 2;
    let program = function (context) {
      context.beginPath();
      context.arc( 0, 0, 0.5, 0, circle, true );
      context.fill();
    };
    let material = new THREE.SpriteCanvasMaterial({
      color: 'white',
      program: program
    });
    for( let i = 0; i < 1000; i++ ){
      let particle = new THREE.Sprite(material);
      particle.position.y = Math.random() * -5000 - 500;
      particle.position.x = Math.random() * 1000 - 500;
      particle.position.z = Math.random() * 1000 - 500;
      particle.scale.x = particle.scale.y = Math.random() * 10 + 10;
      this.group.add(particle);
    }

    this.wrapper.appendChild(this.renderer.domElement);

    window.addEventListener('resize',(e)=>{
      this.resizeCanvas();
    });

    this.animate();
  }

  animate() {

    requestAnimationFrame( ()=>{
      this.animate();
    });

    if(this.end){
      this.group.rotation.y += 0.0005;
    }else if(this.camera.position.y > -5500 && this.end == false){
      this.speed+= 0.5;
      this.camera.position.y = this.camera.position.y - this.speed;
    }else if(this.end == false){
      this.onFinish();
      this.camera.rotation.x = 0;
      this.camera.position.z = 1000;
      this.camera.position.y = 0;
      this.camera.updateProjectionMatrix();
      this.group.children.forEach((circle)=>{
        circle.position.y = Math.round(Math.random() * 2000 - 1000);
        circle.position.x = Math.round(Math.random() * 2000 - 1000);
        circle.position.z = Math.round(Math.random() * 2000 - 1000);
        circle.ogposition = circle.position;
      });
      this.end = true;
    }

    this.renderer.render(this.scene, this.camera);

  }

  resizeCanvas(){
    this.camera.aspect = this.wrapper.clientWidth / this.wrapper.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( this.wrapper.clientWidth, this.wrapper.clientHeight );
  }

}
