import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

function Hero() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=5");

        const data = await response.json();

        setProduct(data.products.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };

    loadProduct();
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      className="h-[610px] w-full"
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {product.map((items) => (
        <SwiperSlide key={items.id} className="h-full">
          <div className="h-full w-full bg-slate-100 flex items-center justify-between px-10 md:px-20">
            {/* LEFT */}
            <div className="h-full w-1/2 flex flex-col justify-center text-white">
            
              <span className="mb-4 w-fit px-4 py-2 rounded-full bg-blue-600 text-sm backdrop-blur text-white">
                LocalMart • Featured Product
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-slate-800 ">
                {items.title}
              </h1>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mb-6">
                {items.description}
              </p>

              <div className="flex items-center gap-5">
                <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-900 hover:text-white transition cursor-pointer ">
                  Shop Now →
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="h-full w-1/2 flex items-center justify-center">
              <div className="h-full w-full max-w-[450px] flex items-center justify-center">
                <img
                  src={items.thumbnail}
                  alt={items.title}
                  className="h-[350px] w-[350px] object-cover drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
