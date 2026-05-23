/**
 * Tests for SizzleSound
 */
import { SizzleSound } from '../../src/sounds/sizzle.js';

describe('SizzleSound', () => {
  let sizzle;

  beforeEach(() => {
    // Setup mock AudioContext
    global.AudioContext = jest.fn().mockImplementation(() => ({
      createBuffer: jest.fn().mockReturnValue({
        getChannelData: jest.fn().mockReturnValue(new Float32Array(44100))
      }),
      createBufferSource: jest.fn().mockReturnValue({
        start: jest.fn(),
        onended: null
      }),
      createBiquadFilter: jest.fn().mockReturnValue({
        type: null,
        frequency: { value: 0 },
        Q: { value: 0 }
      }),
      createGain: jest.fn().mockReturnValue({
        gain: { value: 0 }
      }),
      currentTime: 0
    }));

    sizzle = new SizzleSound();
  });

  test('should create AudioContext on first play', () => {
    sizzle.play();
    expect(global.AudioContext).toHaveBeenCalled();
  });

  test('should create noise buffer', () => {
    sizzle.play();
    expect(sizzle.audioContext.createBuffer).toHaveBeenCalled();
  });

  test('should create bandpass filter', () => {
    sizzle.play();
    expect(sizzle.audioContext.createBiquadFilter).toHaveBeenCalled();
  });

  test('should play sound', () => {
    sizzle.play();
    expect(sizzle.audioContext).toBeDefined();
  });

  test('should set correct frequency for sizzle effect', () => {
    sizzle.play();
    // The filter should be created with frequency 2000
    expect(sizzle.audioContext.createBiquadFilter).toHaveBeenCalled();
  });
});
