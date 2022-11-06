let scene
let rig
let helicopter

window.onload = function(){
  scene = document.querySelector("a-scene");
  rig = document.getElementById("rig");
  rig.setAttribute("rotation", {x:-20, y:0, z:0});

  helicopter = new Helicopter(0,0);

  loop();
}

function loop(){
  helicopter.operate();
  helicopter.stick();
  
  setTimeout(loop, 0.1);
}