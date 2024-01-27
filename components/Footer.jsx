import React from "react";
import Image from "next/image";
import ig from "@/public/images/ig-img.png";
import x from "@/public/images/simple-icons_x.png";
// import logo from "@/public/assets/skalez_logo.png";

const Footer = () => {
  return (
    <footer className="border footer z-10 border-t-[#33353F] bg-[#ff9606] mt-12 bottom-0">
      <div className=" py-3 flex flex-col justify-center items-center w-full m-auto">
        <span className="bg-white my-8 w-full p-0 border justify-center">
          {/* <Image src={logo} className="cursor-pointer w-28" alt="footer-logo" /> */}
        </span>
        <p className="text-white">All rights reserved.</p>
        <div className="flex gap-3 mt-5">
          <Image src={ig} className="w-8 h-8" alt="ig" />
          <Image src={x} className="w-8 h-8 rounded-md" alt="ig" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
