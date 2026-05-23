/**
 * Tests for Wallpaper base class
 */
import { Wallpaper } from '../../src/utils/wallpaper.js';

describe('Wallpaper', () => {
  let wallpaper;

  beforeEach(() => {
    // Setup test environment
    global.window = { innerWidth: 1024, innerHeight: 768 };
    global.document = {
      body: { appendChild: jest.fn() }
    };
    wallpaper = new Wallpaper();
  });

  afterEach(() => {
    wallpaper.canvas.remove();
  });

  test('should create canvas element', () => {
    expect(wallpaper.canvas).toBeDefined();
    expect(wallpaper.canvas.tagName).toBe('CANVAS');
  });

  test('should create 2d context', () => {
    expect(wallpaper.ctx).toBeDefined();
    expect(wallpaper.ctx.fillStyle).toBeDefined();
  });

  test('should resize canvas on initialization', () => {
    expect(wallpaper.width).toBe(1024);
    expect(wallpaper.height).toBe(768);
  });

  test('should have resize method', () => {
    expect(typeof wallpaper.resize).toBe('function');
  });

  test('should have draw method', () => {
    expect(typeof wallpaper.draw).toBe('function');
  });

  test('should have animate method', () => {
    expect(typeof wallpaper.animate).toBe('function');
  });
});
