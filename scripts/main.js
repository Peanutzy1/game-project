import { vars } from "./vars.js"
import * as ExListeners from "./listeners/other.js"
import { renderer } from "./render.js"

vars.world.camera.x = 100
vars.world.camera.y = 200
ExListeners.resize.resizeInit();
renderer.drawAll();