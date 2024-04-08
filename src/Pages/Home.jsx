import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Home = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(bg1.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto p-4 text-white text-center">
            <h3 className="lg:text-4xl text-2xl pt-80">
              WANA FIND YOUR DREAM HOME !
            </h3>
            <h1 className="lg:text-4xl text-2xl font-bold mt-7">
              WANA FIND YOUR DREAM HOME ! DOM-INNO ALWAYS WITH YOU
            </h1>
            <p className="font-medium mt-12 leading-8">
              Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor sit
              amet contetur adipiscing elit, sed do eiusmod tempor incididunt
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eius nihil at saepe eaque mollitia exercitationem!
            </p>
            <button className="btn mt-14 mb-80">Read More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(bg2.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto p-4 text-white text-center">
            <h3 className="lg:text-4xl text-2xl pt-80">
              WANA FIND YOUR DREAM HOME !
            </h3>
            <h1 className="lg:text-4xl text-2xl font-bold mt-7">
              WANA FIND YOUR DREAM HOME ! DOM-INNO ALWAYS WITH YOU
            </h1>
            <p className="font-medium mt-12 leading-8">
              Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor sit
              amet contetur adipiscing elit, sed do eiusmod tempor incididunt
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eius nihil at saepe eaque mollitia exercitationem!
            </p>
            <button className="btn mt-14 mb-80">Read More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(bg1.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto p-4 text-white text-center">
            <h3 className="lg:text-4xl text-2xl pt-80">
              WANA FIND YOUR DREAM HOME !
            </h3>
            <h1 className="lg:text-4xl text-2xl font-bold mt-7">
              WANA FIND YOUR DREAM HOME ! DOM-INNO ALWAYS WITH YOU
            </h1>
            <p className="font-medium mt-12 leading-8">
              Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor sit
              amet contetur adipiscing elit, sed do eiusmod tempor incididunt
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eius nihil at saepe eaque mollitia exercitationem!
            </p>
            <button className="btn mt-14 mb-80">Read More</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
