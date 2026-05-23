/**
 * Tests for NuclearPowerPlantWallpaper
 */
import { NuclearPowerPlantWallpaper } from '../../src/wallpapers/nuclear_powerplant.js';

describe('NuclearPowerPlantWallpaper', () => {
  let wallpaper;

  beforeEach(() => {
    // Setup test environment
    global.window = { innerWidth: 1024, innerHeight: 768 };
    global.document = {
      body: { appendChild: jest.fn() }
    };
    wallpaper = new NuclearPowerPlantWallpaper();
  });

  afterEach(() => {
    wallpaper.canvas.remove();
  });

  test('should initialize with canvas', () => {
    expect(wallpaper.canvas).toBeDefined();
    expect(wallpaper.ctx).toBeDefined();
  });

  test('should resize canvas on window resize', () => {
    wallpaper.resize();
    expect(wallpaper.width).toBe(1024);
    expect(wallpaper.height).toBe(768);
  });

  test('should draw sky gradient', () => {
    const mockCreateLinearGradient = jest.fn().mockReturnValue({
      addColorStop: jest.fn()
    });
    wallpaper.ctx.createLinearGradient = mockCreateLinearGradient;
    wallpaper.ctx.fillRect = jest.fn();
    wallpaper.draw();
    expect(mockCreateLinearGradient).toHaveBeenCalled();
  });

  test('should draw cooling towers', () => {
    wallpaper.ctx.fillRect = jest.fn();
    wallpaper.ctx.fillStyle = '#FFFFFF';
    wallpaper.draw();
    // Should draw at least one cooling tower
    expect(wallpaper.ctx.fillRect).toHaveBeenCalled();
  });

  test('should draw smokestacks', () => {
    wallpaper.ctx.fillRect = jest.fn();
    wallpaper.draw();
    expect(wallpaper.ctx.fillRect).toHaveBeenCalled();
  });

  test('should draw warning lights', () => {
    wallpaper.ctx.fillStyle = '#FF0000';
    wallpaper.ctx.beginPath = jest.fn();
    wallpaper.ctx.arc = jest.fn();
    wallpaper.ctx.fill = jest.fn();
    wallpaper.draw();
    expect(wallpaper.ctx.arc).toHaveBeenCalled();
  });

  test('should draw yellow triangle', () => {
    wallpaper.ctx.fillStyle = '#FFD700';
    wallpaper.ctx.beginPath = jest.fn();
    wallpaper.ctx.moveTo = jest.fn();
    wallpaper.ctx.lineTo = jest.fn();
    wallpaper.ctx.fill = jest.fn();
    wallpaper.draw();
    expect(wallpaper.ctx.moveTo).toHaveBeenCalled();
  });

  test('should draw ground', () => {
    wallpaper.ctx.fillStyle = '#228B22';
    wallpaper.ctx.fillRect = jest.fn();
    wallpaper.draw();
    expect(wallpaper.ctx.fillRect).toHaveBeenCalled();
  });

  test('should draw smoke animation', () => {
    const mockFill = jest.fn();
    const mockBeginPath = jest.fn();
    const mockArc = jest.fn();
    wallpaper.ctx.fillStyle = 'rgba(255, 255, 255, 0)';
    wallpaper.ctx.fillRect = jest.fn();
    wallpaper.ctx.beginPath = mockBeginPath;
    wallpaper.ctx.arc = mockArc;
    wallpaper.ctx.fill = mockFill;
    wallpaper.draw();
    expect(mockBeginPath).toHaveBeenCalled();
  });
});
