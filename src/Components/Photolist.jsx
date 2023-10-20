// PhotoList.js
import React from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const PhotoList = ({ photos, onPhotoClick }) => {
  return (
    <div className='photolist'>
      {photos.map((photo) => (
        <div key={photo.id} onClick={() => onPhotoClick(photo)}>
          <img src={photo.urls.thumb} alt={photo.alt_description} className='thumbnailphoto'/>
          <div className='photo-info'>
           <div className='user-info'>
              <img src={photo.user.profile_image.small} alt={photo.user.name} className='profile-pic' />
              <span>{photo.user.name}</span>
           </div>
           <div className='likes-info'>
              <FavoriteOutlinedIcon className='customicon'/>
              <span>{photo.likes}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
