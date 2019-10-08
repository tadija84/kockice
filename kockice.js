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
    top: i * 100,
    i: i + 1,
    j: j + 1
  });
  rect.lockMovementX = true;
  rect.lockMovementY = true;
  rect.hasControls = false;

  rect.on("selected", function() {
    if (clickCounter == 0) {
      clickingCons(rect);
    } else {
      if (rect.fill == "#d0d765") {
        clickingCons(rect);
      } else {
        return;
      }
    }
  });
  canvas.add(rect);
}

function clickingCons(rect) {
  removeMarks();
  markingClickable(rect.i, rect.j);
  rect.set("fill", "#276b68");
  clickCounter++;
  if (clickCounter == 100) {
    alert("Cestitamo. Pobedili ste.");
  }
}
function removeMarks() {
  var allBoxes = canvas.getObjects();
  for (i = 0; i < allBoxes.length; i++) {
    if (allBoxes[i].fill == "#d0d765") {
      allBoxes[i].set("fill", "#fbfcf2");
    }
  }
}
function markingClickable(valY, valX) {
  makeItYellow(valY - 3, valX);
  makeItYellow(valY - 2, valX + 2);
  makeItYellow(valY, valX + 3);
  makeItYellow(valY + 2, valX + 2);
  makeItYellow(valY + 3, valX);
  makeItYellow(valY + 2, valX - 2);
  makeItYellow(valY, valX - 3);
  makeItYellow(valY - 2, valX - 2);
}
function makeItYellow(x, y) {
  var wantedRect = selectById(x, y);
  if (wantedRect !== undefined) {
    if (wantedRect.fill !== "#276b68") {
      wantedRect.set("fill", "#d0d765");
    }
  }
}

function selectById(x, y) {
  var allBoxes = canvas.getObjects();
  if (y > 0 && y <= 10) {
    var id = (x - 1) * 10 + y;
    for (i = 0; i < allBoxes.length; i++) {
      if (id == allBoxes[i].id) {
        return allBoxes[i];
      }
    }
  }
}
