import React from "react";

const Showcase = () => {
  return (
    <section>
      <div className="border p-5 m-3 ">
        <div className="w-full items-center justify-center">
          <h1>Project Showcase</h1>
          <p>Our works speaks for us</p>
        </div>
        <div className="flex flex-row gap-5 items-center justify-between">
          <div className="justify-center items-center">
            <div className="rounded-full p-8 flex items-center border flex-col">
              <div className="icon"></div>
              <p className="text-2xl font-bold">10k</p>
              <p>Zekat Payers</p>
            </div>
            <span>Zekat</span>
          </div>

          <div className="justify-center items-center">
            <div className="rounded-full p-8 flex items-center border flex-col">
              <div className="icon"></div>
              <p className="text-2xl font-bold">20k</p>
              <p>Sadaqaah Payers</p>
            </div>
            <span>Sedaqah</span>
          </div>

          <div className="justify-center items-center">
            <div className="rounded-full p-8 flex items-center border flex-col">
              <div className="icon"></div>
              <p className="text-2xl font-bold">1m</p>
              <p>Beneficiaries</p>
            </div>
            <span>Beneficiaries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
