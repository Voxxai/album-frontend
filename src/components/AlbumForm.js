import React from 'react';
import { Card, CardContent, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

function AlbumForm({ album, onSubmit }) {
  const { handleSubmit, control } = useForm({
    defaultValues: album || { name: '', artist: '', imageUrl: '' }
  });

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field}
                label="Naam" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
              />
            )}
          />
          <Controller
            name="artist"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field}
                label="Artiest" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
              />
            )}
          />
          <Controller
            name="imageUrl"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field}
                label="Image URL" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
              />
            )}
          />
          <button type="submit">Opslaan</button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AlbumForm;
