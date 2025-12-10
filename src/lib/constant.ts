import type { Artist } from './types';

export const ANIMATION_CONFIG = {
  initial: {
    scaleY: 1.15,
  },
  hover: {
    scaleY: 1.3,
    scaleX: 1.3,
  },
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
    mass: 0.8,
  },
} as const;

export const ARTIST_TITLES: Artist[] = [
  { id: 'supernatural', displayName: 'Supernatural' },
  { id: 'ditto', displayName: 'Ditto' },
  { id: 'newjeans', displayName: 'NewJeans' },
  { id: 'omg', displayName: 'Oh! My! Glory!' },
];
