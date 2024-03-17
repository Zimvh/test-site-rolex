import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    // <div>
    //   <div className="relative w-full h-[630px]">
    //     <Image
    //       // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/images/rolex-banner.png"
    //       // srcSet={{
    //       //   base: "/images/rolex-banner.png",
    //       //   sm: "/images/banner-sm.png",
    //       // }}
    //       alt="Banner"
    //       layout="fill"
    //       objectFit="cover"
    //       // width={1000}
    //       // height={440}
    //       priority
    //     />
    //   </div>
    // </div>

    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="hidden lg:block max-container relative flex w-full h-[630px] flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        {" "}
        <Image
          src="/images/rolex-banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="lg:hidden max-container relative flex w-full h-[388px] flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
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
}
