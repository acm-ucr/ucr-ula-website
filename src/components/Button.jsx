import Link from "next/link";
import React from "react";

const Button = ({ name, link }) => {
  return (
    <Link href={link} className="no-underline">
      <div className="px-3 py-2 bg-ula-blue w-fit text-white shadow-[5px_-5px_0px_0px_#FFB81C] my-2 text-base md:text-xl">
        {name}
      </div>
    </Link>
  );
};

export default Button;
