/**
 * Main entry point for the application
 */
import { NuclearPowerPlantWallpaper } from './wallpapers/nuclear_powerplant.js';
import { SizzleSound } from './sounds/sizzle.js';

// Export for global access
window.SizzleSound = SizzleSound;

// Initialize based on URL parameter or default
const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode') || 'screensaver';

if (mode === 'wallpaper') {
  new NuclearPowerPlantWallpaper();
}
