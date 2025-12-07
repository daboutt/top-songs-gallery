import { useState } from 'react';
import './App.css';
import ArtistPreviewImg from './components/ArtistPreviewImg';
import ArtistTitleText from './components/ArtistTitleText';
import { ARTIST_TITLES } from './lib/constant';

function App() {
  const [hoveredText, setHoveredText] = useState('');

  return (
    <div className='app'>
      <div className='artist-container'>
        {ARTIST_TITLES.map((artist) => (
          <ArtistTitleText
            key={artist.id}
            name={artist.name}
            onHover={(name) => setHoveredText(name)}
          />
        ))}
      </div>
      <ArtistPreviewImg />
    </div>
  );
}

export default App;
