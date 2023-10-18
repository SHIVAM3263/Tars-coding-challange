// PhotoList.js
import React from 'react';

const PhotoList = ({ photos, onPhotoClick }) => {
  return (
    <div className='photolist'>
      {photos.map((photo) => (
        <div key={photo.id} onClick={() => onPhotoClick(photo)}>
          <img src={photo.urls.thumb} alt={photo.alt_description} />
          <p>{photo.user.name}</p>
          <p>Likes: {photo.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
