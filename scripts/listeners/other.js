import { vars } from "../vars.js";

export const resize = {
    resizeCanvas: () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        vars.canvas.style.width = width + "px";
        vars.canvas.style.height = height + "px";
        vars.canvas.width = width;
        vars.canvas.height = height;
    },

    resizeInit: () => {
        resize.resizeCanvas();
        addEventListener("resize", () => {
            resize.resizeCanvas();
        });
    },
}