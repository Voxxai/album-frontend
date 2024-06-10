import { useEffect, useState } from "react";

const useAlbums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const endpoint = `${process.env.REACT_APP_API_URL}/Album`;
    
    fetch(endpoint, {  
      method: 'GET'   
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Netwerk response was niet ok.');
        }
        return response.json();
      })
      .then((data) => {
        setAlbums(data);
      })
      .catch((error) => {
        console.error('Er is een fout opgetreden bij het ophalen van de albums:', error);
      });
  }, []);

  return albums;
};

export default useAlbums;
