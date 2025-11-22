import React from "react";

export default function Events() {
  return (
    <section className="container m-auto">
      <div className="flex gap-18 items-center pl-120 my-25">
        <p className="text-[20px] text-[#D9D9D9] w-[457px]">
          Only in 2021 we have made more than 100,000 orders for you, your loved
          ones, all of you, and in 2022 we are ready to destroy the market
        </p>
        <h2 className="w-[392px] font-extrabold text-[80px] text-white">
          Our New{" "}
          <span className="bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] bg-clip-text text-transparent">
            Events
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-5 my-13 mb-30">
        <div className="flex gap-6 justify-center">
          <div className="bg-[url(src/assets/first-bg.png)] w-[614px] h-[260px] flex flex-col gap-9 py-10 pl-10 rounded-[30px]">
            <h4 className="text-[32px] text-white w-[230px]">
              TWO COFFEE FOR 1 PRICE
            </h4>
            <div>
              <button className="bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] rounded-[82.83px] px-11 py-5 font-semibold text-[24px] text-[#D9D9D9]">
                More
              </button>
            </div>
          </div>
          <div className="bg-[url(src/assets/second-bg.png)] w-[614px] h-[260px] flex flex-col gap-9 py-10 pl-10 rounded-[30px]">
            <h4 className="text-[32px] text-white w-[230px]">
            KITCHEN TOUR
            </h4>
            <div>
              <button className="bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] rounded-[82.83px] px-11 py-5 font-semibold text-[24px] text-[#D9D9D9]">
                More
              </button>
            </div>
          </div>
         
        </div>
        <div className="flex gap-6 justify-center">
        <div className="bg-[url(src/assets/third-bg.png)] w-[401px] h-[260px] flex flex-col gap-9 py-10 pl-10 rounded-[30px]">
            <h4 className="text-[32px] text-white w-[241px]">
            FREE COFFEE FOR 3 COFFEE
            </h4>
            <div>
              <button className="bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] rounded-[82.83px] px-11 py-5 font-semibold text-[24px] text-[#D9D9D9]">
                More
              </button>
            </div>
          </div>
          <div className="bg-[url(src/assets/n-4.png)] w-[401px] h-[260px] flex flex-col gap-9 py-10 pl-10 rounded-[30px]">
            <h4 className="text-[32px] text-white w-[222px]">
            OUR INSTAGRAM
            </h4>
            <div>
              <button className="bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] rounded-[82.83px] px-11 py-5 font-semibold text-[24px] text-[#D9D9D9]">
                More
              </button>
            </div>
          </div>
          <div className="bg-[url(src/assets/n-5.png)] w-[401px] h-[260px] flex flex-col gap-9 py-10 pl-10 rounded-[30px]">
            <h4 className="text-[32px] text-white w-[294px]">
            WHERE ARE YOU CHOOSE US?
            </h4>
            <div>
              <button className="bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] rounded-[82.83px] px-11 py-5 font-semibold text-[24px] text-[#D9D9D9]">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
