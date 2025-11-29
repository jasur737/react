import React from "react";

export default function Header() {
  return (
    <header className="container m-auto mt-20 relative">
      <div className="flex gap-[270px]">
        <div className="flex flex-col gap-11 ">
          <h1 className="text-white text-[80px] font-extrabold w-[543px] leading-24 mt-6">
            New Cafe by
            <span className="bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] bg-clip-text text-transparent">
              {" "}
              StarBucks
            </span>
          </h1>
          <p className="w-[570px] text-[20px] text-[#D9D9D9]">
            Have time to buy the most harmonious drinks in the new Starbucks
            coffee and don't forget about the discount!
          </p>
          <div className="flex gap-6">
            <button className="bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] rounded-[82px] text-[24px] text-white font-semibold py-3 px-16 cursor-pointer">
              Select a coffee{" "}
            </button>
            <button className="border border-[#DADADA] text-white text-2xl cursor-pointer bg-[#121517] py-3 px-4 rounded-[82px] ">
              More
            </button>
          </div>
          <div className="flex gap-16">
            <div>
              <h3 className="text-[62px] text-white leading-24">
                9k<span className="text-[#237249]">+</span>
              </h3>
              <p className="text-[#D9D9D9] text-[20px] leading-[144%] w-[122px]">
                Premium Users
              </p>
            </div>
            <div>
              <p className="text-[62px] text-white leading-24">
                2k<span className="text-[#237249]">+</span>
              </p>
              <p className="text-[#D9D9D9] text-[20px] leading-[144%] w-[122px]">
                Happy Customer
              </p>
            </div>
            <div>
              <p className="text-[62px] text-white leading-24">
                28<span className="text-[#237249]">+</span>
              </p>
              <p className="text-[#D9D9D9] text-xl leading-[144%] w-[122px]">
                Awards Winning
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="src/assets/Group 2.png" alt="" />
        </div>
      </div>
      <div className="container m-auto w-5xl flex items-center justify-between rounded-[46px] bg-white py-10 px-20 mt-28 mb-25 relative">
        <img
          className="absolute -top-20 -left-20"
          src="src/assets/badge.png"
          alt=""
        />

        <div className="w-[190px] text-center">
          <img src="src/assets/21 1.png" alt="" />
          <h3 className="font-medium text-[32px]">Tasty</h3>
          <p className="text-xl">We have the most delicious coffee</p>
        </div>

        <div className="w-[216px] text-center">
          <img src="src/assets/30 1.png" alt="" />
          <h3 className="font-medium text-[32px]">Fast</h3>
          <p className="text-xl">Our cafe will serve you quickly</p>
        </div>

        <div className="w-[211px] text-center">
          <img src="src/assets/10 1.png" alt="" />
          <h3 className="font-medium text-[32px]">Available</h3>
          <p className="text-xl">Cafe will serveat the most pleasant prices</p>
        </div>
      </div>
      <div className="absolute top-4 left-14 w-[324px] h-[324px] rounded-full effect"></div>
      <div className="absolute top-40 left-200 w-[229px] h-[229px] rounded-full effect-2"></div>
      <div className="absolute top-[435px] left-[980px] w-[324px] h-[324px] rounded-full effect-3"></div>
      <div className="absolute top-[860px] left-20 w-[400px] h-[324px] rounded-full effect-4"></div>
    </header>
  );
}
