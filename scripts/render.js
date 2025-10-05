import { vars } from "./vars.js"

export const renderer = {
  draw: () => {
    const ctx = vars.ctx;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
    ctx.scale(vars.world.scale, vars.world.scale);
    ctx.translate(vars.camera.x, vars.camera.y); 
    // TODO: draw trees and connectors
  },

  drawLoop: () => {
    renderer.draw();
    requestAnimationFrame(renderer.drawLoop);
  }
}
