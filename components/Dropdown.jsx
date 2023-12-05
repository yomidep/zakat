"use client";
import React from "react";
import { styles } from "@/app/styles";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import Link from "next/link";

const Dropdown = () => {
  return (
    <section className="w-full mx-auto mt-32">
      <div
        className={` inset-0 top-[120px]   mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}
      >
        <div className="w-full bg-orange-300 p-32 my-10">
          Zakat <IoIosArrowDown />{" "}
          <div>
            <Link href="/pay" className="border bg-white rounded-full p-3">
              Pay now{" "}
            </Link>
          </div>
        </div>
        <div className="w-full bg-orange-300 p-32 my-10">
          Sadaqaah <IoIosArrowUp />{" "}
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
