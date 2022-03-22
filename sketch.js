function setup() {
  createCanvas(400, 400);
  for (var j= 50 ; j<400; j=j+50) {
    var tomato= createSprite(j, 50, 20, 20);
      tomato.shapeColor="red";
 }
  for (var j= 50 ; j<400; j=j+50) {
    var cebola= createSprite(j, 100, 20, 20);
       cebola.shapeColor="white";
 }
  for (var j= 50 ; j<400; j=j+50) {
    var pimentão= createSprite(j, 150, 20, 20);
      pimentão.shapeColor="yellow";
  }
  for (var j= 50 ; j<400; j=j+50) {
    var berinjela= createSprite(j, 200, 20, 20);  
      berinjela.shapeColor="purple";
  }
  for (var j= 50 ; j<400; j=j+50) {
    var cenoura= createSprite(j, 250, 20, 20);
      cenoura.shapeColor="orange";
  }
}

function draw() {
  background("brown");
  drawSprites();
}
