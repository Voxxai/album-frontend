import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import AlbumOverview from './components/AlbumOverview';
import AlbumDetail from './components/AlbumDetail';
import CreateAlbum from './components/createAlbum';


function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Mijn Album Applicatie 
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<AlbumOverview />} />
          <Route path="/albums/:id" element={<AlbumDetail />} />
          <Route path="/new" element={<CreateAlbum />} />


        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
