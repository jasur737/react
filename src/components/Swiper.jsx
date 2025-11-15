import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';

export default () => {
  return (
    <Swiper
      spaceBetween={-580}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

    <SlidePrevButton/>

      <SwiperSlide>
      <div className='border-[2px] border-solid [border-image:linear-gradient(267.2deg,_#237249_3.05%,_#35C66B_75.72%)_1] px-11 py-8 w-[277px] h-[554px] rounded-[30px] flex flex-col items-center gap-2'>
            <img src="src/assets/Group 132.png" alt="" />
            <h3 className='text-white font-medium text-[32px]'>Fast</h3>
            <p className='text-[#D9D9D9] text-[20px] w-[216px] text-center'>Our cafe will serve you quickly</p>
            <div className='flex items-center gap-4'>
                <p className='text-[#D9D9D9] font-medium text-[32px]'>7,45$</p>
                <p className='text-[#D9D9D9] text-[20px]'>330 ml</p>
            </div>
            <button className='text-white bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] font-semibold text-[17px] py-4 px-9 rounded-[60px]'>Buy Product</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='border-[2px] border-solid [border-image:linear-gradient(267.2deg,_#237249_3.05%,_#35C66B_75.72%)_1] px-11 py-8 w-[277px] h-[554px] rounded-[30px] flex flex-col items-center gap-2'>
            <img src="src/assets/Group 133.svg" alt="" />
            <h3 className='text-white font-medium text-[32px]'>Fast</h3>
            <p className='text-[#D9D9D9] text-[20px] w-[216px] text-center'>Our cafe will serve you quickly</p>
            <div className='flex items-center gap-4'>
                <p className='text-[#D9D9D9] font-medium text-[32px]'>7,45$</p>
                <p className='text-[#D9D9D9] text-[20px]'>330 ml</p>
            </div>
            <button className='text-white bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] font-semibold text-[17px] py-4 px-9 rounded-[60px]'>Buy Product</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='border-[2px] border-solid [border-image:linear-gradient(267.2deg,_#237249_3.05%,_#35C66B_75.72%)_1] px-11 py-8 w-[277px] h-[554px] rounded-[30px] flex flex-col items-center gap-2'>
            <img src="src/assets/Group 132.svg" alt="" />
            <h3 className='text-white font-medium text-[32px]'>Fast</h3>
            <p className='text-[#D9D9D9] text-[20px] w-[216px] text-center'>Our cafe will serve you quickly</p>
            <div className='flex items-center gap-4'>
                <p className='text-[#D9D9D9] font-medium text-[32px]'>7,45$</p>
                <p className='text-[#D9D9D9] text-[20px]'>330 ml</p>
            </div>
            <button className='text-white bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] font-semibold text-[17px] py-4 px-9 rounded-[60px]'>Buy Product</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-[2px] border-solid [border-image:linear-gradient(267.2deg,_#237249_3.05%,_#35C66B_75.72%)_1] px-11 py-8 w-[277px] h-[554px] rounded-[30px] flex flex-col items-center gap-2'>
            <img src="src/assets/Group 132.png" alt="" />
            <h3 className='text-white font-medium text-[32px]'>Cappuccino</h3>
            <p className='text-[#D9D9D9] text-[20px] w-[216px] text-center'>Our cafe will serve you quickly</p>
            <div className='flex items-center gap-4'>
                <p className='text-[#D9D9D9] font-medium text-[32px]'>7,45$</p>
                <p className='text-[#D9D9D9] text-[20px]'>330 ml</p>
            </div>
            <button className='text-white bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] font-semibold text-[17px] py-4 px-9 rounded-[60px]'>Buy Product</button>
        </div>
      </SwiperSlide>
      
      <SlideNextButton/>
    </Swiper>
    
  );  
};  