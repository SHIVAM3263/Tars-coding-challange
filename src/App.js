import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './Components/Searchbar';
import PhotoList from './Components/Photolist';
import PhotoModal from './Components/Photomodal';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  useEffect(() => {
    // Delay the API call to reduce the number of requests while typing
    const delayTimer = setTimeout(() => {
      // Fetch photos from Unsplash API
      const fetchPhotos = async () => {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/photos?query=${searchQuery}&client_id=ZD02vpJiDUxgGZaZLQN-KCdtXABUrAknqQV2II_H6HI`
          );
          setPhotos(response.data);
          console.log('API Response:', response.data);
        } catch (error) {
          console.error('Error fetching photos:', error);
        }
      };

      fetchPhotos();
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [searchQuery]);
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <PhotoList photos={photos} onPhotoClick={handlePhotoClick} />
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
