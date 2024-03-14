import Image from "next/image";
import React from "react";
import Header from "@/components/header";
import Intro from "@/components/intro";
import News from "@/components/news";
import { Button } from "@material-tailwind/react";
import Search from "@/components/search";
import Rolexprice from "@/components/rolexprice";
import ComparePrice from "@/components/ComparePrice";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <div className="z-10 max-w-5xl md:w-full items-center justify-between font-mono text-sm">
          <p className="text-[8px] pt-2 font-sans font-helvetica text-[#767778]">
            Sell Your Branded Watch | High Price Purchase | JEWEL CAFE Malaysia
          </p>

          <p className="md:fixed left-0 top-0 flex w-full py-[14px] lg:static">
            <Image
              src="/images/jc-logo.png"
              alt="JC Rolex New"
              // className="dark:invert"
              width={150}
              height={150}
              priority
            />
          </p>
        </div>

        <Header />
        <Intro />
        <Search />
        <Rolexprice />
        <ComparePrice />
      </div>
    </main>
  );
}
