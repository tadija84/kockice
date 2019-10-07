var canvas = new fabric.Canvas("theBigBox");
var indexOfRect = 0;
var clickCounter = 0;
for (var i = 0; i < 10; i += 1) {
  for (var j = 0; j < 10; j += 1) {
    addNewRect(i, j);
  }
}
function addNewRect(i, j) {
  indexOfRect++;
  var rect = new fabric.Rect({
    id: indexOfRect,
    fill: "#fbfcf2",
    width: 100,
    height: 100,
    stroke: "#eee",
    left: j * 100,
    top: i * 100
  });

  
 
  rect.on("selected", function() {
    if (clickCounter == 0) {
      clickingCons(rect);
    } else {
      if (rect.fill == "#d0d765") {     
        clickingCons(rect);
      } else {
        return
      }
    }
  });
  canvas.add(rect);
}

function clickingCons(rect) {  
  console.log("ahahaha")
  staGod();
  rect.set("fill", "#276b68");
  clickCounter++;
  

}
function staGod(){
  var probni=canvas.getObjects();
 
 probni[1].set("fill", "#d0d765")
 console.log(probni[1]);
}



function odabirPoID(x,y){
  var allBoxes=canvas.getObjects();
  var id=x*10+y;
  for(i=0;i<allBoxes.length;i++){
    if(allBoxes[i].id=id){
      return allBoxes[i]
    }
  }
}
