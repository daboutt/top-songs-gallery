import newJeans1 from '/njz-1.gif';
import newJeans2 from '/njz-2.gif';
import newJeans3 from '/njz-3.gif';
import type { ArtistPreview } from './types';

export const data: Record<string, ArtistPreview[]> = {
  newJeans: [
    {
      src: newJeans1,
      offsetX: -400,
      offsetY: -190,
      rotate: -8,
    },
    {
      src: newJeans2,
      offsetX: 100,
      offsetY: -280,
      rotate: 3,
    },
    {
      src: newJeans3,
      offsetX: 400,
      offsetY: -100,
      rotate: 6,
    },
  ],
};
