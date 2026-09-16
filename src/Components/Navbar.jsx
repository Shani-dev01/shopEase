import {
  IconCarTurbine,
  IconChevronDown,
  IconHeart,
  IconSearch,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


function Navbar() {

const [show, setShow] = useState(false);
const [accountsShow, setAccountShow] = useState(false);



  return (
    <>
      <header
        className="sticky top-0 z-50 w-full h-[72px]  bg-[#FFFFFF]
                flex items-center justify-center shadow-lg p-11 "
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <IconShoppingBag size={28} stroke={2} className="text-white" />
          </div>

          <span className="text-[24px] font-bold text-slate-900">
            Shop<span className="text-blue-600">Ease</span>
          </span>
        </div>
        <div className="w-6xl h-full flex items-center justify-center ">
          <ul className="w-2xl h-full gap-[35px] flex items-center justify-center text-[#0F172A] text-[16px] font-medium pl-[75px]">
            <li className="relative ">
              <button className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer h-[45px] w-[150px] border-[1px] bg-slate-50 border-slate-200 rounded-3xl flex items-center justify-center gap-1">
                Category <IconChevronDown size={17} stroke={2} onClick={()=>setShow(!show)} />
              </button>
              <div className="absolute top-[50px] transition 0.3s ease-in-out">
                <ul className={`w-[150px] h-[190px] flex flex-col gap-2 p-5 bg-[#FFFFFF] shadow-slate-400 bg-slate-50 border-slate-200 rounded-2xl  ${show ? "block" : "hidden"} transition 0.3s ease-in-out `}>

                  <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">Fashion</li>
                  <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">Beauty</li>
                  <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">Electronics</li>
                  <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">Grocery</li>
                  <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">Home & Decor</li>
                </ul>
              </div>
            </li>
            <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out border-[1px] border-slate-200 rounded-3xl flex items-center justify-center">
              <input
                type="text"
                placeholder="Search Products"
                className="pl-5 w-[400px] h-[45px] bg-slate-50 rounded-3xl outline-none"
              />{" "}
              <span className="w-[45px] h-[45px] flex items-center justify-center bg-blue-600 rounded-[100%]">
                <IconSearch size={23} stroke={2} className="text-amber-50 cursor-pointer " />
              </span>
            </li>
            <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">
              <div className="h-[45px] w-[45px] flex flex-col items-center justify-center">
                <IconHeart size={25} stroke={2} />
                Whishlist
              </div>
            </li>
            <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">
              <div className="h-[45px] w-[45px] flex flex-col items-center justify-center">
                <IconShoppingCart size={25} stroke={1.8} />
                Cart
              </div>
            </li>
            <li className=" relative ">
              <button className=" h-[45px] w-[150px] border-[1px] bg-slate-50 border-slate-200 rounded-3xl flex items-center justify-center gap-1 hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">
                Account <IconChevronDown size={17} stroke={2}  onClick={()=>setAccountShow(!accountsShow)} />
              </button>
              <div className="absolute top-[50px] transition 0.3s ease-in-out">
                <ul className={`w-[150px] h-[190px] flex flex-col gap-2 p-5 bg-[#FFFFFF] shadow-slate-400 bg-slate-50 border-slate-200 rounded-2xl  ${accountsShow ? "block" : "hidden"} transition 0.3s ease-in-out `}>

                  <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">Fashion</li>
                  <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">Beauty</li>
                  <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">Electronics</li>
                  <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">Grocery</li>
                  <li className="hover:text-[#2563EB] transition-all 0.3s ease-in-out cursor-pointer">Home & Decor</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
export default Navbar;
