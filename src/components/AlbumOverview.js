import React from 'react';
import { Grid, Button, Card, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import useAlbums from '../hooks/useAlbums';

function AlbumOverview() {
  const albums = useAlbums();

  return (
    <div>
      <h2>Album Overzicht</h2>

      <Card>
        <CardActionArea component={Link} to="/new"> 
          <Button variant="contained" color="primary">
            Nieuw Album Toevoegen
          </Button>
        </CardActionArea>
      </Card>

      {albums.length === 0 ? (
        <p>Albums worden geladen...</p>
      ) : (
        <Grid container spacing={2} style={{ marginTop: '1rem' }}> {/* Voeg wat ruimte toe boven de grid */}
          {albums.map((album) => (
            <Grid item xs={12} sm={6} md={4} key={album.id}>
              <AlbumCard {...album} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default AlbumOverview;
