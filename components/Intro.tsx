import React from "react";
import Development from "./Development";
function Introm() {
  return (
    <div className="space-y-8 sm:mx-auto xl:mx-28 min-h-[80vh] flex items-center justify-center 
    flex-col 2xl:flex-row lg:mx-0">
      <div className="flex flex-col space-y-9 w-full">
        <p className="firstTitle">Hi, my name is</p>
        <h1 className="name">Vincent Laurensius Hambaya.</h1>
        <h2 className="name text-slate text-5xl">
        A Self-taught Programmer
        </h2>
        <p className="intro">
          I’m a Front End engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, digitalized-centered products at{" "}
          <a
            href="https://www.unitedtractors.com/en/company-overview/"
            className="text-green"
          >
            United Tractors
          </a>
          .
        </p>
      </div>
      <div className="w-full sm:w-3/5 2xl:w-4/6 relative z-10">
        <Development />
      </div>
    </div>
  );
}

export default Introm;
