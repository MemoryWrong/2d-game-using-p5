var character;
var obj = [];
var map;

const move_delta = 15;

function setup() {
  createCanvas(800, 800);
  map = new Map();

  character = new Character();
  obj.push(character);
}

function draw() {
  background(33,53,33);
  background(0``);
  map.draw();

  // press the Arrow keys to control character
  if (keyIsDown(LEFT_ARROW)) {
    character.move(-15,0)
  }

  if (keyIsDown(RIGHT_ARROW)) {
    character.move(15,0)
  }

  if (keyIsDown(UP_ARROW)) {
    character.move(0,-15)
  }

  if (keyIsDown(DOWN_ARROW)) {
    character.move(0,15)
    
  }

  // character.update();
  for(let i = 0; i< obj.length;i++){
    obj[i].draw();
  }
  
  for(let i = 0; i< obj.length;i++){
    // obj[i].move();
    // do each obj update
  }
}

function keyPressed() {

  // if (keyCode === LEFT_ARROW) {
  //   character.move(-move_delta,0)
  // } else if (keyCode === RIGHT_ARROW) {
  //   character.move(move_delta,0)
  // } else if (keyCode === UP_ARROW) {
  //   character.move(0,-move_delta)
  // } else if (keyCode === DOWN_ARROW) {
  //   character.move(0,move_delta)
  // }
}

function mousePressed(){
  for(let i = 0; i<obj.length; i++){
    // if the mouse axis in the obj area
    // then give some reaction
    if(obj[i].inArea(mouseX, mouseY)){
    }
  }
  for(let i = 0; i<map.tiles.length; i++){
    // if the mouse axis in the obj area
    // then give some reaction
    if(map.tiles[i].inArea(mouseX, mouseY)){
    }
  }

}