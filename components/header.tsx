import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="flexCenter w-full flex-col">
      <div className="hidden lg:block max-container relative w-full h-[630px] flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        {" "}
        <Image
          src="/images/rolex-banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="lg:hidden max-container relative flex w-full h-[391px] flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        {" "}
        <Image
          src="/images/banner-rolex-mb.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
};

export default Header;
