import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const slides = [
    {
        id: 1,
        image: slider1,
        alt: 'Slider 1',
    },
    {
        id: 2,  
        image: slider2,
        alt: 'Slider 2',
    }
];

const BannerSlider = () => {
    return (
        <div className='w-full h-full md:h-125'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true} 
                autoplay={{
                    delay: 2500, 
                    disableOnInteraction: false, 
                }}
                pagination={{
                    clickable: true, 
                }}
                navigation={true} 
                modules={[Autoplay, Pagination, Navigation]} 
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-110">
                        
                            <img 
                                src={slide.image} 
                                alt={slide.alt} 
                                className="w-full h-full"
                            />

                            <div className="absolute inset-0"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4 font-sans drop-shadow-lg">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-2xl font-light mb-8 max-w-2xl drop-shadow-md">
                                    {slide.subtitle}
                                </p>
                                
                            </div>
                        
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <style>{`
                .swiper-button-next, .swiper-button-prev {
                    color: white; 
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .group:hover .swiper-button-next,
                .group:hover .swiper-button-prev {
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background-color: #EED9C4 !important;
                }
            `}</style>

        </div>
    )
}

export default BannerSlider