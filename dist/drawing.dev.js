"use strict";

var canvas = new fabric.Canvas(document.querySelector('canvas'));
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
/* ***
 * Initialise canvas size on window load
 * ***/


window.addEventListener('load', function () {
  resizeCanvas();
});
/* *************** 
 * Add undo/redo capability to fabric
 * ***************/

var isRedoing = false;
var h = [];
canvas.on('object:added', function () {
  if (!isRedoing) {
    h = [];
  }

  isRedoing = false;
});

function undo() {
  if (canvas._objects.length > 0) {
    h.push(canvas._objects.pop());
    canvas.renderAll();
  }
}

function redo() {
  if (h.length > 0) {
    isRedoing = true;
    canvas.add(h.pop());
  }
}