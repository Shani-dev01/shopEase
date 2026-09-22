import { data, Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

function ShopByCategory({ products}) {
  return (
    <>
      <section className="h-[550px] w-full bg-[#FFFFFF] ">
        <div className="w-full flex items-start justify-between pt-20 px-20">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl font-bold text-slate-800">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-500">
              Explore top categories and find what you love
            </p>
          </div>
          <div className="text-blue-500 font-bold">
            <Link to={"/"} className="flex items-center justify-center gap-1">
              View All Categories
              <IconArrowRight />
            </Link>
          </div>
        </div>
        <div className="w-full h-[300px] flex  justify-evenly items-start pt-15 px-10 ">
            {products.map((p) =>{
              
            let cleanCategory = p.category.replace('-', " ").toUpperCase()
            return(
          <div key={p.id} className="bg-slate-100 h-[175px] w-[140px] border-[1px] border-[#cccc] shadow-md rounded-md flex flex-col items-center justify-center gap-0 px-1  hover:-translate-y-2 transition 0.3s ease-in-out">
            <img src={p.thumbnail} alt="" className="h-[95px] w-[95px] object-cover" />
            <h2 className=" text-center font-bold text-gray-900 text-[13px] line ">
              {cleanCategory}
            </h2>
            <span className="text-[12px] text-gray-500 ">( {p.category.length-1}+ Producs )</span>
          </div>
          )})}
        </div>
      </section>
    </>
  );
}

export default ShopByCategory;
