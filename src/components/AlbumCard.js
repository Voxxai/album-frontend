import React from 'react';
import { Card, CardHeader, CardMedia, Avatar, } from '@mui/material';
import { Link } from 'react-router-dom';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Link to ={`/albums/${id}`}>
      <Card>
        <CardHeader
          avatar={<Avatar alt={artist} src={imageUrl} />}
          title={name}
          subheader={artist}
        />
        <CardMedia
          component="img"
          // make the image fit the card
          width="194"
          height="194"
          image={imageUrl}
          alt={name}
        />
      </Card>
    </Link>
  );
};

export default AlbumCard;
