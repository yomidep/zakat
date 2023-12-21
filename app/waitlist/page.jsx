"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import islam from "@/public/images/islam_crypto.jpg";
import pexels from "@/public/images/newportrait.png";
import medium from "@/public/images/medium.jpg";
import padlock from "@/public/images/gold-bitcoin-padlock.jpg";
import group from "@/public/images/group-african-kids.jpg";
import students from "@/public/images/students.png";
import dynamic from "next/dynamic";
import supabase from "@/config/supabaseClient";
import { set } from "mongoose";

const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const Page = () => {

  const [email, setEmail] = useState("");
  co
  const [formError, setFormError] = useState(null);


  const Joinwaitlist = async () => {

    if (!email) {
      setFormError("please enter your email correctly!");
      return;
    }

    const {data, error} = await supabase
    .from('emails')
    .update({email: email})
    .eq('id', id)
    .select() 
    
    if (error) {
      setFormError("Enter the correct email !");
    }

    if (data) {
      setFormError(null);
      setEmail(email);
    }
  };


  return (
    <div>
      <Navbar />
      <div className="mt-32 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <div className="gap-3 justify-start">
          <h2 className="text-[#ff9606] text-2xl sm:text-3xl font-bold ">
            Building a faster and{" "}
            <span className="text-[#17163e]">
              {" "}
              most secure Blockchain platform{" "}
            </span>{" "}
            for your Zakat and Sadaqah payments.
          </h2>
          <p className="mt-6 text-gray-800 justify-start ">
            Zakat Chain brings to you a fast and secure way of making your Zakat
            payments at the click of a button. Join our waitlist now to be on of
            the first to know when we launch!
          </p>
          <button className="rounded-2xl text-white bg-[#ff9606] p-2 my-5 font-semibold">
            Join our waitlist
          </button>
        </div>
        <div className="head-pic border-blue-900 rounded-lg border-4">
          <Image alt="pic" src={islam} className="w-full h-full rounded-lg" />
        </div>
      </div>
      <section className="mt-3 py-6 ">
        <div className=" bg-[#17163e] p-6 m-6 justify-between rounded-lg text-white md:grid md:grid-cols-2 gap-4 items-center xl:gap-16 sm:py-8 xl:px-12 ">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              The Future of Zakat and Sadaqah Payments
            </h2>
            <p className="text-white text-sm mb-3">
              Simplify your zakat payments and experience the seamless
              integration of web3 technology.
            </p>
          </div>
          <div className="m-0">
            <Image
              alt="pic"
              src={pexels}
              className="w-full h-[250px] md:h-full rounded-lg items-center justify-center"
            />
          </div>
        </div>

        <div className=" bg-[#ff9606] p-6 m-6 justify-between rounded-lg text-white md:grid md:grid-cols-2 gap-4 items-center xl:gap-16 sm:py-8 xl:px-12 ">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Transparent, Traceable and Shariah Compliant
            </h2>
            <p className="text-white text-sm mb-3">
              Every contribution tracked, every impact visible and every funds
              distributed according to Shariah.
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
        <div className=" bg-[#17163e] p-6 m-6 justify-between rounded-lg text-white md:grid md:grid-cols-2 gap-4 items-center xl:gap-16 sm:py-8 xl:px-12 ">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Greater Future for the Ummah
            </h2>
            <p className="text-gray-200 text-sm mb-3">
              Together, Let’s create a positive change and a better future for
              the ummah. Make a Difference today
            </p>
          </div>
          <div>
            <Image
              alt="pic"
              src={students}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center flex-col">
        <h2 className="font-bold text-[#17163e] p-3 m-3 sm:text-3xl text-2xl text-center">
          Be among the first to experience the future of Zakat
        </h2>
        <p className="text-sm font-normal w-auto text-[#17163e] justify-start items-start text-center">
          Join our waitlist today and be notified as soon as we launch!
        </p>
        <div className="mt-4 flex flex-col sm:flex-row w-full justify-center">
          <button className="bg-[#17163e] rounded-2xl text-white p-2 m-4 w-auto">
            Join Discord Channel
          </button>
          <div>
            <form onSubmit={Joinwaitlist}>
                <label htmlFor="email">E-mail</label>
                <input type="string"
                id="email" 
                value={email}/>
              <button className=" rounded-2xl text-[#17163e] p-2 m-4 border-2 border-[#17163e]">
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
      <DynamicFooter />
    </div>
  );
};

export default Page;
