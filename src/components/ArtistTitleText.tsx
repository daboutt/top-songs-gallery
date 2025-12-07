import './ArtistTitleText.css';
import { motion } from 'motion/react';

interface ArtistTitleTextProps {
  name: string;
  onHover: (name: string) => void;
}

export default function ArtistTitleText({
  name,
  onHover,
}: ArtistTitleTextProps) {
  return (
    <motion.div
      data-text={name}
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
      {name}
    </motion.div>
  );
}
