import React, { MouseEventHandler, useState } from "react";
import {memory} from "../utils/data";

function Experience() {
  const [typeActive, setTypeActive] = useState("t1");
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 650;
  const borderActive = (type: string) =>
    type === typeActive ? "border-green" : "border-slate";
  const bgActive = (type: string) => type === typeActive && "bg-lightNavy";
  const textActive = (type: string) => type === typeActive && "text-green";
  const renderExp = memory.filter((data) => data.type === typeActive)[0];
  return (
    <div className="posisi2" id="exp">
      <h1 className="title relative">
        Where I've Learned and Worked <div className="divider"></div>
      </h1>
      <div className="flex flex-col max-w-full space-y-4
      sm:my-9 sm:gap-x-6 sm:flex-row">
        <div className="flex overflow-x-auto max-w-full 
        sm:flex-1 sm:flex-wrap sm:h-fit font-mono">
          {memory.map((data, ind) => {
            return (
              <button
              key={ind}
                onClick={() => setTypeActive(data.type)}
                className={`flex items-center border-b-2 sm:border-l-2 sm:border-b-0 ${borderActive(
                  data.type
                )} ${textActive(data.type)} ${bgActive(data.type)} min-w-max sm:min-w-fit
          sm:h-16 lg:h-12 pl-3 transition-all ease-in duration-200 py-4 sm:py-0
          pr-2 delay-75 hover:bg-lightNavy hover:text-green rounded-sm text-sm`}
              >
                <span className="text-left">{data.company}</span>
              </button>
            );
          })}
        </div>
        <div className="sm:flex-[4] space-y-4">
          <>
            <h1 className="font-bold text-lg">
              {renderExp.responsibility}{" "}
              <a href={renderExp.url} target="_blank" className="text-xl text-green">
                @{renderExp.company}
              </a>
            </h1>
            <span>{renderExp.time}</span>
            {renderExp.desc.map((job, ind) => (
              <p key={ind} className="text-sm relative text-slate before:content-['▹']
              before:absolute before:left-0 before:text-green pl-6">{job}</p>
            ))}
          </>
        </div>
      </div>
    </div>
  );
}

export default Experience;
