import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import EsatateCard from "../components/EsatateCard";
import useFetchData from "../Hooks/useFetchData";
import Reviews from "../components/Reviews";
import FAQSection from "../components/FAQSection";
import { Helmet } from "react-helmet";
const Home = () => {
  const { data } = useFetchData();
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Elite Haven</title>
      </Helmet>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 4000,
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
            <div  className="container mx-auto md:p-4 text-white text-center mt-3">
              <h1 className="lg:text-4xl text-xl font-extrabold lg:mt-7 pt-4 md:pt-12 font-garamond lg:pt-40 md:leading-10 lg:leading-[60px]">
                WANA FIND YOUR DREAM PROPERTY ? <br className="hidden md:flex" /> ELITE HAVEN ALWAYS WITH
                YOU
              </h1>
              <p className="opacity-80 md:leading-7 lg:mt-12 mt-6 lg:leading-8 px-4">
                Experience unparalleled luxury at Luxury Estates. Explore our
                exclusive collection of opulent properties, meticulously crafted
                to exceed your expectations. Your dream home awaits amidst
                breathtaking landscapes and impeccable service. Welcome to
                extraordinary living.
              </p>
              <button className="btn mt-14 lg:mb-80 mb-10">Read More</button>
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
           <div  className="container mx-auto md:p-4 text-white text-center mt-3">
              <h1 className="lg:text-4xl text-xl font-extrabold lg:mt-7 pt-4 md:pt-12 font-garamond lg:pt-40 md:leading-10 lg:leading-[60px]">
                WANA FIND YOUR DREAM PROPERTY ? <br className="hidden md:flex" /> ELITE HAVEN ALWAYS WITH
                YOU
              </h1>
              <p className="opacity-80 md:leading-7 lg:mt-12 mt-6 lg:leading-8 px-4">
                Experience unparalleled luxury at Luxury Estates. Explore our
                exclusive collection of opulent properties, meticulously crafted
                to exceed your expectations. Your dream home awaits amidst
                breathtaking landscapes and impeccable service. Welcome to
                extraordinary living.
              </p>
              <button className="btn mt-14 lg:mb-80 mb-10">Read More</button>
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
            <div  className="container mx-auto md:p-4 text-white text-center mt-3">
              <h1 className="lg:text-4xl text-xl font-extrabold lg:mt-7 pt-4 md:pt-12 font-garamond lg:pt-40 md:leading-10 lg:leading-[60px]">
                WANA FIND YOUR DREAM PROPERTY ? <br className="hidden md:flex" /> ELITE HAVEN ALWAYS WITH
                YOU
              </h1>
              <p className="opacity-80 md:leading-7 lg:mt-12 mt-6 lg:leading-8 px-4">
                Experience unparalleled luxury at Luxury Estates. Explore our
                exclusive collection of opulent properties, meticulously crafted
                to exceed your expectations. Your dream home awaits amidst
                breathtaking landscapes and impeccable service. Welcome to
                extraordinary living.
              </p>
              <button className="btn mt-14 lg:mb-80 mb-10">Read More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* luxury estate section */}
      <div className="container mx-auto p-4">
        {/* section header  */}
        <div data-aos="fade-up" className="text-center md:mt-32 mt-6 border-b-2 border-dashed pb-6">
          <h1 className="text-4xl font-extrabold font-garamond ">
            Luxury Estates
          </h1>
          <p className="opacity-80 md:leading-7 mt-6 lg:w-2/3 mx-auto">
            Indulge in luxury living at its finest with our exclusive estates.
            Impeccable craftsmanship, breathtaking views, and unparalleled
            amenities await you in each meticulously curated property.
            Experience the epitome of elegance and comfort.
          </p>
        </div>
        {/* section body  */}
        <div className="grid lg:grid-cols-3 gap-6 mt-14">
          {data.map((card) => (
            <EsatateCard card={card} key={card.id}></EsatateCard>
          ))}
        </div>
        {/* review  */}
        <Reviews></Reviews>
        <FAQSection></FAQSection>
      </div>
    </div>
  );
};

export default Home;
