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
            let cleanCategory = p.category.replace('-', " ").toUpperCase()
            return(
              <div key={p.id} className="bg-slate-100 px-2 h-[275px] w-[225px] border-[1px] border-[#cccc] shadow-md rounded-lg flex flex-col items-center justify-start gap-4 px-1  hover:-translate-y-2 transition 0.3s ease-in-out">
            <div className="h-[105px] w-full " >
              <img src="" alt="" />
            </div>
            <div className="h-[85px] w-full px-[10px] flex flex-col items-start justify-center" >
              <h2 className="text-[#0F172A] font-bold text-[17px] "  >Product Name</h2>
              <h2 className="flex items-center justify-start gap-2 text-amber-600" ><IconStarFilled className="fill-amber-500 h-[18px] w-[18px]  " /> 4.1k </h2>
              <div className="flex items-center justify-between text-[17px] gap-5" >
                <span className="flex gap-2 text-[#0F172A] font-bold">
                9999 
                <span className="line-through text-[#94A3B8] font-bold" >
                9978
                </span>
                </span>
                <span className="h-[23px] w-[70px] bg-emerald-300 text-red-500 text-[14px] flex items-center justify-center rounded-lg " >50% OFF</span>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 text-[13px] text-[#FFFFFF] bg-blue-600 w-full rounded-lg h-[35px] " > <IconShoppingCart className="h-[18px] w-[18px]" /> Add to Cart</button>
          </div>
          )})}
        </div>
      </section>
    </>
)
}
export default FeatureSection;