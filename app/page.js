"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Dropdown from "@/components/Dropdown";
import { BrowserRouter } from "react-router-dom";
import Showcase from "@/components/Showcase";

export default function Home() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      // Code that requires the document object
      // For example, if you need to access the document title:
      document.title = "Your Page Title";
    }
  }, []);
  return (
    <>
      <div className="relative z-0 gradient-bg-welcome">
        <div className="gradient-bg-welcome bg-cover bg-no-repeat bg-center">
          <Navbar />
          <HeroSection />
          <Dropdown />
          <Showcase />
        </div>
      </div>
    </>
  );
}
