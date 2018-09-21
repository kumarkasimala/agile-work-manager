function Duster(){
   var color;
   var size;
   var sponge;
   this.clean = function(){
      console.log("I am " + this.constructor.name);
   }
}


function Duster(color, size, sponge){
   var color = color;
   var size = size;
   var sponge = sponge;
   this.clean = function(){
      console.log("I am " + this.constructor.name);
   }
}


function Duster(color, size, sponge){
   var color = color;
   var size = size;
   var sponge = sponge;
   this.name = "Duster";
   var privateFun = function(){
     console.log("I am private function dude, you cant access me from outside");
   }
   this.clean = function(){
      console.log("I am " + this.constructor.name);
   }
}

String.prototype.contains = function(s){
   return this.indexOf(s) !== -1;
}

var s = new String("111");
s.contains("111");

function NalgondaDuster(color, size, sponge){
   Duster.call(this, color, size, sponge);
}

NalgondaDuster.prototype = Object.create(Duster.prototype);
NalgondaDuster.prototype.constructor = Duster;

function UtterKhDuster(color, size, sponge){
   Duster.call(this, color, size, sponge);
}

UtterKhDuster.prototype = Object.create(Duster.prototype);
UtterKhDuster.prototype.constructor = Duster;


function UtterK1hDuster(color, size, sponge){
   Duster.call(this, color, size, sponge);
}

UtterK1hDuster.prototype = Object.create(UtterKhDuster.prototype);
UtterK1hDuster.prototype.constructor = UtterKhDuster;




