import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="font-semibold text-[#FF7A00] text-xl  flex items-center gap-x-2">
      <svg
        id="logo-38"
        width="60px"
        height="60px"
        viewBox="0 0 78 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
          className="ccustom"
          fill="#FF7A00"
        ></path>{" "}
        <path
          d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
          className="ccompli1"
          fill="#FF9736"
        ></path>{" "}
        <path
          d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
          className="ccompli2"
          fill="#FFBC7D"
        ></path>{" "}
      </svg>
      <span>
        NXTHOUSE
      </span>
    </Link>
  );
};

export default Logo;
