import { useState } from 'react'
//import viteLogo from '/vite.svg'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// Grid version 2
import Grid from '@mui/material/Grid2';
import Navbar from "./components/Navbar";
import CardPersonaje from "./components/CardPersonaje"
import ListaCardPersonaje from "./components/ListaCardPersonaje"
import ComicCard from './components/ComicCard';
import ComicList  from './components/ComicList';

import './App.css'

function App() {
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(null);
  const cleanSynopsis = (rawText: string): string => {
    // Reemplaza etiquetas HTML
    const textWithoutTags = rawText.replace(/<\/?[^>]+(>|$)/g, "");

    // Decodifica caracteres HTML
    const parser = new DOMParser();
    const decodedText = parser.parseFromString(textWithoutTags, "text/html").documentElement.textContent;

    return decodedText || "";
  };
  return (
    <>
      <Navbar />
      {/* 
      <ComicCard
        title="Avengers: The Initiative (2007) #19"
        format="Comic"
        synopsis={cleanSynopsis(`SECRET INVASION Tie-In!\r\u003Cbr\u003E\"V-S DAY\"\r\u003Cbr\u003EIt's been leading to this since the Hank Pym Skrull first came up with the idea for a Fifty State Initiative.  This is the final assault in the Secret Invasion, a nation-wide plan that will test the limits of 3-D MAN'S superhuman militia, THE KILL KREW ARMY! Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that 
          decide the fate of the planet and the future of the Initiative program.  Win or lose, there's no turning back.  After today, everything changes.\r\u003Cbr\u003ERated T+ ...$2.99\r\u003Cbr\u003E`)}
        price="2.99"
        imageUrl= "http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806.jpg"
      />
      <ListaCardPersonaje/>    <ComicList/>         */}
     {selectedCharacterId === null ? (
        <ListaCardPersonaje onSelectCharacter={(id: number) => setSelectedCharacterId(id)} />
      ) : (
        <ComicList characterId={selectedCharacterId} onBack={() => setSelectedCharacterId(null)} />
      )}
   

    </>

  )
}

export default App
