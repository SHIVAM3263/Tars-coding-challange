// PhotoModal.js
import React from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import DownloadLink from 'react-download-link';


const PhotoModal = ({ photo, onClose,onTagClick  }) => {
  const handleTagClick = (tag) => {
    onTagClick(tag);
    onClose();
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}> 
        <div className="top-details"> 
          <img src={photo.user.profile_image.small} alt={photo.user.name} className='profile-pic' />
          <div className='user-details'>
          <span>{photo.user.name}</span>
          <a>Follow</a>
          </div>
        </div>
        <img src={photo.urls.full} alt={photo.alt_description} />
        <div className='down-details'>
          <div className='likes-details'>
          <FavoriteOutlinedIcon className='customicon'/>
          <p>{photo.likes}</p>
          </div>
          <div className="download-section">
          <DownloadLink
            label={<DownloadIcon />}
            filename={`${photo.id}.jpg`}
            exportFile={() => photo.urls.full}
            tagName="button"
            className="download-button"
          />
          </div>
          <div className='photo-details'>
            <p className="slug">{photo.slug}</p>
            <div className="tags">
              {photo.tags.map((tag) => (
                <span key={tag.title} onClick={() => handleTagClick(tag.title)}>
                  {tag.title}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button onClick={onClose} className='closebtn'>Close</button> 
      </div>
    </div>
  );
};

export default PhotoModal;
