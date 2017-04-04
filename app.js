import Ninja from './src/ninja/main.js';
import Space from './src/space/main.js';

//const ninja = new Ninja();
(function(){
  const space = new Space();

  space.onFinish = ()=>{
      let intro = document.getElementById('intro');
      intro.style['visibility'] = 'visible';
  };

})();

window.toggleDrop = function(){
  document.getElementById("myDropdown").classList.toggle("show");
}
