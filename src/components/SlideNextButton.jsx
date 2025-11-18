import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
   
      <button className='
    border border-[#35C66B] rounded-[29px] p-9 backdrop-blur-[100.76123809814453px]' onClick={() => swiper.slideNext()}><img src="src/assets/Arrow 1.png" alt="" /></button>
  
  );
}