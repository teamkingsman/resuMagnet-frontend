"use client"
import React, { useState } from 'react';
import Review from './Review';
import reviewsData from '/assets/review.json';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, reviewsData.length - 1));
  };

  const carouselStyle = {
    marginLeft: `-${currentIndex * 100}%`, // Adjust the width of each carousel item
    transition: 'margin-left 0.5s ease', // Add a smooth transition effect
  };

  

  return (
    <div className='bg-neutral-100 my-20 pt-10'>
      <div className='flex md:justify-between items-center'>
        <div className='my-8 pl-10 md:pl-20'>
          <p className='text-6xl text-main'>Loved &</p>
          <p className='text-6xl font-bold text-main '> Trusted </p>
          <p><span className='text-6xl text-neutral-600'>by...</span></p>
        </div>

        <div className='lg:flex md:pr-20'>
          <div className='text-4xl mb-4 pl-20' onClick={handlePrevClick} style={{ cursor: 'pointer' }}>
            <FaArrowLeft />
          </div>
          <div className='text-4xl mb-4 pl-20' onClick={handleNextClick} style={{ cursor: 'pointer' }}>
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="carousel carousel-end rounded-box" style={carouselStyle}>
        <div className="carousel-item  pl-10  lg:pl-0">
          <div className="w-4/12 md:w-1/2 lg:w-5/12  lg:pl-20 grid grid-cols-10 lg:grid-cols-10 md:gap-10 lg:gap-10 mb-20 lg:items-center">
            {reviewsData.map((item, index) => (
              <Review key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
