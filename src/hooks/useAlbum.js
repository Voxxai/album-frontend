import { useEffect, useState } from 'react';

const useAlbum = (id) => {
  const [album, setAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpoint = `${process.env.REACT_APP_API_URL}/Album/${id}`;

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Netwerk response was niet ok.');
        }
        return response.json();
      })
      .then((data) => {
        setAlbum(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Er is een fout opgetreden bij het ophalen van het album:', error);
        setError(error);
        setIsLoading(false);
      });
  }, [id]); // Voeg id toe aan de dependency array

  return { album, isLoading, error };
};

export default useAlbum;
