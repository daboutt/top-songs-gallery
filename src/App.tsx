import { useState } from 'react';
import './App.css';
import ArtistPreviewImg from './components/ArtistPreviewImg';
import ArtistTitleText from './components/ArtistTitleText';
import { ARTIST_TITLES } from './lib/constant';
import { data } from './lib/data';

function App() {
  const [hoveredText, setHoveredText] = useState('');

  return (
    <div className='app'>
      <div className='artist-container'>
        {ARTIST_TITLES.map((artist) => (
          <ArtistTitleText
            artist={artist}
            onHover={(name) => setHoveredText(name)}
            onHoverEnd={() => setHoveredText('')}
          />
        ))}
      </div>
      {hoveredText &&
        data[hoveredText]?.map((value, index) => (
          <ArtistPreviewImg key={index} item={value} />
        ))}
    </div>
  );
}

export default App;
