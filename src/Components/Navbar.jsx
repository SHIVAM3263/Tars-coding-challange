import React,{useEffect} from 'react'
import bgimg1 from '../Assets/Aurora1.jpg'
import bgimg2 from '../Assets/Aurora2.jpg'
import bgimg3 from '../Assets/bg2.jpg'
import bgimg4 from '../Assets/bg1.jpg'
import Searchbar from './Searchbar'
 const Navbar = ({onSearch,searchQuery}) => {
  useEffect(() => {
    const slider = document.getElementById('slideImg');
    
    // List of background images
    const images = [bgimg1, bgimg2, bgimg3,bgimg4];
    
    let currentIndex = 0;

    const changeBackground = () => {
      currentIndex = (currentIndex + 1) % images.length;
      slider.src = images[currentIndex];
    };

    // Set interval to change the background every 3 seconds
    const intervalId = setInterval(changeBackground, 3000);

    // Clear interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className='banner'>
      <div className='slider'>
        <img src={bgimg1} alt='bg-img' id='slideImg' />
      </div>
      <div className='overlay'>
       <div className='navbar'>
        <h1 className='logo'>Logo</h1>
        <ul className='navitems'>
        <li><h4>Explore</h4></li>
        <li><h4>Collection</h4></li>
        <li><h4>Community</h4></li>
        </ul>
       </div>
       <div className='content'>
        <h1>Get the best high quality images</h1>
        <h2>Over 4.2 million+ high quality stock images,by our talented community.</h2>
        <Searchbar onSearch={onSearch} value={searchQuery} />
       </div>
      </div>
    </div>
    
    
    </>
  )
};
export default Navbar;