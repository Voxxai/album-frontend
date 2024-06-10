import React from 'react';
import { Grid } from '@mui/material';
import AlbumCard from './AlbumCard';
import useAlbums from '../hooks/useAlbums'; 

function AlbumOverview() {
  const albums = useAlbums();

  return (
    <div>
      <h2>Album Overzicht</h2>

      {albums.length === 0 ? ( 
        <p>Albums worden geladen...</p>
      ) : (
        <Grid container spacing={2}>
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
