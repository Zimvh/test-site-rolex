import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 pt-1 pb-4 lg:px-20 px-8">
      <p className="text-[10px] text-gray-300 py-1">
        Sell Your Branded Watch | High Price Purchase | JEWEL CAFE Malaysia
      </p>
      <Link href="/">
        <Image
          src="/images/jc-logo.png"
          height={150}
          width={150}
          alt="jc-logo"
          title="Jewel Cafe Logo"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
