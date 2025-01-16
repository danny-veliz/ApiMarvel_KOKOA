import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import CharacterCard from './CardPersonaje';
import TextField from '@mui/material/TextField';
import axios from 'axios'; // Si decides usar Axios

const API_URL = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0aff2530e2c2cd94f0fc1093f4fcd66e&hash=4ccb9c80aa35e863fcd9e0897e049003'; // Reemplaza con tu endpoint
const API_KEY = 'your_public_api_key'; // Agrega tu clave de API si es necesario

interface ListaCardPersonajeProps {
  onSelectCharacter: (id: number) => void;
}

const CharacterList: React.FC<ListaCardPersonajeProps>  = ({ onSelectCharacter }) => {
  const [characters, setCharacters] = useState<any[]>([]); // Guardar personajes
  const [loading, setLoading] = useState<boolean>(true); // Indicador de carga
  const [filterdCharacters, setFilteredCharacters] = useState<any[]>([]);
  const [search, setSearch] = useState<String>("");

  // Función para obtener datos
  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL); // Si usas fetch, cámbialo
      const results= response.data.data.results
      setCharacters(results); // Ajusta según el formato del JSON
      setFilteredCharacters(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

const handleSearch= (event: React.ChangeEvent<HTMLInputElement>) => {

    const value= event.target.value.toLowerCase();
    setSearch(value);

    const filtered= characters.filter((character)=>
    character.name.toLowerCase().includes(value)
  );
  setFilteredCharacters(filtered);

};

if (loading) {
    return <CircularProgress />; // Muestra un spinner mientras carga
  }

  return (
    <div>
      {/* Campo de texto para buscar */}
      <TextField 
        id="outlined-basic" 
        
        label="Buscar personaje"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={handleSearch} // Llama a la función al cambiar el texto
      />
      <Grid container spacing={3} sx={{ mt: 5, ml: 3 }}>
        {filterdCharacters.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.id} onClick={() => onSelectCharacter(character.id)}>
            <CharacterCard
              nombre={character.name}
              descripcion={character.description || 'Descripción no disponible.'}
              imagen={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              urlInfoPersona={character.urls[0].url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CharacterList;


