'use strict';
import { vars } from './vars.js';

export const utils = {
  coordsConverter: (x, y, mode = 0) => { // converts coords, 0 is from canvas to world
    if (!mode) {
      const wX = (x - window.innerWidth / 2) 
        / vars.world.scale + vars.world.camera.x;

      const wY = (y - window.innerHeight / 2) 
        / vars.world.scale + vars.world.camera.y;

      return { x: wX, y: wY };
    } else {
      const cX = (x - vars.world.camera.x) 
        * vars.world.scale + window.innerWidth / 2;

      const cY = (y - vars.world.camera.y)
        * vars.world.scale + window.innerHeight / 2;
             
      return { x: cX, y: cY };
    }
  },

  inRect: (x, y, w, h, pX, pY) => {
    return pX >= x - w / 2 &&
      pX <= x + w / 2 &&
      pY >= y - h / 2 &&
      pY <= y + h / 2;
  },
  
  inViewport: (x, y) => {
    return utils.inRect(
      vars.camera.x,
      vars.camera.y,
      window.innerWidth, 
      window.innerHeight, 
      x, 
      y
    );
  },

  makeRenderPoints: (x, y, w, h, pad) => {
    return [
      { x: x + w / 2 + pad, y: y + h / 2 + pad },
      { x: x - w / 2 - pad, y: y + h / 2 + pad },
      { x: x - w / 2 - pad, y: y - h / 2 - pad },
      { x: x + w / 2 + pad, y: y - h / 2 - pad },
    ];
  },

  rectInViewport: (x, y, w, h, pad) => {
    const rectLeft = x - w / 2 - pad;
    const rectRight = x + w / 2 + pad;
    const rectTop = y - h / 2 - pad;
    const rectBottom = y + h / 2 + pad;
    
    const viewLeft = vars.camera.x - window.innerWidth / 2;
    const viewRight = vars.camera.x + window.innerWidth / 2;
    const viewTop = vars.camera.y - window.innerHeight / 2;
    const viewBottom = vars.camera.y + window.innerHeight / 2;
    
    return rectRight >= viewLeft &&
      rectLeft <= viewRight &&
      rectBottom >= viewTop &&
      rectTop <= viewBottom;
  }
};

