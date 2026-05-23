/**
 * Tests for ScreenSaver base class
 */
import { ScreenSaver } from '../../src/utils/screensaver.js';

describe('ScreenSaver', () => {
  let screensaver;

  beforeEach(() => {
    // Setup test environment
    global.window = { innerWidth: 800, innerHeight: 600 };
    global.document = {
      body: { appendChild: jest.fn() }
    };
    screensaver = new ScreenSaver();
  });

  afterEach(() => {
    screensaver.canvas.remove();
  });

  test('should create canvas element', () => {
    expect(screensaver.canvas).toBeDefined();
    expect(screensaver.canvas.tagName).toBe('CANVAS');
  });

  test('should create 2d context', () => {
    expect(screensaver.ctx).toBeDefined();
    expect(screensaver.ctx.fillStyle).toBeDefined();
  });

  test('should resize canvas on initialization', () => {
    expect(screensaver.width).toBe(800);
    expect(screensaver.height).toBe(600);
  });

  test('should have resize method', () => {
    expect(typeof screensaver.resize).toBe('function');
  });

  test('should have draw method', () => {
    expect(typeof screensaver.draw).toBe('function');
  });

  test('should have animate method', () => {
    expect(typeof screensaver.animate).toBe('function');
  });

  test('should have handleClick method', () => {
    expect(typeof screensaver.handleClick).toBe('function');
  });

  test('should return false for handleClick by default', () => {
    const result = screensaver.handleClick(100, 100);
    expect(result).toBe(false);
  });
});
