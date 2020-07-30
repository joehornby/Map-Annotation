"use strict";

var canvas = new fabric.Canvas(document.querySelector('canvas'));
canvas.backgroundColor = 'transparent';
canvas.isDrawingMode = false;
canvas.freeDrawingBrush.color = 'black';
canvas.freeDrawingBrush.width = 5;
canvas.renderAll();

function resizeCanvas() {
  canvas.setHeight(window.innerHeight);
  canvas.setWidth(window.innerWidth);
  canvas.renderAll();
}
/* ***
 * Initialise canvas size on window load
 * ***/


window.addEventListener('load', function (_) {
  resizeCanvas();
});
/* ***
 * Change canvas size on window resize
 * ***/

window.addEventListener('resize', function (_) {
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

function changeColour(index, colours) {
  canvas.freeDrawingBrush.color = colours[index];
  canvas.isDrawingMode = true;
  canvas.renderAll();
}