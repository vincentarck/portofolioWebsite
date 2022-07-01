import React from "react";
import Image from "next/image";
import Link from "next/link";
import resume from "../assets/resume.pdf";

function Header() {
  return (
    <div className="hidden md:block">
      <header className="flex justify-between font-mono px-12 w-full h-[100px] items-center">
        <Image src="/Union.svg" width={38} height={38} />
        <ol className="flex space-x-10 text-lightest-slate md:text-base items-center">
          <Link href="/#about">
            <li>About</li>
          </Link>
          <Link href="/#experience">
            <li>Experience</li>
          </Link>
          <Link href="/#work">
            <li>Work</li>
          </Link>
          <Link href="/#contact">
            <li>Contact</li>
          </Link>

          <Link href="/#contact">
            <button className="downloadResume"
            onClick={() => {
              const FileSaver = require("file-saver");
              FileSaver.saveAs("https://docdro.id/wU39d6U", "test.html")
            }}>
              Resume
            </button>
          </Link>
        </ol>
      </header>
    </div>
  );
}

export default Header;
