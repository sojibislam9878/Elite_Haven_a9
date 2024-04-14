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
const Home = () => {
  const { data } = useFetchData();
  console.log(data);
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 3000,
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
              <h3 className="lg:text-4xl text-2xl lg:pt-80 pt-20">
                WANA FIND YOUR DREAM HOME !
              </h3>
              <h1 className="lg:text-4xl text-2xl font-bold lg:mt-7 mt-4">
                WANA FIND YOUR DREAM HOME ! DOM-INNO ALWAYS WITH YOU
              </h1>
              <p className="font-medium text-lg lg:mt-12 mt-6 lg:leading-8">
                Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor
                sit amet contetur adipiscing elit, sed do eiusmod tempor
                incididunt Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Cumque, obcaecati. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eius nihil at saepe eaque mollitia
                exercitationem!
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
            <div className="container mx-auto p-4 text-white text-center">
              <h3 className="lg:text-4xl text-2xl lg:pt-80 pt-20">
                WANA FIND YOUR DREAM HOME !
              </h3>
              <h1 className="lg:text-4xl text-2xl font-bold lg:mt-7 mt-4">
                WANA FIND YOUR DREAM HOME ! DOM-INNO ALWAYS WITH YOU
              </h1>
              <p className="font-medium text-lg lg:mt-12 mt-6 lg:leading-8">
                Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor
                sit amet contetur adipiscing elit, sed do eiusmod tempor
                incididunt Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Cumque, obcaecati. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eius nihil at saepe eaque mollitia
                exercitationem!
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
            <div className="container mx-auto p-4 text-white text-center">
              <h3 className="lg:text-4xl text-2xl lg:pt-80 pt-20">
                WANA FIND YOUR DREAM HOME !
              </h3>
              <h1 className="lg:text-4xl text-2xl font-bold lg:mt-7 mt-4">
                WANA FIND YOUR DREAM HOME ! DOM-INNO ALWAYS WITH YOU
              </h1>
              <p className="font-medium text-lg lg:mt-12 mt-6 lg:leading-8">
                Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor
                sit amet contetur adipiscing elit, sed do eiusmod tempor
                incididunt Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Cumque, obcaecati. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eius nihil at saepe eaque mollitia
                exercitationem!
              </p>
              <button className="btn mt-14 lg:mb-80 mb-10">Read More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* luxury estate section */}
      <div className="lg:mt-28 mt-12 container mx-auto p-4">
        {/* section header  */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">estate section</h1>
          <p className="opacity-80 mt-6 lg:w-2/3 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur aliquid ut soluta dolor minus. Corporis magni unde vero
            hic autem. Dolores sed itaque accusamus quasi, nemo enim rerum earum
            aperiam.
          </p>
        </div>
        {/* section body  */}
        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          {data.map((card) => (
            <EsatateCard card={card} key={card.id}></EsatateCard>
          ))}
        </div>
        {/* review  */}
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
