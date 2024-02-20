import React from "react";
import Image from "next/image";
import bnw from "@/public/images/black_n_white.jpeg";

const page = () => {
  return (
    <div>
      <div className="">
        <div className="cont">
          <span className="">
            {/* <Image src={bnw} alt="user icon" className="w-full" /> */}
          </span>

          <p>0xbaFC....9573</p>
        </div>
        <div className="w-[auto] justify-center sec_div mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-5xl xl:max-w-5xl md:container px-10">
          <div className=" text-sm flex flex-col sub">
            <label className="text-gray-700 ">
              Zakat Amount <span>(2.5% of total asset)</span>{" "}
            </label>
            <input id="file" class=" p-5 rounded-lg my-5  border" />

            <label className="text-gray-700 ">Message </label>
            <input
              id="file"
              class=" p-5 rounded-lg my-5  border"
              placeholder="(optional)"
            />

            <button className="p-5 bg-[#17163E] w-full border rounded-lg text-white">
              Pay Zakat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
