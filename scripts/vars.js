export const vars = {
  canvas: document.getElementById('gameCanvas'),
  ctx: null,
  mouse: {x: 0, y: 0},
  camera: {x: 0, y: 0},
  world: {
    mouse: {x: 0, y: 0},
    scale: 1,
    background: "#402060",
    areas: new Map(),
    interConnectors: new Map(),
  }
};
vars.ctx = vars.canvas.getContext("2d");
vars.canvas.style.background = vars.world.background;