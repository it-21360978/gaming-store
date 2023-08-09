import React from 'react';
import Navbar from './nav';
import Card from '../components/gameCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/g1.jpg';
import image2 from '../assets/g3.jpg';
import image3 from '../assets/g4.jpg';
import Footer from './footer';
import Report from '../pages/reports'

export default function Home() {
  return (
    <div>
    <div>
      <Navbar />
      <div/>



      <div  className=" mt-10 m-10">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={3000}
          className="shadow-xl"
        >
          <div>
            <img
              src={image1}
              alt="Image 1"
              className="w-96 h-full overflow-hidden rounded-lg md:h-96"
            />
          </div>
          <div>
            <img
              src={image2}
              alt="Image 2"
              className="w-96 h-full overflow-hidden rounded-lg md:h-96"
            />
          </div>
          <div>
            <img
              src={image3}
              alt="Image 3"
              className="w-96 h-full overflow-hidden rounded-lg md:h-96"
            />
          </div>
        </Carousel>
      </div>

      <div className="flex justify-center mt-10">
        <Report/>

      </div>

      <div className="flex justify-center mt-10">
      <p className="text-gray-900 text-4xl text-center dark:text-white items-center font-bold mb-10">
        Unleash Your Inner Gamer - Explore, Discover, and Dominate in the Virtual Worlds!
      </p>
      </div>

      <section className=' backdrop-blur-lg bg-gray-50 rounded-xl dark:bg-gray-900 mt-10 m-10 flex flex-col columns-2'>
        <Card />
      </section>
      <br/>

      <Footer />
    
    </div>
    </div>

  );
}
