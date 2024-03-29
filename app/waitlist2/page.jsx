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
import { RiQuestionnaireFill } from "react-icons/ri";

const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const Page = () => {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled to the bottom
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setScrolledToBottom(isBottom);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      // Don't submit if the input is empty
      return;
    }

    setSubmitted(true);
  };

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

  const handleCloseModal = () => {
    // Reset the state when the modal is closed
    setSubmitted(false);
    setInputValue("");
    setShowModal(false);
  };

  return (
    <div>
      <Fragment>
        <Navbar />

        <div className="justify-center items-center">
          <div
            className="bg-[#17163e] rounded-lg fixed bottom-32 right-4 text-white flex flex-row p-3"
            onClick={() => setShowModal(true)}
          >
            {" "}
            <p className="p-2 items text-[#ff9606] text-sm">
              Got questions or opinions? <br />
              Click here{" "}
            </p>
            <div className=" justify-center items-center flex rounded-lg">
              <RiQuestionnaireFill className="text-5xl text-[#ff9606]" />
            </div>
          </div>
        </div>
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
              onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth", // Use smooth scrolling effect
                });
              }}
            >
              Join our waitlist
            </button>
          </div>
          <div className="head-pic  rounded-lg border-4 sm:h-[350px] sm:w-[400px] h-full w-[350px] flex justify-center items-center">
            <div className="head-pic border-blue-900 rounded-lg border-4 sm:h-[350px] sm:w-[400px] h-full w-[350px]">
              <Image
                alt="pic"
                src={islam}
                className="w-auto h-full rounded-lg "
              />
            </div>
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
        {/* <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div>
            <textarea
              // value={value}
              // onChange={onChange}
              rows={4} // Set the number of visible rows
              placeholder="Enter your text here..."
              className="border p-2 w-full"
            />
            <div>
              <div className="flex justify-end">
                <button className=" rounded-xl bg-[#17163e] hover:bg-[#211f59] text-white p-2 m-1 border-2 border-[#17163e] flex justify-end">
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>
        </Modal> */}

        <Modal isVisible={showModal} onClose={handleCloseModal}>
          <div className="rounded-2xl">
            {submitted ? (
              <div className="m-5 ">
                <div className="flex justify-center items-center flex-col text-center">
                  <p className="">
                    Thank you for joining ZakatChain! You are now a part of
                    ZakatChain community!{" "}
                  </p>
                  <p>
                    Earn divine rewards from Allah by spreading the word of
                    Zakat Chain.
                  </p>
                  <div className="w-[100%] items-center ">
                    <button className="text-white bg-[#ff9606] rounded-lg m-3 p-3 w-[80%]">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" flex flex-col">
                <textarea
                  rows={4}
                  placeholder="Enter your text here..."
                  className="border p-2 w-auto m-3 items-center "
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  required
                />

                <div className="flex justify-end items-end">
                  <button
                    onClick={handleSubmit}
                    disabled={inputValue.trim() === ""}
                    className={`rounded-xl ${
                      inputValue.trim() === ""
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#17163e] hover:bg-[#211f59] text-white"
                    } p-2 m-1 border-2 border-[#17163e] flex justify-end`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </Modal>
      </Fragment>
    </div>
  );
};

export default Page;
