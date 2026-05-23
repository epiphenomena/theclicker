/**
 * Nuclear Power Plant Wallpaper
 * Inspired by The Simpsons
 */
import { Wallpaper } from '../utils/wallpaper.js';

export class NuclearPowerPlantWallpaper extends Wallpaper {
  constructor() {
    super();
  }

  draw() {
    const { ctx, width, height } = this;

    // Sky background
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#87CEEB');
    gradient.addColorStop(1, '#E0F7FA');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Distant hills
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(width * 0.2, height * 0.6, width * 0.4, height * 0.15, 0, Math.PI, 0);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(width * 0.8, height * 0.65, width * 0.4, height * 0.15, 0, Math.PI, 0);
    ctx.fill();

    // Power plant building
    const buildingX = width * 0.5;
    const buildingY = height * 0.6;
    const buildingWidth = width * 0.3;
    const buildingHeight = height * 0.25;

    // Main building - white with gray base
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(buildingX - buildingWidth / 2, buildingY - buildingHeight, buildingWidth, buildingHeight);

    // Base
    ctx.fillStyle = '#696969';
    ctx.fillRect(buildingX - buildingWidth / 2, buildingY, buildingWidth, height * 0.1);

    // Cooling towers
    const towerWidth = buildingWidth * 0.25;
    const towerHeight = height * 0.2;

    // Left cooling tower
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(buildingX - buildingWidth * 0.4, buildingY - towerHeight, towerWidth, towerHeight);
    // Left tower base
    ctx.fillStyle = '#696969';
    ctx.fillRect(buildingX - buildingWidth * 0.4, buildingY, towerWidth, height * 0.05);

    // Right cooling tower
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(buildingX + buildingWidth * 0.15, buildingY - towerHeight, towerWidth, towerHeight);
    // Right tower base
    ctx.fillStyle = '#696969';
    ctx.fillRect(buildingX + buildingWidth * 0.15, buildingY, towerWidth, height * 0.05);

    // Smokestacks
    ctx.fillStyle = '#333333';
    const smokestackWidth = buildingWidth * 0.1;
    const smokestackHeight = height * 0.3;

    // Left smokestack
    ctx.fillRect(buildingX - buildingWidth * 0.35, buildingY - towerHeight - smokestackHeight, smokestackWidth, smokestackHeight);
    // Right smokestack
    ctx.fillRect(buildingX + buildingWidth * 0.1, buildingY - towerHeight - smokestackHeight, smokestackWidth, smokestackHeight);

    // Smoke from stacks
    this.drawSmoke(buildingX, buildingY, towerHeight, smokestackHeight, buildingWidth);

    // Red warning lights on towers
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(buildingX - buildingWidth * 0.4 + towerWidth / 2, buildingY - towerHeight + 20, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(buildingX + buildingWidth * 0.15 + towerWidth / 2, buildingY - towerHeight + 20, 8, 0, Math.PI * 2);
    ctx.fill();

    // Yellow triangle on building
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.moveTo(buildingX, buildingY - buildingHeight + 20);
    ctx.lineTo(buildingX - 30, buildingY - buildingHeight + 60);
    ctx.lineTo(buildingX + 30, buildingY - buildingHeight + 60);
    ctx.fill();

    // "Nuclear Power Plant" text
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Nuclear Power Plant', buildingX, buildingY + height * 0.08);

    // Sign
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(buildingX - 80, buildingY - 10, 160, 30);
    ctx.fillStyle = '#0000FF';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Nuclear Power Plant', buildingX, buildingY + 12);

    // Ground
    ctx.fillStyle = '#228B22';
    ctx.fillRect(0, buildingY + height * 0.1, width, height * 0.3);
  }

  drawSmoke(buildingX, buildingY, towerHeight, smokestackHeight, buildingWidth) {
    const time = Date.now() * 0.002;
    for (let i = 0; i < 3; i++) {
      const smokeY = (buildingY - towerHeight - smokestackHeight) - (i * 30 + Math.sin(time + i) * 20);
      const smokeOpacity = Math.max(0, 1 - i * 0.3);

      this.ctx.fillStyle = `rgba(255, 255, 255, ${smokeOpacity})`;
      this.ctx.beginPath();
      this.ctx.arc(buildingX - buildingWidth * 0.3, smokeY, 30 + i * 10, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.arc(buildingX + buildingWidth * 0.15, smokeY, 30 + i * 10, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
}
