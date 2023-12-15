"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const DynamicDropdown = dynamic(() => import("@/components/Dropdown"), {
  ssr: false,
});
const DynamicShowcase = dynamic(() => import("@/components/Showcase"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="relative z-0 gradient-bg-welcome">
        <div className="gradient-bg-welcome bg-cover bg-no-repeat bg-center">
          <DynamicNavbar />
          <h1 className="text-3xl justify-center items-center">
            STILL UNDER CONSTRUCTION
          </h1>

          {/* <DynamicDropdown /> */}
          {/* <DynamicShowcase /> */}
        </div>
        <DynamicFooter />
      </div>
    </>
  );
}
