// PhotoModal.js
import React from 'react';

const PhotoModal = ({ photo, onClose }) => {
  return (
    <div>
      <img src={photo.urls.full} alt={photo.alt_description} />
      <p>{photo.user.name}</p>
      <p>Likes: {photo.likes}</p>
      {/* Add other details here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PhotoModal;
