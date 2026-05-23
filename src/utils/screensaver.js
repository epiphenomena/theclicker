/**
 * Base ScreenSaver class for all screensavers
 */
export class ScreenSaver {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.width = 0;
    this.height = 0;

    this.resize = this.resize.bind(this);
    this.draw = this.draw.bind(this);

    window.addEventListener('resize', this.resize);
    this.resize();

    // Start animation loop
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  draw() {
    // Override in subclasses
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }

  handleClick(x, y) {
    // Override in subclasses
    return false;
  }
}
