import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Typography, CircularProgress} from '@mui/material';
import AlbumForm from './AlbumForm';
import useAlbum from '../hooks/useAlbum';

function AlbumDetail() {
  const { id } = useParams();
  const { album, isLoading, error } = useAlbum(id);
  const navigate = useNavigate();

  const handleUpdateAlbum = async (updatedAlbum) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/Album/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAlbum),
      });

      if (response.ok) {
        navigate(`/`); // Herlaad de pagina na succesvolle update
      } else {
        throw new Error('Album bijwerken mislukt');
      }
    } catch (error) {
      console.error('Error updating album:', error);
      // Toon eventueel een foutmelding aan de gebruiker
    }
  };

  const handleDeleteAlbum = async (albumId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/Album/${albumId}`, { // Verwijder "delete/" uit de URL
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log("Album deleted successfully!"); // Log on success
        navigate('/'); 
      } else {
        console.error("Delete request failed:", response.statusText); // Log on error
        throw new Error('Album verwijderen mislukt');
      }
    } catch (error) {
      console.error('Error deleting album:', error);
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

      {album.imageUrl && <img src={album.imageUrl} alt={album.name} />}

      <AlbumForm 
        album={album} 
        onSubmit={handleUpdateAlbum} 
        onRemove={() => handleDeleteAlbum(album.id)}
/>
    </div>
  );
}

export default AlbumDetail;
