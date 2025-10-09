'use strict';
import { utils } from '../utils.js';
import { vars } from '../vars.js';

export const tree = class {
  constructor(name, fill, stroke, w, h) {
    this.name = name;
    this.nodes = new Map();
    this.links = new Map();
    this.fill = fill;
    this.stroke = stroke;
    this.w = w;
    this.h = h;
  }

  addNode(node) {
    node.tree = this;
    this.nodes.set(node.id, node);
  }

  addLink(link) {
    this.links.set(link.id, link);
  }

  draw() {
    this.nodes.forEach(e => e.draw());
    this.links.forEach(e => e.draw());
  }
};
  
export const node = class {
  constructor(
    tree, id, description, x, y,
    childrenIDs, action,
    starter = false
  ) {
    this.tree = tree;

    this.id = id;
    this.description = description;

    this.x = x;
    this.y = y;
    this.childrenIDs = childrenIDs;

    this.action = action;
    this.starter = starter;

    this.discovered = false;
    this.unlocked = false;

    this.multiplier = 1;
  }

  draw() {
    if (utils.rectInViewport(this.x, this.y, this.tree.w, this.tree.h, 50)) {
      console.log('drawing button!');
      const ctx = vars.ctx;
      ctx.beginPath();
      ctx.fillStyle = this.tree.fill;
      ctx.strokeStyle = this.tree.stroke;
      ctx.lineWidth = 4;
      ctx.strokeRect(this.x, this.y, this.tree.w, this.tree.h);
      ctx.fillRect(this.x, this.y, this.tree.w, this.tree.h);
    }
  }

  discover() {
    this.discovered = true;
  }

  unlock() {
    if (this.discovered) {
      this.unlocked = true;
    }
  }
  
  reset() {
    this.discover = false;
    this.unlocked = false;
  }

  doAction() {
    if (this.starter) {
      vars.world.pointGain = 1;
    } else if (typeof this.action === 'function') {
      this.multiplier = this.action();
    } else if (typeof this.action === 'number') {
      this.multiplier = this.action;
    } else {
      this.multiplier = 1;
    }
  }

  get children() {
    return this.childrenIDs.map(id => this.tree.nodes.get(id));
  }
};
