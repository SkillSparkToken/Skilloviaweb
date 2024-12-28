import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full lg:h-[100vh] h-[80vh] ">
      <figure className="relative w-full h-full ">
        {/* Image */}
        <img 
          src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1735327484/3c499517bc106130c733eb5c4c6549ec_wcp5mq.jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Text content */}
        <figcaption className="absolute bottom-20 left-12 z-10 lg:px-[4rem] ">
          <h1 className="text-5xl md:text-8xl font-bold text-[#BFCAB4] leading-tight">
            SWAP SKILLS,<br />
            SAVE<span className="sty font-medium"> money!</span>
          </h1>
        </figcaption>
      </figure>
    </section>
  );
};

export default Hero;