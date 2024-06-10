import React from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

function AlbumForm({ album, onSubmit, onRemove }) {
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: album || { name: '', artist: '', imageUrl: '' },
  });

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Naam is verplicht' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Naam"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="artist"
            control={control}
            rules={{ required: 'Artiest is verplicht' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Artiest"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.artist}
                helperText={errors.artist?.message}
              />
            )}
          />
          <Controller
            name="imageUrl"
            control={control}
            rules={{ required: 'Image URL is verplicht' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Image URL"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.imageUrl}
                helperText={errors.imageUrl?.message}
              />
            )}
          />

          <Button type="submit" variant="contained" color="primary">
            {album ? 'Album Bijwerken' : 'Album Toevoegen'}
          </Button>

          {onRemove && (
            <Button
              type="button"
              variant="contained"
              color="error"
              onClick={onRemove}
              style={{ marginLeft: '1rem' }}
            >
              Verwijder Album
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

export default AlbumForm;
