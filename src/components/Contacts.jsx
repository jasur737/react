import React from "react";

export default function Contacts() {
  return (
    <section className="flex container m-auto gap-100 justify-center">
      <div className="flex flex-col gap-13">
        <h2 className="font-extrabold text-[80px] text-white">
          Our <br />
          <span className="bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] bg-clip-text text-transparent">Contacts</span>
        </h2>
        <p className="text-[#D9D9D9] text-xl w-[387px]">
          Have time to buy the most harmonious drinks in the new Starbucks
          coffee and don't forget about the discount!
        </p>
        <div className="flex items-center gap-3">
          <img src="src/assets/media.svg" alt="" />
          <p className="font-medium text-4xl text-white">@supercoffee</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="src/assets/phone.svg" alt="" />
          <p className="font-medium text-4xl text-white">+7-999-999-99-99</p>
        </div>
      </div>
      <div>
        <img src="src/assets/Group 53.png" alt="" />
      </div>
    </section>
  );
}
