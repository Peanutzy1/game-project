"use strict"
import { tree, node } from "./gameplay/objects"
export const vars = {
  canvas: document.getElementById('gameCanvas'),
  ctx: null,
  mouse: {x: 0, y: 0},
  camera: {x: 0, y: 0},
  world: {
    mouse: {x: 0, y: 0},
    scale: 1,
    background: "#404040",
    gainPoints: false,
  },

  trees: {
    pointTree: {
      construct: new tree(
        "pointTree",
        "#808080",
        "#ffffff"
      ),

      buttons: {}
    }
  },
};
vars.ctx = vars.canvas.getContext("2d");
vars.canvas.style.background = vars.world.background;


vars.trees.pointTree.construct.addNode(
  new node(
    vars.trees.pointTree.construct,
    "start",
    "start",
    0, 
    0, 
    [], 
    1, 
    true
  )
);