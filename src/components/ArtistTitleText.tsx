import { ANIMATION_CONFIG } from '../lib/constant';
import type { Artist } from '../lib/types';
import './ArtistTitleText.css';
import { motion } from 'motion/react';

interface ArtistTitleTextProps {
  artist: Artist;
  onHover: (name: string) => void;
  onHoverEnd: () => void;
}

export default function ArtistTitleText({
  artist,
  onHover,
  onHoverEnd,
}: ArtistTitleTextProps) {
  return (
    <motion.div
      data-text={artist.id}
      className='artist'
      animate={ANIMATION_CONFIG.initial}
      whileHover={{
        ...ANIMATION_CONFIG.hover,
        textShadow: '0px 0px 8px rgba(255, 255, 255, 0.8)',
      }}
      transition={ANIMATION_CONFIG.transition}
      onMouseEnter={(e) => onHover(e.currentTarget.dataset.text!)}
      onMouseLeave={onHoverEnd}
    >
      {artist.displayName}
    </motion.div>
  );
}
