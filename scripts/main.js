import { mouse } from "./listeners/mouse.js"
import * as ExListeners from "./listeners/other.js"
import { renderer } from "./render.js"

mouse.mouseInit();
ExListeners.resize.resizeInit();
renderer.drawLoop();