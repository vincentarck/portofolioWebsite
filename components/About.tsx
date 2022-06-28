import React from "react";

function About() {
  return (
    <div id="about" className="posisi1">
      <h1 className="title relative">
        About Me
        <div className="divider"></div>
      </h1>
      <div className="wrapper max-w-xl lg:max-w-full">
        <div className=" w-full lg:flex-[3] mr-7 space-y-5">
          <p className="text-slate">
            Hello! My name is Vincent and I enjoy creating things that live on
            the internet. My interest in web development started back in 2021
            when I decided to move on from data and try a web development course
            on Udemy — it turned out to be being able to see firsthand the
            changes made instilled my love for this world of web
          </p>
          <p className="text-slate">
            Fast forward to today, and I have the privilege of both working and
            studying at a large corporations, Bootcamp and government companies,
            My main focus these days is building accessible, inclusive products
            and digital experiences at{" "}
            <a
              href="https://www.unitedtractors.com/en/company-overview/"
              className="text-green"
            >
              United Tractors
            </a>{" "}
            for a variety of clients.
          </p>
          <p className="text-slate">
            On another occasion I also learned a lot of stacks, especially on
            Frontend like NextJS, TypeScript and Redux. not by memorizing or
            getting used to using it, because I'm sure all of that will be
            forgotten. rather I'm trying to understand a pattern of those
            stacks.
          </p>
        </div>
        <div className="flex-[2] relative h-fit">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="mt-12 lg:mt-0 sm:w-[60%] md:w-[70%] lg:w-full h-auto m-auto"
          />
          <div
            className="shadowGreen
          "
          ></div>
        </div>
      </div>
    </div>
  );
}

export default About;
