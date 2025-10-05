import { vars } from "../vars.js";

export const mouse = {
  mouseInit: () => {
    let mouseDown = false;
    let lastX = 0;
    let lastY = 0;
    window.addEventListener("mousemove", e => {
      vars.mouse.x = e.offsetX;
      vars.mouse.y = e.offsetY;
      if (mouseDown) {
        vars.camera.x += ( e.clientX - lastX ) / vars.world.scale;
        vars.camera.y += ( e.clientY - lastY ) / vars.world.scale;
        lastX = e.clientX;
        lastY = e.clientY;
      }
    });

    window.addEventListener("mousedown", e => {
      mouseDown = true
      lastX = e.clientX;
      lastY = e.clientY;
      //TODO: initialize button searching
    }),

    window.addEventListener("mouseup", () => {
      mouseDown = false;
    }),

    vars.canvas.addEventListener("wheel", e => {
      e.preventDefault();
      const zoomFactor = 1.1;
      if (e.deltaY < 0) vars.world.scale *= zoomFactor;
      else vars.world.scale /= zoomFactor;            
    }, { passive: false });
  }
}