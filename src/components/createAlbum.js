import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AlbumForm from './AlbumForm';

function CreateAlbum() {
  const navigate = useNavigate();

  const handleCreateAlbum = async (newAlbumData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/Album`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAlbumData),
      });

      if (!response.ok) {
        throw new Error('Album aanmaken mislukt'); 
      }

      // Als het aanmaken succesvol is, ga terug naar de overzichtspagina
      navigate('/');
    } catch (error) {
      console.error('Error creating album:', error);
      // Hier kun je eventueel een foutmelding tonen aan de gebruiker
    }
  };

  return (
    <div>
      <Link to="/">Terug naar overzicht</Link>
      <h2>Nieuw Album Toevoegen</h2>
      <AlbumForm onSubmit={handleCreateAlbum} /> {/* Geef de functie door aan AlbumForm */}
    </div>
  );
}

export default CreateAlbum;
