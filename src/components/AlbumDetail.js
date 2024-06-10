import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Typography, CircularProgress } from '@mui/material';
import AlbumForm from './AlbumForm';
import useAlbum from '../hooks/useAlbum';

function AlbumDetail() {
  const { id } = useParams();
  const { album, isLoading, error } = useAlbum(id);
  const navigate = useNavigate();

  const handleAlbumSubmit = async (updatedAlbum) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/Album/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAlbum),
      });

      if (response.ok) {
        // Album succesvol bijgewerkt
        navigate('/'); // Terug naar het overzicht
      } else {
        throw new Error('Album bijwerken mislukt');
      }
    } catch (error) {
      console.error('Error updating album:', error);
    }
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="h6">Er is een fout opgetreden: {error.message}</Typography>;
  }

  return (
    <div>
      <Link to="/">Terug naar overzicht</Link>
      <Typography variant="h4">{album.name}</Typography>
      <Typography variant="subtitle1">{album.artist}</Typography>

      {album.imageUrl && (
        <img
          src={album.imageUrl}
          alt={album.name}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}

      <AlbumForm album={album} onSubmit={handleAlbumSubmit} />
    </div>
  );
}

export default AlbumDetail;
