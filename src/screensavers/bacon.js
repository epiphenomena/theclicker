/**
 * Bacon screensaver - demonstrates a simple clickable bacon element
 */
import { ScreenSaver } from '../utils/screensaver.js';

export class BaconScreenSaver extends ScreenSaver {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.radius = 50;
  }

  resize() {
    super.resize();
    this.x = this.width / 2;
    this.y = this.height / 2;
  }

  draw() {
    // Clear screen
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Draw bacon
    this.ctx.fillStyle = '#8B4513';
    this.ctx.fillRect(this.x - this.radius, this.y - this.radius / 2, this.radius * 2, this.radius);

    // Draw bacon stripes
    this.ctx.fillStyle = '#D2691E';
    for (let i = 0; i < 5; i++) {
      this.ctx.fillRect(this.x - this.radius + i * 20, this.y - this.radius / 2, 5, this.radius);
    }
  }

  handleClick(x, y) {
    const dist = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
    return dist <= this.radius;
  }
}
