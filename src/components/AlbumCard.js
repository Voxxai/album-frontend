import React from 'react';
import { Card, CardHeader, CardMedia, Avatar, } from '@mui/material';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar alt={artist} src={imageUrl} />}
        title={name}
        subheader={artist}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={name}
      />
    </Card>
  );
};

export default AlbumCard;
