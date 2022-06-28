import React from "react";
import Image from "next/image";
import GithubIcon from "../assets/GithubIcon";
import LinkdinIcon from "../assets/LinkedinIcon";
import InstagramIcon from "../assets/Instagram";
import TwitterIcon from "../assets/TwitterIcon";
import GmailIcon from "../assets/CibGmail";
function SocialMedia() {
  return (
    <div className="contSMsm lg:contSMmed">
      <div className="bottom lg:stick ">
        <a target="_blank" href="https://github.com/vincentarck?tab=repositories">
          <GithubIcon className="stroke-slate w-7 h-7 cursor-pointer" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/vincent-l-h-3413261a8/">
          <LinkdinIcon className="stroke-slate w-7 h-7 cursor-pointer" />
        </a>
        <a target="_blank" href="https://www.instagram.com/">
          <InstagramIcon className="stroke-slate w-7 h-7 cursor-pointer" />
        </a>
        <a target="_blank" href="https://mail.google.com">
          <GmailIcon className="text-slate w-7 h-7 cursor-pointer" />
        </a>
      </div>
      <div className="px-4 lg:stick">
        <p className="hidden lg:block lg:writing-mode-vertical text-center text-slate">
          <a href="https://mail.google.com" className="cursor-pointer">
            vincenthambaya@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default SocialMedia;
