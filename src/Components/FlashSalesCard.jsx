import {
  IconAlarm,
  IconAlarmAverage,
  IconAlarmFilled,
  IconAlarmSmoke,
  IconAlarmSnooze,
  IconArrowRight,
} from "@tabler/icons-react";

function FlashSalesCard() {
  return (
    <>
      <section className="w-[100%] h-[300px] flex items-center justify-between ">
        <div className=" w-[60%] h-auto flex bg-[#CECECE] rounded-lg p-9 ">
        <div className="h-full w-[100%]" >
          <div className=" h-[50%] flex flex-col items-start justify-center gap-5 ">
            <div className=" h-auto flex items-center justify-center" >
            <IconAlarm className="h-[35px] w-[35px] text-gray-800 " />
            <span className="text-blue-900 text-xl font-semibold ">
              Flash Sale
            </span>
            </div>
            <span className="font-bold text-3xl" >Up to 60% OFF</span>
          </div>
          <div className="h-[100%] flex flex-col items-start justify-around pt-3 gap-6 ">
            <p className="text-slate-700 text-[18px]">On top electronics & accessories</p>
            <button className="bg-gray-900  w-[170px] h-[45px] text-[16px] text-[#ffffff] flex items-center justify-center rounded-3xl gap-1" >Explore Details 
            <IconArrowRight className="text-[#ffffff] h-[24px] w-[24px] pt-1 " />
            </button>
          </div>
          </div>
        <div className="w-[100%] h-full flex  ">
            <img className="object-cover h-full w-full rounded-2xl" src="https://images.unsplash.com/photo-1579362243176-b746a02bc030?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        </div>
      </section>
    </>
  );
}

export default FlashSalesCard;
