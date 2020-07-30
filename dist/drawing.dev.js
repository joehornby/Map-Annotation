"use strict";

window.addEventListener('load', function () {
  var canvas = new fabric.Canvas('canvas');
  window.addEventListener('resize', resizeCanvas, false);
  canvas.backgroundColor = 'transparent';
  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.color = 'red';
  canvas.freeDrawingBrush.width = 3;
  canvas.renderAll();

  function resizeCanvas() {
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    canvas.renderAll();
  }

  resizeCanvas();
});

var undo = function undo() {
  var lastItemIndex = this.canvas.getObjects().length - 1;
  var item = canvas.item(lastItemIndex);

  if (item.get('type') === 'path') {
    this.canvas.remove(item);
    this.canvas.renderAll();
  }
};