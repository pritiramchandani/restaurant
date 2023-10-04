// / Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const SwiperSlider = (props) => {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {props.testimonials.map((testimonial) => {
        return <SwiperSlide  style={{"color":"#fff"}}>
          <p  style={{"color":"#fff"}}>{testimonial.name}</p>
        </SwiperSlide>;
      })
    }

    </Swiper>
  );
};