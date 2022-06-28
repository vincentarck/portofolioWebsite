import React, { SVGProps } from "react";

export function ShowMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
      className="w-8 h-8 stroke-green md:hidden"
    >
      <path
        fill="currentColor"
        d="M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z"
      ></path>
    </svg>
  );
}
export default ShowMenu;
