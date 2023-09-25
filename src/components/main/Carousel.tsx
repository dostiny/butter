import React, { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';
import Navbar from './Navbar';
import CenterText from './CenterText';

import image1 from '../../img/image1.png';
import image2 from '../../img/image2.png';
import image3 from '../../img/image3.png';
import image4 from '../../img/image4.png';

const Carousel = () => {
  const imageList = [image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((num) => (num === imageList.length - 1 ? 0 : num + 1));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Outdiv>
      <Indiv style={{ backgroundImage: `url(${imageList[currentIndex]})` }}>
        <Navbar />
        <CenterText />
        <Dotsdiv>
          {imageList.map((slide, slideIndex) =>
            currentIndex === slideIndex ? (
              <Select key={slideIndex} onClick={() => goToSlide(slideIndex)} />
            ) : (
              <Unselect
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              />
            ),
          )}
        </Dotsdiv>
      </Indiv>
    </Outdiv>
  );
};

export default Carousel;

const Outdiv = tw.div`h-screen w-full relative group`;
const Indiv = tw.div`h-full w-full flex flex-col bg-center bg-cover duration-500`;
const Dotsdiv = tw.div`h-auto w-full flex justify-center items-end py-2 z-10`;
const Select = tw.div`w-14 h-4 cursor-pointer bg-white mx-4 my-10`;
const Unselect = tw.div`w-14 h-4 cursor-pointer bg-gray-400 mx-4 my-10`;
