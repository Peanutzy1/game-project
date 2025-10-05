import { vars } from "../vars.js"

export const utils = {
    coordsConverter: (x, y, mode = 0) => {// converts coords, 0 is from canvas to world
        if(!mode) {
            const wX = 
            (x - window.innerWidth / 2) 
            / vars.world.scale + vars.world.camera.x;

            const wY = (y - window.innerHeight / 2) 
            / vars.world.scale + vars.world.camera.y;

            return {x: wX, y: wY};
        } else {
            const cX = 
            (x - vars.world.camera.x) 
            * vars.world.scale + window.innerWidth / 2

            const cY = (y - vars.world.camera.y)
            * vars.world.scale + window.innerHeight / 2
             
            return {x: cX, y: cY};
        };
    }
};