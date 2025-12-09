import type { ArtistPreview } from '../lib/types';
import { motion } from 'framer-motion';
import './ArtistPreviewImg.css';

interface ArtistPreviewImgProps {
  item: ArtistPreview;
  index: number;
  mousePosition: { x: number; y: number };
}
export default function ArtistPreviewImg({
  item,
  index,
  mousePosition,
}: ArtistPreviewImgProps) {
  return (
    <motion.div
      className='preview-container'
      initial={{
        scale: 0,
        opacity: 0,
        x: item.offsetX,
        y: item.offsetY,
        rotate: item.rotate,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        x: item.offsetX + (index === 1 ? mousePosition.x / 2 : mousePosition.x),
        y: item.offsetY + mousePosition.y,
        rotate: item.rotate,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 10,
        mass: 0.6,
      }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <img src={item.src} alt='img' className='preview-image' />
    </motion.div>
  );
}
