import type { ArtistPreview } from '../lib/types';
import './ArtistPreviewImg.css';

interface ArtistPreviewImgProps {
  item: ArtistPreview;
}
export default function ArtistPreviewImg({ item }: ArtistPreviewImgProps) {
  return (
    <div className='preview-img'>
      <img src={item.src} alt='img' className='preview-image' />
    </div>
  );
}
