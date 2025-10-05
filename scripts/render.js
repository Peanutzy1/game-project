import { vars } from "./vars.js"

export const renderer = {
    drawAll: () => {
        const world = vars.world
        const ctx = vars.ctx
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.translate(window.innerWidth / 2, window.innerHeight / 2)
        ctx.translate(world.camera.x, world.camera.y);
        ctx.scale(world.scale, world.scale);
        ctx.beginPath();
        ctx.fillStyle = "#00f";
        ctx.fillRect(0, 0, 400, 300);
    }
}
