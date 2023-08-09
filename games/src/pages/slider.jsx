import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/g.jpg';
import image2 from '../assets/gy.jpg';
import image3 from '../assets/nova logo.png';

export default function MyCarousel() {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={3000} 
        className=" w-full shadow-xl"
      >
        <div>
          <img src={image1} alt="Image 1"className=" w-96 h-56 overflow-hidden rounded-lg md:h-96" />
        </div>
        <div>
          <img src={image2} alt="Image 2" className=" h-56 overflow-hidden rounded-lg md:h-96r" />
        </div>
        <div>
          <img src={image3} alt="Image 3"  className=" h-56 overflow-hidden rounded-lg md:h-96"/>
        </div>
      </Carousel>
    </div>
  );
}
