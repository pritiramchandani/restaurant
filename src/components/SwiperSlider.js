// / Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const SwiperSlider = (props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    this.props.testimonial.map((number) = {

      <SwiperSlide  style={{"color":"#fff"}}>
        <p  style={{"color":"#fff"}}>Slide 1</p>
      </SwiperSlide>})

      
      {/* <SwiperSlide  style={{"color":"#fff"}}>
        <p  style={{"color":"#fff"}}>Slide 2</p>
      </SwiperSlide>
      <SwiperSlide  style={{"color":"#fff"}}>
        <p  style={{"color":"#fff"}}>Slide 3</p>
      </SwiperSlide>
      <SwiperSlide  style={{"color":"#fff"}}>
        <p  style={{"color":"#fff"}}>Slide 4</p>
      </SwiperSlide> */}
    </Swiper>
  );
};