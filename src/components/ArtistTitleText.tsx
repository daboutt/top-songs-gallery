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
      whileHover={{ scale: [1.8, 1.8] }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 10,
        mass: 0.8,
      }}
      onMouseEnter={(e) => onHover(e.currentTarget.dataset.text!)}
      onMouseLeave={onHoverEnd}
    >
      {artist.displayName}
    </motion.div>
  );
}
