var character;
var obj = [];
function setup() {
  createCanvas(800, 800);
  character = new Character();
  
  obj.push(character);
}

function draw() {
  background(0);
  // character.update();
  character.draw();
  
}

function mousePressed(){
  for(let i = 0; i<obj.length; i++){
    // if the mouse axis in the obj area
    // then give some reaction
    console.log(obj[i].canClick(mouseX,mouseY))
    if(obj[i].canClick(mouseX, mouseY)){
      console.log('can click')
    }
  }

}