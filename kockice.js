var canvas = new fabric.Canvas("theBigBox");

for (var i = 0; i < 1000; i += 100) {
  for (var j = 0; j < 1000; j += 100) {
    addNewRect(i,j);
  }
}
function addNewRect(i,j){
    var rect = new fabric.Rect({
      left: j,
      top: i,
      fill: "#fbfcf2",
      width: 100,
      height: 100,
      stroke: "#eee"
    });
    canvas.add(rect);
}