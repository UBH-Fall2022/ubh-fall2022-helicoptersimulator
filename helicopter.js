class Helicopter{
  constructor(x,z){
    this.scale = 0.75;
    
    this.x = x;
    this.z = z;
    this.y = 7;
    
    this.speed = 0.5; //travel speed
    
    this.r = 0; //rotor rotation
    this.dr = 5;

    this.rotateAngle = 0; //rotate helicopter
    this.dRotateAngle = 2;
    
    this.ltt = 0; //lateral tilt
    this.lgt = 0; //longitudinal tilt
    this.dt = 0.75; //tilt rate
    this.dtAuto = 0.05; //autocorrect tilt rate
    this.longLimit = 14; //limits how much tilt
    this.latLimit = 20;
    
    scene = document.querySelector('a-scene');
    this.obj = document.createElement('a-entity');
    
    this.heli = document.createElement("a-entity");
    
    this.box1 = document.createElement("a-box");
    this.box1.setAttribute("position",{x:0, y:0, z:0.5});
    this.box1.setAttribute("height","1.5");
    this.box1.setAttribute("depth","8");
    this.box1.setAttribute("width","2");
    this.box1.setAttribute("color","dimgrey");
    this.heli.append(this.box1);
    
    this.cylinder1 = document.createElement("a-cylinder");
    this.cylinder1.setAttribute("radius","0.75");
    this.cylinder1.setAttribute("position",{x:0, y:0, z:-3.5});
    this.cylinder1.setAttribute("rotation",{x:0, y:0, z:90});
    this.cylinder1.setAttribute("height","2");
    this.cylinder1.setAttribute("color","dimgrey");
    this.heli.append(this.cylinder1);
    
    this.box2 = document.createElement("a-box");
    this.box2.setAttribute("position",{x:0, y:0.795, z:-2.5});
    this.box2.setAttribute("rotation",{x:29, y:0, z:0});
    this.box2.setAttribute("height","2");
    this.box2.setAttribute("depth","1");
    this.box2.setAttribute("width","1.8");
    this.box2.setAttribute("color","black");
    this.heli.append(this.box2);
    
    this.cylinder2 = document.createElement("a-cylinder");
    this.cylinder2.setAttribute("radius","0.5");
    this.cylinder2.setAttribute("position",{x:1, y:0, z:-1});
    this.cylinder2.setAttribute("rotation",{x:90, y:0, z:0});
    this.cylinder2.setAttribute("height","4");
    this.cylinder2.setAttribute("color","dimgrey");
    this.heli.append(this.cylinder2);
    
    this.box3 = document.createElement("a-box");
    this.box3.setAttribute("position",{x:0, y:0.9125, z:-1.45});
    this.box3.setAttribute("rotation",{x:0, y:0, z:0});
    this.box3.setAttribute("height","2");
    this.box3.setAttribute("depth","2");
    this.box3.setAttribute("width","1.8");
    this.box3.setAttribute("color","black");
    this.heli.append(this.box3);
    
    this.cylinder3 = document.createElement("a-cylinder");
    this.cylinder3.setAttribute("radius","0.5");
    this.cylinder3.setAttribute("position",{x:-1, y:0, z:-1});
    this.cylinder3.setAttribute("rotation",{x:90, y:0, z:0});
    this.cylinder3.setAttribute("height","4");
    this.cylinder3.setAttribute("color","dimgrey");
    this.heli.append(this.cylinder3);
    
    this.box4 = document.createElement("a-box");
    this.box4.setAttribute("position",{x:0, y:1, z:0.5});
    this.box4.setAttribute("rotation",{x:0, y:0, z:0});
    this.box4.setAttribute("height","2");
    this.box4.setAttribute("depth","3");
    this.box4.setAttribute("width","2");
    this.box4.setAttribute("color","dimgrey");
    this.heli.append(this.box4);
    
    this.cylinder4 = document.createElement("a-cylinder");
    this.cylinder4.setAttribute("radius","0.35");
    this.cylinder4.setAttribute("position",{x:0, y:0.35, z:-3.75});
    this.cylinder4.setAttribute("height","1");
    this.cylinder4.setAttribute("color","dimgray");
    this.heli.append(this.cylinder4);
    
    this.box5 = document.createElement("a-box");
    this.box5.setAttribute("position",{x:0, y:0.935, z:2.35});
    this.box5.setAttribute("rotation",{x:45, y:0, z:0});
    this.box5.setAttribute("depth","2");
    this.box5.setAttribute("height","2");
    this.box5.setAttribute("width","2");
    this.box5.setAttribute("color","dimgrey");
    this.heli.append(this.box5);
    
    this.cylinder5 = document.createElement("a-cylinder");
    this.cylinder5.setAttribute("radius","0.35");
    this.cylinder5.setAttribute("position",{x:3.5, y:-0.3, z:0.375});
    this.cylinder5.setAttribute("rotation",{x:90, y:0, z:0});
    this.cylinder5.setAttribute("height","2");
    this.cylinder5.setAttribute("color","dimgray");
    this.heli.append(this.cylinder5);
    
    this.box6 = document.createElement("a-box");
    this.box6.setAttribute("position",{x:0, y:0.625, z:0.375});
    this.box6.setAttribute("height","0.25");
    this.box6.setAttribute("depth","1.25");
    this.box6.setAttribute("width","8");
    this.box6.setAttribute("color","dimgrey");
    this.heli.append(this.box6);
    
    this.cylinder6 = document.createElement("a-cylinder");
    this.cylinder6.setAttribute("radius","0.35");
    this.cylinder6.setAttribute("position",{x:-3.5, y:-0.3, z:0.375});
    this.cylinder6.setAttribute("rotation",{x:90, y:0, z:0});
    this.cylinder6.setAttribute("height","2");
    this.cylinder6.setAttribute("color","dimgray");
    this.heli.append(this.cylinder6);
    
    this.box7 = document.createElement("a-box");
    this.box7.setAttribute("position",{x:4.595, y:0.5185, z:0.375});
    this.box7.setAttribute("rotation",{x:0, y:0, z:-10});
    this.box7.setAttribute("height","0.25");
    this.box7.setAttribute("depth","1.25");
    this.box7.setAttribute("width","1.25");
    this.box7.setAttribute("color","dimgrey");
    this.heli.append(this.box7);
    
    this.cylinder7 = document.createElement("a-cylinder");
    this.cylinder7.setAttribute("radius","0.35");
    this.cylinder7.setAttribute("position",{x:2.25, y:-0.3, z:0.375});
    this.cylinder7.setAttribute("rotation",{x:90, y:0, z:0});
    this.cylinder7.setAttribute("height","2");
    this.cylinder7.setAttribute("color","dimgray");
    this.heli.append(this.cylinder7);
    
    this.box8 = document.createElement("a-box");
    this.box8.setAttribute("position",{x:-4.595, y:0.5185, z:0.375});
    this.box8.setAttribute("rotation",{x:0, y:0, z:10});
    this.box8.setAttribute("height","0.25");
    this.box8.setAttribute("depth","1.25");
    this.box8.setAttribute("width","1.25");
    this.box8.setAttribute("color","dimgrey");
    this.heli.append(this.box8);
    
    this.cylinder8 = document.createElement("a-cylinder");
    this.cylinder8.setAttribute("radius","0.35");
    this.cylinder8.setAttribute("position",{x:-2.25, y:-0.3, z:0.375});
    this.cylinder8.setAttribute("rotation",{x:90, y:0, z:0});
    this.cylinder8.setAttribute("height","2");
    this.cylinder8.setAttribute("color","dimgray");
    this.heli.append(this.cylinder8);
    
    this.box9 = document.createElement("a-box");
    this.box9.setAttribute("position",{x:3.5, y:0.2, z:0.375});
    this.box9.setAttribute("height","0.55");
    this.box9.setAttribute("depth","0.75");
    this.box9.setAttribute("width","0.25");
    this.box9.setAttribute("color","dimgrey");
    this.heli.append(this.box9);
    
    this.cylinder9 = document.createElement("a-cylinder");
    this.cylinder9.setAttribute("radius","0.25");
    this.cylinder9.setAttribute("position",{x:1.5, y:1.35, z:0.925});
    this.cylinder9.setAttribute("rotation",{x:90, y:0, z:0});
    this.cylinder9.setAttribute("height","1");
    this.cylinder9.setAttribute("color","dimgrey");
    this.heli.append(this.cylinder9);
    
    this.box10 = document.createElement("a-box");
    this.box10.setAttribute("position",{x:-3.5, y:0.2, z:0.375});
    this.box10.setAttribute("height","0.55");
    this.box10.setAttribute("depth","0.75");
    this.box10.setAttribute("width","0.25");
    this.box10.setAttribute("color","dimgrey");
    this.heli.append(this.box10);
    
    this.cylinder10 = document.createElement("a-cylinder");
    this.cylinder10.setAttribute("radius","0.25");
    this.cylinder10.setAttribute("position",{x:-1.5, y:1.35, z:0.925});
    this.cylinder10.setAttribute("rotation",{x:90, y:0, z:0});
    this.cylinder10.setAttribute("height","1");
    this.cylinder10.setAttribute("color","dimgrey");
    this.heli.append(this.cylinder10);
    
    this.box11 = document.createElement("a-box");
    this.box11.setAttribute("position",{x:2.25, y:0.2, z:0.375});
    this.box11.setAttribute("height","0.55");
    this.box11.setAttribute("depth","0.75");
    this.box11.setAttribute("width","0.25");
    this.box11.setAttribute("color","dimgrey");
    this.heli.append(this.box11);
    
    this.cylinder11 = document.createElement("a-cylinder");
    this.cylinder11.setAttribute("position",{x:0, y:-0.5, z:-4});
    this.cylinder11.setAttribute("rotation",{x:90, y:0, z:0});
    this.cylinder11.setAttribute("radius","0.15");
    this.cylinder11.setAttribute("height","2");
    this.cylinder11.setAttribute("color","grey");
    this.heli.append(this.cylinder11);
    
    this.box12 = document.createElement("a-box");
    this.box12.setAttribute("position",{x:-2.25, y:0.2, z:0.375});
    this.box12.setAttribute("height","0.55");
    this.box12.setAttribute("depth","0.75");
    this.box12.setAttribute("width","0.25");
    this.box12.setAttribute("color","dimgrey");
    this.heli.append(this.box12);
    
    this.box13 = document.createElement("a-box");
    this.box13.setAttribute("position",{x:1.5, y:1.35, z:2});
    this.box13.setAttribute("height","1");
    this.box13.setAttribute("depth","2.5");
    this.box13.setAttribute("width","1");
    this.box13.setAttribute("color","dimgray");
    this.heli.append(this.box13);
    
    this.box14 = document.createElement("a-box");
    this.box14.setAttribute("position",{x:-1.5, y:1.35, z:2});
    this.box14.setAttribute("height","1");
    this.box14.setAttribute("depth","2.5");
    this.box14.setAttribute("width","1");
    this.box14.setAttribute("color","dimgray");
    this.heli.append(this.box14);
    
    this.box15 = document.createElement("a-box");
    this.box15.setAttribute("position",{x:0, y:0, z:6.5});
    this.box15.setAttribute("height","1.5");
    this.box15.setAttribute("depth","4");
    this.box15.setAttribute("width","1.35");
    this.box15.setAttribute("color","dimgrey");
    this.heli.append(this.box15);
    
    this.box16 = document.createElement("a-box");
    this.box16.setAttribute("position",{x:-0.5025, y:0, z:6.45});
    this.box16.setAttribute("rotation",{x:0, y:5, z:0});
    this.box16.setAttribute("height","1.5");
    this.box16.setAttribute("depth","4");
    this.box16.setAttribute("width","0.65");
    this.box16.setAttribute("color","dimgrey");
    this.heli.append(this.box16);
    
    this.box17 = document.createElement("a-box");
    this.box17.setAttribute("position",{x:0.5025, y:0, z:6.45});
    this.box17.setAttribute("rotation",{x:0, y:-5, z:0});
    this.box17.setAttribute("height","1.5");
    this.box17.setAttribute("depth","4");
    this.box17.setAttribute("width","0.65");
    this.box17.setAttribute("color","dimgrey");
    this.heli.append(this.box17);
    
    this.box18 = document.createElement("a-box");
    this.box18.setAttribute("position",{x:0, y:1.5, z:7.125});
    this.box18.setAttribute("rotation",{x:20, y:0, z:0});
    this.box18.setAttribute("height","2.5");
    this.box18.setAttribute("depth","1.5");
    this.box18.setAttribute("width","0.25");
    this.box18.setAttribute("color","dimgrey");
    this.heli.append(this.box18);
    
    this.box19 = document.createElement("a-box");
    this.box19.setAttribute("position",{x:0, y:0.625, z:8});
    this.box19.setAttribute("height","0.25");
    this.box19.setAttribute("depth","1");
    this.box19.setAttribute("width","4");
    this.box19.setAttribute("color","dimgrey");
    this.heli.append(this.box19);
    this.obj.append(this.heli)

    this.mainRotor = document.createElement("a-entity");
    this.box20 = document.createElement("a-box");
    this.box20.setAttribute("position",{x:0, y:2.5, z:0});
    this.box20.setAttribute("height","0.25");
    this.box20.setAttribute("depth","11");
    this.box20.setAttribute("width","1");
    this.box20.setAttribute("color","grey");
    this.mainRotor.append(this.box20);
    
    this.cylinder12 = document.createElement("a-cylinder");
    this.cylinder12.setAttribute("position",{x:0, y:2.5, z:0});
    this.cylinder12.setAttribute("radius","0.25");
    this.cylinder12.setAttribute("height","1.5");
    this.cylinder12.setAttribute("color","grey");
    this.mainRotor.append(this.cylinder12);
    
    this.box21 = document.createElement("a-box");
    this.box21.setAttribute("position",{x:0, y:2.5, z:0});
    this.box21.setAttribute("rotation",{x:0, y:90, z:0});
    this.box21.setAttribute("height","0.25");
    this.box21.setAttribute("depth","11");
    this.box21.setAttribute("width","1");
    this.box21.setAttribute("color","grey");
    this.mainRotor.append(this.box21);
    
    this.cylinder13 = document.createElement("a-cylinder");
    this.cylinder13.setAttribute("position",{x:0, y:3.25, z:0});
    this.cylinder13.setAttribute("radius","0.75");
    this.cylinder13.setAttribute("height","0.25");
    this.cylinder13.setAttribute("color","dimgrey");
    this.mainRotor.append(this.cylinder13);
    this.obj.append(this.mainRotor);

    this.tailRotor = document.createElement("a-entity");
    this.box22 = document.createElement("a-box");
    this.box22.setAttribute("position",{x:-0.725, y:0, z:0});
    this.box22.setAttribute("height","2");
    this.box22.setAttribute("depth","0.325");
    this.box22.setAttribute("width","0.25");
    this.box22.setAttribute("color","grey");
    this.tailRotor.append(this.box22);
    
    this.cylinder14 = document.createElement("a-cylinder");
    this.cylinder14.setAttribute("position",{x:-0.5, y:0, z:0});
    this.cylinder14.setAttribute("rotation",{x:0, y:0, z:90});
    this.cylinder14.setAttribute("radius","0.25");
    this.cylinder14.setAttribute("height","1");
    this.cylinder14.setAttribute("color","grey");
    this.tailRotor.append(this.cylinder14);
    
    this.box23 = document.createElement("a-box");
    this.box23.setAttribute("position",{x:-0.725, y:0, z:0});
    this.box23.setAttribute("height","0.325");
    this.box23.setAttribute("depth","2");
    this.box23.setAttribute("width","0.25");
    this.box23.setAttribute("color","grey");
    this.tailRotor.append(this.box23);
    this.tailRotor.setAttribute("position", {x:0, y:2, z:7.5})

    this.obj.append(this.tailRotor);
    
    scene.append(this.obj);
  }
  
  getxPosition = () => this.obj.getAttribute("position").x;
  getyPosition = () => this.obj.getAttribute("position").y;
  getzPosition = () => this.obj.getAttribute("position").z;

  getxRotation = () => this.obj.getAttribute("rotation").x;
  getyRotation = () => this.obj.getAttribute("rotation").y;
  getzRotation = () => this.obj.getAttribute("rotation").z;
  
  position = (x,z) => this.obj.setAttribute("position", {x:x, y:this.y, z:z});
  rotate = (a) => this.obj.setAttribute("rotation", {x:this.getxRotation(), y:a, z:this.getzRotation()});

  latTilt = (a) => this.obj.setAttribute("rotation", {x:this.getxRotation(), y:this.getyRotation(), z:a});
  longTilt = (a) =>this.obj.setAttribute("rotation", {x:a, y:this.getyRotation(), z:this.getzRotation()});

  rotateRotors(){
    this.r += this.dr;
    this.mainRotor.setAttribute("rotation", {x:0, y:this.r, z:0});
    this.tailRotor.setAttribute("rotation", {x:this.r * 1.5, y:0, z:0});
  }
  
  autoCorrectTilt(){
    if (this.getxRotation() < 0){
      this.lgt += this.dtAuto;
      this.longTilt(this.lgt);
    } else if (this.getxRotation() > 0){
      this.lgt -= this.dtAuto;
      this.longTilt(this.lgt);
    }

    if (this.getzRotation() > 0){
      this.ltt -= this.dtAuto;
      this.latTilt(this.ltt);
    } else if (this.getzRotation() < 0){
      this.ltt += this.dtAuto;
      this.latTilt(this.ltt);
    }
  }

  operate(){
    document.onkeydown = (event) => {
      let key = event.which;
      if (key == 32 && this.y < 35){ this.y += this.speed } //up space
      if (key == 16 && this.y > 2.5){ this.y -= this.speed } //down shift
      
      if (key == 87 && this.z > -93.5){
        this.z -= this.speed; //forward w
        if (
          (this.getxRotation() > -this.longLimit) &&
          ((this.rotateAngle > 270) || (this.rotateAngle < 90))
        ){
          this.lgt -= this.dt;
        }
        else if (
          (this.getxRotation() < this.longLimit) &&
          ((this.rotateAngle < 270) || (this.rotateAngle > 90))
        ){
          this.lgt += this.dt;
        }
        this.longTilt(this.lgt);
      }
      
      if (key == 83 && this.z < 93.5){
        this.z += this.speed; //backwards s
        if (  
          (this.getxRotation() < this.longLimit) && 
          ((this.rotateAngle > 270) || (this.rotateAngle < 90))
        ){
          this.lgt += this.dt;
        }
        else if (  
          (this.getxRotation() > -this.longLimit) && 
          ((this.rotateAngle < 270) || (this.rotateAngle > 90))
        ){
          this.lgt -= this.dt;
        }
        this.longTilt(this.lgt);
      }
      
      if (key == 65 && this.x > -95){
        this.x -= this.speed; //left a
        if (
          (this.getzRotation() < this.latLimit) &&
          ((this.rotateAngle > 270) || (this.rotateAngle < 90))
        ){ 
          this.ltt += this.dt;
        }
        else if (
          (this.getzRotation() > -this.latLimit) &&
          ((this.rotateAngle < 270) || (this.rotateAngle > 90))
        ){ 
          this.ltt -= this.dt;
        }
        this.latTilt(this.ltt);
      } 
      if (key == 68 && this.x < 95){
        this.x += this.speed; //right d
        if (
          (this.getzRotation() > -this.latLimit) &&
          ((this.rotateAngle > 270) || (this.rotateAngle < 90))
        ){
          this.ltt -= this.dt;
        }
        else if (
          (this.getzRotation() < this.latLimit) &&
          ((this.rotateAngle < 270) || (this.rotateAngle > 90))
        ){
          this.ltt += this.dt;
        }
        this.latTilt(this.ltt);
      }

      if (key == 81){
        this.rotateAngle += this.dRotateAngle;
        if (this.rotateAngle > 360){
          this.rotateAngle = 0;
        }
        
        this.rotate(this.rotateAngle);
      }

      if (key == 69){
        this.rotateAngle -= this.dRotateAngle;
        if (this.rotateAngle < 0){
          this.rotateAngle = 360;
        }
        
        this.rotate(this.rotateAngle);
      }

    }
    
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.autoCorrectTilt();
    this.rotateRotors();
  }

  stick(){
    rig.setAttribute("position", {x:this.x, y:this.y + 6, z:this.z + 14});
  }

}