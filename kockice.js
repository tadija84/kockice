var canvas = new fabric.Canvas("theBigBox");
var indexOfRect=0;
for (var i = 0; i < 10; i += 1) {
  for (var j = 0; j < 10; j += 1) {
    addNewRect(i,j);
  }
}
function addNewRect(i,j){
  indexOfRect++;
    var rect = new fabric.Rect({
id:indexOfRect,
      fill: "#fbfcf2",
      width: 100,
      height: 100,
      stroke: "#eee"
    });
    
    var text40 = new fabric.Text(indexOfRect.toString(), {
      fontSize: 40
    });
    var group = new fabric.Group([ rect, text40 ], {
      left: j*100,
      top: i*100,
    });
    group.on('selected', function() {
     rect.set("fill", "#276b68");
    });
    canvas.add(group);
}
