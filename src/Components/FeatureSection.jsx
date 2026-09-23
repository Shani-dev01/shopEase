import { Link } from "react-router-dom";
import { IconArrowRight, IconHeart, IconShoppingCart, IconStarFilled, IconTrolley } from "@tabler/icons-react";

function FeatureSection({productsCard}){
return(
    <>
    <section className="h-[550px] w-full bg-[#FFFFFF] ">
        <div className="w-full flex items-start justify-between pt-20 px-13">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl font-bold text-slate-800">
              Featured Products
            </h2>
            <p className="text-lg text-gray-500">
              Handpicked products for you
            </p>
          </div>
          <div className="text-blue-500 font-bold">
            <Link to={"/"} className="flex items-center justify-center gap-1">
              View All Categories
              <IconArrowRight />
            </Link>
          </div>
        </div>
        <div className="w-full h-[300px] flex  justify-center gap-5 items-center pt-15 px-10">
            {productsCard.map((p) =>{
              
            const indianPrice = Math.round(p.price) * 90;
            console.log(p.price, p.discountPercentage);
            
            const roundedDiscount = Math.round(p.discountPercentage)
            const discountedPrice = Math.round((indianPrice - (indianPrice * roundedDiscount / 100 )));
            
            
            return(
              <div key={p.id} className=" h-[295px] w-[235px] border-[1px] border-[#cccc] shadow-md rounded-xl flex flex-col items-center justify-start gap-1 hover:-translate-y-2 pt-0 transition 0.3s ease-in-out">
            <div className="h-[142px] rounded-tl-xl rounded-tr-xl w-full bg-slate-100 flex items-center justify-center relative" >
              <IconHeart className="absolute right-[15px] top-[15px] text-slate-500 h-[26px] w-[26px] " />
              <img src={p.thumbnail} className="h-[100%] w-[52%] object-contain " alt="" />
            </div>
            <div className="h-[140px] w-full px-[10px] flex flex-col items-start justify-center" >
              <h2 className="text-[#0f172ada] font-bold text-[17px] line-clamp-1 "  >{p.title}</h2>
              <h2 className="flex items-center justify-start gap-2 text-amber-600 text-[16px] font-bold " >
                <IconStarFilled className="fill-amber-400 h-[15px] w-[15px]  " /> {p.rating} k </h2>
              <div className="w-full flex items-center justify-between text-[17px] gap-5" >
                <span className="flex gap-2 text-[#0f172ada] font-bold">
                {'\u20B9'}{discountedPrice}
                <span className="line-through text-[#94A3B8] font-bold" >
                {'\u20B9'}{Math.round(p.price) * 90  }
                </span>
                </span>
                <span className="h-[22px] w-[65px] bg-emerald-200 text-red-600 text-[13px] flex items-center justify-center rounded-lg " >{ Math.round(p.discountPercentage)}% OFF</span>
              </div>
            <button className=" h-[32px] flex items-center justify-center gap-2 text-[13px] text-[#FFFFFF] bg-blue-600 w-full rounded-lg mt-4 " > <IconShoppingCart className="h-[18px] w-[18px]" /> Add to Cart</button>
            </div>
          </div>
          )}
          )}
          
        </div>
      </section>
    </>
)
}
export default FeatureSection;