import { describe, it, expect } from 'vitest';
import { geometry } from './image';
describe('image sizing', () => {
  it('keeps originals small and preserves ratio', () => {
    expect(geometry(800, 600, 1920, 'original')).toMatchObject({
      width: 800,
      height: 600,
    });
    expect(geometry(4000, 3000, 1200, 'original')).toMatchObject({
      width: 1200,
      height: 900,
    });
  });
  it('centers a square crop without distortion', () => {
    expect(geometry(1800, 1200, 800, 'square')).toEqual({
      sx: 300,
      sy: 0,
      sw: 1200,
      sh: 1200,
      width: 800,
      height: 800,
    });
  });
});
