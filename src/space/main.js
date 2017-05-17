import * as THREE from './three.js';
import './CanvasRenderer.js';
import './Projector.js';

export default class Space{

  constructor(){
    this.mouseX = 1;
    this.mouseY = 1;
    this.speed = 1;
    this.end = false;
    this.wrapper = document.getElementById('space-wrapper');
    this.startBtn = document.getElementById('start-btn');
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 3000 );
    this.camera.rotation.x = -1.5;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.renderer = new THREE.CanvasRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.wrapper.clientWidth, this.wrapper.clientHeight);
    this.wrapperHalfX = this.wrapper.clientWidth/2;
    this.wrapperHalfY = this.wrapper.clientHeight/2;

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

    document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false );
    document.addEventListener('touchstart', this.onDocumentTouch.bind(this), false );
    document.addEventListener('touchmove', this.onDocumentTouch.bind(this), false );
    document.addEventListener('wheel', this.onMouseWheel.bind(this), false );

    this.startBtn.onclick = (e)=>{
      this.startBtn.style.display = "none";
      this.animate();
    };

  }

  onDocumentMouseMove(e){
    this.mouseX = e.clientX - this.wrapperHalfX;
    this.mouseY = e.clientY - this.wrapperHalfY;
  }

  onDocumentTouch(e){
    if (e.touches.length === 1 ){
      e.preventDefault();
      this.mouseX = e.touches[ 0 ].pageX - this.wrapperHalfX;
      this.mouseY = e.touches[ 0 ].pageY - this.wrapperHalfY;
    }
  }

  onMouseWheel(e){
    if(this.end){
      if(this.camera.position.z < 2000 && e.deltaY > 0){
        this.camera.position.z += e.deltaY;
      }else if(this.camera.position.z > -500 && e.deltaY < 0){
        this.camera.position.z += e.deltaY;
      }
    }
  }

  animate() {

    requestAnimationFrame( ()=>{
      this.animate();
    });

    if(this.end){
      this.group.rotation.x += (0.0001 * this.mouseY/25);
      this.group.rotation.y += (0.0005 * this.mouseX/25);
    }else if(this.camera.position.y > -5500 && this.end == false){
      this.speed+= 0.5;
      this.camera.position.y = this.camera.position.y - this.speed;
    }else{
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
    this.wrapperHalfX = this.wrapper.clientWidth/2;
    this.wrapperHalfY = this.wrapper.clientHeight/2;
  }

}
