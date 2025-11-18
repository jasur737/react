import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button className='border border-[#35C66B] rounded-[29px] [border-image-slice:1] p-9 backdrop-blur-[100.76123809814453px]' onClick={() => swiper.slidePrev()}>
      <img src="src/assets/Arrow 1.svg" alt="" />
    </button>
  );
}