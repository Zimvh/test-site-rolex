import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 px-20">
      <Link href="/">
        <Image src="/images/jc-logo.png" height={150} width={150} />
      </Link>
    </nav>
  );
};

export default Navbar;
