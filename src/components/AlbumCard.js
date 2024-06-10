import React from 'react';
import { Card, CardHeader, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Link to={`/albums/${id}`}>
      <Card>
        <CardHeader
          title={
            <Typography variant="body1" noWrap sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {name}
            </Typography>
          }
          subheader={artist}
        />
        <CardMedia
          component="img"
          width="100%"
          image={imageUrl}
          alt={name}
        />
      </Card>
    </Link>
  );
};

export default AlbumCard;
