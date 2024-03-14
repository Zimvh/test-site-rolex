import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="md:block relative w-full h-[630px]">
      <Image
        // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/images/rolex-banner.png"
        // srcSet={{
        //   base: "/images/rolex-banner.png",
        //   sm: "/images/banner-sm.png",
        // }}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        // width={1000}
        // height={440}
        priority
      />
    </div>
  );
}
