import { Link } from "react-router-dom";
import { IconArrowRight, IconShoppingCart, IconStarFilled, IconTrolley } from "@tabler/icons-react";

function FeatureSection({productsCard}){
return(
    <>
    <section className="h-[550px] w-full bg-[#FFFFFF] ">
        <div className="w-full flex items-start justify-between pt-20 px-20">
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
        <div className="w-full h-[300px] flex  justify-center gap-8 items-center pt-15 px-10">
            {productsCard.map((p) =>{
              console.log(p);
              
            const discountedPrice = (p.price - (p.price * p.discountPercentage / 100 )).toFixed(2);
            let cleanCategory = p.category.replace('-', " ").toUpperCase()
            return(
              <div key={p.id} className="bg-slate-100 px-2 h-[285px] w-[235px] border-[1px] border-[#cccc] shadow-md rounded-xl flex flex-col items-center justify-start gap-4 px-1  hover:-translate-y-2 pt-1 transition 0.3s ease-in-out">
            <div className="h-[115px] w-full flex items-center justify-center " >
              <img src={p.thumbnail} className="h-[100%] w-[52%] object-cover " alt="" />
            </div>
            <div className="h-[85px] w-full px-[10px] flex flex-col items-start justify-center" >
              <h2 className="text-[#0F172A] font-bold text-[17px] line-clamp-1 "  >{p.title}</h2>
              <h2 className="flex items-center justify-start gap-2 text-amber-600" >
                <IconStarFilled className="fill-amber-600 h-[18px] w-[18px]  " /> 4.1k </h2>
              <div className="flex items-center justify-between text-[17px] gap-7" >
                <span className="flex gap-2 text-[#0F172A] font-bold">
                {discountedPrice}
                <span className="line-through text-[#94A3B8] font-bold" >
                {Math.round(p.price) }
                </span>
                </span>
                <span className="h-[22px] w-[65px] bg-emerald-200 text-red-600 text-[13px] flex items-center justify-center rounded-lg " >{ Math.round(p.discountPercentage)}% OFF</span>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 text-[13px] text-[#FFFFFF] bg-blue-600 w-full rounded-lg h-[35px] " > <IconShoppingCart className="h-[18px] w-[18px]" /> Add to Cart</button>
          </div>
          )}
          )}
          
        </div>
      </section>
    </>
)
}
export default FeatureSection;