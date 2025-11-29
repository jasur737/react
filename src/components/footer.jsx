import React from "react";

export default function Footer() {
  return (
    <section className="bg-[#0B0C0D]">
      <div className="container m-auto flex flex-col gap-22 py-10">
        <div className="flex gap-26 justify-center items-start">
          <img src="src/assets/logo.svg" alt="" />
          <div className="flex flex-col">
            <h4 className="text-[#BBB3B3] text-xl">Main</h4>
            <a className="text-[#BBB3B36E] text-xl" href="">
              Buy
            </a>
            <a className="text-[#BBB3B36E] text-xl" href="">
              More
            </a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#BBB3B3] text-xl">We make</h4>
            <a className="text-[#BBB3B36E] text-xl" href="">
              Process
            </a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#BBB3B3] text-xl">Products</h4>
            <a className="text-[#BBB3B36E] text-xl" href="">
              Cappuccino
            </a>
            <a className="text-[#BBB3B36E] text-xl" href="">
              Fast
            </a>
            <a className="text-[#BBB3B36E] text-xl" href="">
              Fast
            </a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#BBB3B3] text-xl">Events</h4>
            <a className="text-[#BBB3B36E] text-xl" href="">
              Drinks
            </a>
            <a className="text-[#BBB3B36E] text-xl" href="">
              Eat
            </a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#BBB3B3] text-xl">Contacts</h4>
            <a className="text-[#BBB3B36E] text-xl" href="">
              Instagram
            </a>
            <a className="text-[#BBB3B36E] text-xl" href="">
              Number
            </a>
          </div>
          <a href="">
            <img
              className="h-[84px] w-[84px]"
              src="src/assets/top.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex gap-257 justify-center">
          <p className="font-medium text-3xl bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] bg-clip-text text-transparent">
            +7-999-999-99-99
          </p>
          <img src="src/assets/media.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
