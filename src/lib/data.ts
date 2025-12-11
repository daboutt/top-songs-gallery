import supernatural from '/supernatural.gif';
import supernatural2 from '/supernatural-2.gif';
import supernatural3 from '/supernatural-3.gif';
import ditto from '/ditto.gif';
import newjeans from '/newjeans.gif';
import ditto2 from '/ditto-2.gif';
import newjeans2 from '/newjeans-2.gif';
import ditto3 from '/ditto-3.gif';
import newjeans3 from '/newjeans-3.gif';
import type { ArtistPreview } from './types';

export const data: Record<string, ArtistPreview[]> = {
  supernatural: [
    {
      src: supernatural,
      offsetX: -400,
      offsetY: -190,
      rotate: -8,
    },
    {
      src: supernatural2,
      offsetX: 100,
      offsetY: -280,
      rotate: 3,
    },
    {
      src: supernatural3,
      offsetX: 400,
      offsetY: -100,
      rotate: 6,
    },
  ],
  ditto: [
    {
      src: ditto,
      offsetX: -300,
      offsetY: -100,
      rotate: -8,
    },
    {
      src: ditto2,
      offsetX: 0,
      offsetY: -190,
      rotate: 2,
    },
    {
      src: ditto3,
      offsetX: 300,
      offsetY: -90,
      rotate: 6,
    },
  ],
  newjeans: [
    {
      src: newjeans,
      offsetX: -380,
      offsetY: 0,
      rotate: 12,
    },
    {
      src: newjeans2,
      offsetX: 0,
      offsetY: -100,
      rotate: -6,
    },
    {
      src: newjeans3,
      offsetX: 390,
      offsetY: -40,
      rotate: -14,
    },
  ],
};
