import './App.css';
import React, { useState, useEffect } from 'react';
import  Navbar  from './Components/Navbar';
import PhotoList from './Components/Photolist';
import PhotoModal from './Components/Photomodal';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
function App() {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Delay the API call to reduce the number of requests while typing
    const delayTimer = setTimeout(() => {
      if (searchQuery.trim() === '') {
        // If the search query is empty, do not make an API call
        return;
      }
      // Fetch photos from Unsplash API
      const fetchPhotos = async () => {
        try {
          setLoading(true);
          const apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=ZD02vpJiDUxgGZaZLQN-KCdtXABUrAknqQV2II_H6HI&page=1`;
          console.log('API Request URL:', apiUrl);
          const response = await axios.get(apiUrl);
          setPhotos(response.data.results);
          console.log('API Response:', response.data.results);
        } catch (error) {
          console.error('Error fetching photos:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchPhotos();
    }, 1000);

    return () => clearTimeout(delayTimer);
  }, [searchQuery]);
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
 
   const handleLoadMore = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=ZD02vpJiDUxgGZaZLQN-KCdtXABUrAknqQV2II_H6HI&page=${currentPage + 1}`
      );

      setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching more photos:', error);
    }
  };
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };
  
  const handleTagClick = (tag) => {
    // Update the search query based on the clicked tag
    handleSearch(tag);
  };
  
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
    <Navbar onSearch={handleSearch} searchQuery={searchQuery}/>
    {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={handleCloseModal}  onTagClick={handleTagClick}/>
      )}
    {loading ? (
        <CircularProgress className='loading-icon' />
      ) : (
        <>
        <PhotoList photos={photos} onPhotoClick={handlePhotoClick} />
        {photos.length > 0 && <button onClick={handleLoadMore} className='loadmore-btn'>Load More</button>}
        </>
      )}
    
    </div>
  );
}

export default App;
