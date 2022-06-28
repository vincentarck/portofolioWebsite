import React from "react";
import GithubIcon from "../assets/GithubIcon";
import Go from "../assets/Go";
import { works } from "../utils/data";
function Work() {

  return (
    <div className="posisi1 w-full space-y-20" id="work">
      <h1 className="title relative">
        Some Things I've Built
        <div className="divider"></div>
      </h1>
      {works &&
        works.map((work, i) => {
          const pos = i % 2 === 0;
          return (
            <div>
              <div
                className={`flex flex-col md:flex-row w-full ${
                  pos ? "md:justify-start" : "md:justify-end"
                } mb-32 relative`}
              >
                <div className="mx-0 w-full md:w-[75%] h-auto relative">
                  <img src={work.img} className="w-full h-auto" alt="" />
                  
                  <p className={`absolute rounded-full top-[-30px] left-[-30px] w-[70px] h-[70px]
                    bg-darkSlate px-1 py-3 z[-2] break-words text-center ${work.onProgress ? "text-rose" : "text-green"} 
                    flex items-center justify-center text-sm`}>
                      {work.onProgress ? "Still Progress" : "Finished"}
                    </p>
                </div>
                <div
                  className={`flex flex-col md:absolute ${
                    pos ? "md:items-end" : "md:items-start"
                  } 
            right-0 md:mr-16 md:py-6 lg:py-0 lg:mr-0 md:mt-8 bg-lightNavy md:bg-opacity-0
            px-4 md:px-0`}
                >
                  <p className="firstTitle text-xs font-bold mt-14 sm:mt-0">
                    Featured Project
                  </p>
                  <h1 className="font-sans text-lightest-slate text-2xl md:text-3xl my-5">
                    {work.name}
                  </h1>
                  <p className="py-4 md:px-7 rounded bg-lightNavy sm:max-w-[80%] md:max-w-[60%] relative">
                    {work.idea}
                  </p>
                  <div
                    className="flex font-bold gap-x-4 md:pt-3 sm:max-w-[80%] lg:max-w-[60%] flex-wrap gap-y-2 
          text-slate text-xs"
                  >
                    {work.stacks.map((tech) => (
                      <span>{tech}</span>
                    ))}
                  </div>

                  <div
                    className={`flex gap-x-6 bottom-[-50px] ${
                      pos ? "md:justify-end" : "md:justify-start"
                    }-0 my-4`}
                  >
                    <a href={work.linkGit} target="_blank">
                      <GithubIcon className="stroke-slate w-8 cursor-pointer" />
                    </a>
                    <a href={work.linkPro} target="_blank">
                      <Go className="cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Work;
