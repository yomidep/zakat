import React from "react";

const page = () => {
  return (
    <div>
      <div className="">
        <div className="cont">
          <span></span>
          <p>0xbaFC....9573</p>
        </div>
        <div className="w-[auto] justify-center sec_div">
          <div className=" text-sm flex flex-col sub">
            <label className="text-[#d5b380] ">
              Zakat Amount <span>(2.5% of total asset)</span>{" "}
            </label>
            <input id="file" class=" p-5 rounded-lg m-5  border" />

            <label className="text-[#d5b380] ">Message </label>
            <input
              id="file"
              class=" p-5 rounded-lg m-5  border"
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
