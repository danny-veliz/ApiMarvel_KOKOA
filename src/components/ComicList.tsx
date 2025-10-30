import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, Modal, Box, Typography, Button } from '@mui/material';
import ComicCard from './ComicCard';
import ButtonBanck from './ButtonBanck';
import axios from 'axios';
import Swal from 'sweetalert2';

const API_URL = 'https://gateway.marvel.com/v1/public/characters/1011334/comics?ts=1&apikey=0aff2530e2c2cd94f0fc1093f4fcd66e&hash=4ccb9c80aa35e863fcd9e0897e049003';
interface ComicListProps {
  characterId: number;
  onBack: () => void;
}
const ComicList: React.FC<ComicListProps> = ({ characterId, onBack }) => {
  const [comics, setComics] = useState<any[]>([]); // Para almacenar los cómics
  const [loading, setLoading] = useState<boolean>(true); // Indicador de carga
  const [selectedComic, setSelectedComic] = useState<any>(null); // Cómic seleccionado para el modal
  const [open, setOpen] = useState<boolean>(false); // Estado para el modal

  // Función para obtener datos
  const fetchComics = async () => {
    try {
      const response = await axios.get( `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=1&apikey=0aff2530e2c2cd94f0fc1093f4fcd66e&hash=4ccb9c80aa35e863fcd9e0897e049003`);
      const results = response.data.data.results;
      setComics(results); // Guardar los datos de los cómics
    } catch (error) {
      console.error('Error fetching comics:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComics();
  }, [characterId]);

  const handleOpen = (comic: any) => {
    setSelectedComic(comic);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedComic(null);
    setOpen(false);
  };

  if (loading) {
    return <CircularProgress />; // Mostrar un spinner mientras carga
  }

  return (
    <div className='divPaper'>
      {/*<ButtonBanck />*/}
      <Button variant="contained" onClick={onBack}>
        Volver a la lista de personajes
      </Button>
      <Grid container spacing={4}>
        {comics.map((comic) => (
          <Grid item xs={12} sm={6} md={4} key={comic.id}>
            <div onClick={() => {}} role="button" />;
              <ComicCard
                title={comic.title}
                format={comic.format || 'Formato no especificado'}
                synopsis={comic.textObjects[0]?.text.slice(0, 50) + '...' || 'Sin sinopsis disponible'}
                price={comic.prices[0]?.price || 'No disponible'}
                imageUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                comicurl={comic.urls[0]?.url}
              />
            </div>
          </Grid>
        ))}
      </Grid>

      {/* Modal para mostrar detalles */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          {selectedComic && (
            <>
              <Typography variant="h5" gutterBottom>
                {selectedComic.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Formato:</strong> {selectedComic.format || 'No especificado'}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong>Sinopsis:</strong> {selectedComic.textObjects[0]?.text || 'Sin sinopsis disponible'}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong>Precio:</strong> ${selectedComic.prices[0]?.price || 'No disponible'}
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => window.open(selectedComic.urls[0]?.url, '_blank')}
                >
                  Ver Cómic
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    Swal.fire({
                      title: "Comic Agregado!",
                      icon: "success",
                      draggable: true
                    });
                    handleClose();
                  }}
                >
                  Añadir a Favoritos
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ComicList;

