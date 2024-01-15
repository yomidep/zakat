"use client";

import React, { Fragment, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import islam from "@/public/images/share.jpg";
import pexels from "@/public/images/btc-city-large.webp";
import medium from "@/public/images/medium.jpg";
import padlock from "@/public/images/gold-bitcoin-padlock.jpg";
import group from "@/public/images/group-african-kids.jpg";
import students from "@/public/images/bus_people.jpg";
import dynamic from "next/dynamic";
import supabase from "@/config/supabaseClient.js";
import Modal from "@/components/Modal";

const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const Page = () => {
  const [email, setEmail] = useState("");

  const [formError, setFormError] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const Joinwaitlist = async (e) => {
    e.preventDefault();

    if (!email) {
      setFormError("Please enter your email correctly!");
      return;
    }

    const { data, error } = await supabase
      .from("emails")
      .upsert([{ email }], { onConflict: ["email"] });

    if (error) {
      setFormError("Error updating email!");
      console.error(error);
    }

    if (data) {
      console.log(data);
      setFormError(null);
      setEmail(""); // Clear the email input after successful submission
      setSuccessMessage("Email submitted successfully!");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Fragment>
        <Navbar />
        <div className="mt-16 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
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
              Zakat Chain brings to you a fast and secure way of making your
              Zakat payments at the click of a button. Join our waitlist now to
              be on of the first to know when we launch!
            </p>
            <button
              className="rounded-2xl text-white bg-[#ff9606] hover:bg-[#be7f26] p-2 my-5 font-semibold"
              onClick={() => setShowModal(true)}
            >
              Join our waitlist
            </button>
          </div>
          <div className="head-pic border-blue-900 rounded-lg border-4 sm:h-[350px] sm:w-[320px] h-full w-[350px] ">
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
            <div className="m-auto sm:h-[300px] sm:w-[280px] h-[250px] w-full overflow-hidden items-center justify-center ">
              <Image
                alt="pic"
                src={pexels}
                className="w-full h-full object-cover rounded-lg items-center justify-center"
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

            <div className="m-auto sm:h-[300px] sm:w-[280px] h-[250px] w-full overflow-hidden items-center justify-center ">
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
            <div className="m-auto sm:h-[300px] sm:w-[280px] h-[250px] w-full overflow-hidden items-center justify-center ">
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
            <div className="bg-gray-500 p-1 m-4 rounded-xl flex justify-between h-[55px]">
              <form
                onSubmit={Joinwaitlist}
                className="flex justify-between w-full"
              >
                <input
                  type="string"
                  id="email"
                  value={email}
                  placeholder="Enter your email address..."
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none text-white"
                />
                <button className=" rounded-xl bg-[#17163e] hover:bg-[#211f59] text-white p-2 m-1 border-2 border-[#17163e] ">
                  Submit{" "}
                </button>
              </form>
            </div>
            <button className="bg-[#17163e] rounded-2xl text-white p-2 m-4 w-auto">
              Join Discord Channel
            </button>
          </div>
        </div>
        <DynamicFooter />
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </Fragment>
    </div>
  );
};

export default Page;
