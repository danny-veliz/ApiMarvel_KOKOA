import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface DescriPersonajeMarvel{
    nombre?: String;
    imagen?: String;
    descripcion?: String;
    urlInfoPersona?:String
   

}

export default function ActionAreaCard(personajesM: DescriPersonajeMarvel) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea >  {/*onClick={() => window.open(`${personajesM.urlInfoPersona}`, "_blank")}*/}
        <CardMedia
          component="img"
          height= "auto"
          src= {personajesM.imagen+""} //"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {personajesM.nombre}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {personajesM.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}