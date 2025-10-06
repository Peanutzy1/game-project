"use strict"
import { mouse } from "./listeners/mouse.js"
import * as ExListeners from "./listeners/other.js"
import { renderer } from "./render.js"
import { utils } from "./utils.js"
import { tree, node } from "./gameplay/objects.js"
import { points } from "./gameplay/points.js"
import { vars } from "./vars.js"

function start() {
  requestAnimationFrame(gameLoop);
  mouse.mouseInit();
  ExListeners.resize.resizeInit();
}

let lastTick = performance.now();
function gameLoop(tick) {
  const deltaTime = tick - lastTick;
  lastTick = tick;
  
  points.update();
  renderer.draw();
  renderer.drawTree(vars.trees.pointTree.construct);

  requestAnimationFrame(gameLoop);
}

start();