import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import islam from "@/public/images/islam_crypto.jpg";
import pexels from "@/public/images/pexels-movoyagee.jpg";
import medium from "@/public/images/medium.jpg";
import padlock from "@/public/images/gold-bitcoin-padlock.jpg";
import group from "@/public/images/group-african-kids.jpg";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-32 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <div className="gap-3 justify-start">
          <h2 className="text-[#ff9606] text-2xl sm:text-3xl font-bold ">
            Developing a Secure and Seamless Crypto Integration to pay your
            Zakat.
          </h2>
          <p className="mt-6 text-gray-800 justify-start ">
            Zakat Chain brings to you a fast and secure way of making your Zakat
            payments at the click of a button. Join our waitlist now to be on of
            the first to know when we launch!
          </p>
          <button className="rounded-2xl text-white bg-[#ff9606] p-2 my-5 font-semibold">
            Join the waitlist
          </button>
        </div>
        <div className="head-pic border-blue-900 rounded-lg border-4">
          <Image alt="pic" src={islam} className="w-full h-full rounded-lg" />
        </div>
      </div>
      <section className="mt-3 py-6 ">
        <div className=" bg-[#ff9606] p-6 m-6 justify-between rounded-lg text-white md:grid md:grid-cols-2 gap-4 items-center xl:gap-16 sm:py-16 xl:px-16 ">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              The Future of Zakat Payments
            </h2>
            <p className="text-white text-sm md:text-lg">
              Simplify your zakat payments and experience the seamless
              integration of web3 technology.
            </p>
          </div>
          <div className="m-0">
            <Image
              alt="pic"
              src={pexels}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>

        <div className=" bg-[#17163e] p-6 m-6 justify-between rounded-lg text-white md:grid md:grid-cols-2 gap-4 items-center xl:gap-16 sm:py-16 xl:px-16 ">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Your Sadaqah, Their Hope
            </h2>
            <p className="text-gray-200 text-sm md:text-lg">
              Your sadaqah directly supports worthy causes and empower
              underprivileged Muslims. Donate now
            </p>
          </div>
          <div>
            <Image
              alt="pic"
              src={medium}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className=" bg-[#ff9606] p-6 m-6 justify-between rounded-lg text-white md:grid md:grid-cols-2 gap-4 items-center xl:gap-16 sm:py-16 xl:px-16 ">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Transparent, Traceable and Shariah Compliant
            </h2>
            <p className="text-white text-sm md:text-lg">
              Every contribution tracked, every impact visible and every funds
              distributed according to Shariah. Donate now with confidence.
            </p>
          </div>
          <div>
            <Image
              alt="pic"
              src={padlock}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className=" bg-[#17163e] p-6 m-6 justify-between rounded-lg text-white md:grid md:grid-cols-2 gap-4 items-center xl:gap-16 sm:py-16 xl:px-16 ">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Greater Future for the Ummah
            </h2>
            <p className="text-gray-200 text-sm md:text-lg">
              Together, Let’s create a positive change and a better future for
              the ummah. Make a Difference today
            </p>
          </div>
          <div>
            <Image alt="pic" src={group} className="w-full h-full rounded-lg" />
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center flex-col">
        <h2 className="font-bold text-[#17163e] p-3 m-3 sm:text-3xl text-2xl">
          Join Our Waitlist
        </h2>
        <p className="text-sm font-normal w-[60%] text-[#17163e]">
          Be one of the first to know when we launch and pay Zakat with crypto
          through our fast and secured channels
        </p>
        <div className="mt-4">
          <button className="bg-[#17163e] rounded-2xl text-white p-2 m-4">
            Join Discord Channel
          </button>
          <button className=" rounded-2xl text-[#17163e] p-2 m-4 border-2 border-[#17163e]">
            Enter Email Address{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
