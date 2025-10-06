"use strict"
import { vars } from "../vars.js"

export const points = {
  update: (deltaTime) => {
    points.point.update(deltaTime);
  },

  point: {
    total: 0,
    mult: 0,
    add: (n) => { points.point.total += n },
    update: (deltaTime) => {
      if (vars.world.gainPoints) {
        this.add(deltaTime * points.point.mult)
      }
    }
  }
}
