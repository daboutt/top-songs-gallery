import type { Artist } from '../lib/types';
import './ArtistTitleText.css';
import { motion } from 'motion/react';

interface ArtistTitleTextProps {
  artist: Artist;
  onHover: (name: string) => void;
}

export default function ArtistTitleText({
  artist,
  onHover,
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
    >
      {artist.displayName}
    </motion.div>
  );
}
