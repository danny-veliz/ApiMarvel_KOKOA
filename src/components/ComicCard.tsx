import React from 'react';
import styled from 'styled-components';

// Tipos para las props del componente
interface ComicCardProps {
  title: string;
  format: string;
  synopsis: string;
  price: string;
  imageUrl: string;
  comicurl: string;
}

// Contenedor de la tarjeta
const CardContainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 95%;
  height: 300px;
  margin-top: 20px;
`;

// Contenedor del texto (izquierda)
const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;
`;

// Contenedor de la imagen (derecha)
const ImageContainer = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: 300px;
    border-radius: 5px;
  }
`;

// Título
const Title = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-top:100px;
`;

// Formato, sinopsis y precio
const InfoText = styled.p`
  font-size: 1em;
  color: #555;
  margin: 20px 0;
`;

// Componente funcional con TypeScript
const ComicCard: React.FC<ComicCardProps> = ({ title, format, synopsis, price, imageUrl, comicurl }) => {
  return (
    <CardContainer className='ComicImage'>{/*onClick={() => window.open(`${comicurl}`, "_blank")*/}
      <TextContainer>
        <Title style={{ textAlign: 'center' }}>{title}</Title>
        {/*<InfoText><strong>Synopsis:</strong> {synopsis}</InfoText>
        <InfoText><strong>Precio:</strong> ${price}</InfoText>*/}
      </TextContainer>
      <ImageContainer>
        <img src={imageUrl} alt={title} />
      </ImageContainer>
    </CardContainer>
  );
};

export default ComicCard;