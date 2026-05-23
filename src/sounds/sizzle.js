/**
 * Sizzling sound effect using Web Audio API
 */
export class SizzleSound {
  constructor() {
    this.audioContext = null;
  }

  play() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Create noise buffer
    const bufferSize = this.audioContext.sampleRate * 2; // 2 seconds
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    // Generate white noise
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    // Create noise source
    const noise = this.audioContext.createBufferSource();
    noise.buffer = buffer;

    // Create filter to make it sound more like sizzling (bandpass)
    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    filter.Q.value = 1;

    // Create gain for volume envelope
    const gain = this.audioContext.createGain();
    gain.gain.setValueAtTime(0.5, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1.5);

    // Connect nodes
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioContext.destination);

    // Play
    noise.start();

    // Clean up
    noise.onended = () => {
      noise.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }
}
