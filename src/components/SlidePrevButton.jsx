import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button className='border-[1.5px] rounded-xl [border-image-source:linear-gradient(267.2deg,#237249_3.05%,#35C66B_75.72%)] [border-image-slice:1] p-9' onClick={() => swiper.slidePrev()}>
      <img src="src/assets/Arrow 1.svg" alt="" />
    </button>
  );
}