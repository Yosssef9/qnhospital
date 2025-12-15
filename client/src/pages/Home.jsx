import Carousel from "../components/Carousel";
import OfferArea from "../components/OfferArea";
import AboutArea from "../components/AboutArea";
import BluePanel from "../components/BluePanel";
import NewsArea from "../components/NewsArea";
import Map from "../components/Map";

export default function Home() {
  const images = [
    "/images/Carousel/WhatsApp Image 2025-11-01 at 17.41.58_f8fa0789.jpg",
    "/images/Carousel/WhatsApp Image 2025-11-01 at 17.41.58_2d9ec9d3.jpg",
    "/images/Carousel/WhatsApp Image 2025-11-01 at 17.41.58_db7198c2.jpg",
    "/images/Carousel/WhatsApp Image 2025-11-01 at 17.41.58_3901e3cb.jpg",
    "/images/Carousel/WhatsApp Image 2025-11-01 at 17.41.58_f3000e90.jpg",
  ];

  return (
    <div className=" ">
      <div className="md:mt-[122px] mt-[50px] ">
        <Carousel images={images} />
      </div>
      <div className="my-6 md:my-10">
        <OfferArea />
      </div>
      <div className="my-10">
        <AboutArea />
      </div>
      <BluePanel />

      <div className="my-10">
        <NewsArea />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}
