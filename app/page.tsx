import Image from "next/image";
import React from "react";

import { Button } from "@material-tailwind/react";

import ComparePrice from "@/components/ComparePrice";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Search from "@/components/Search";
import Rolexprice from "@/components/Rolexprice";

import BrokenWatch from "@/components/BrokenWatch";
import PointPurchaseRolex from "@/components/PointPurchaseRolex";
import HigherPrice from "@/components/HigherPrice";
import PriceTable from "@/components/PriceTable";

export default function Home() {
  return (
    <>
      <Header />

      <Intro />
      <Search />
      <Rolexprice />
      <ComparePrice />
      <BrokenWatch />
      <PointPurchaseRolex />
      <HigherPrice />
      <PriceTable />
    </>
    // <main className="flex justify-center">
    //   <div className="flex min-h-screen flex-col items-center justify-between">
    //     <div className="z-10 max-w-5xl md:w-full items-center justify-between font-mono text-sm">
    //       <p className="text-[8px] pt-2 font-sans font-helvetica text-[#767778]">
    //         Sell Your Branded Watch | High Price Purchase | JEWEL CAFE Malaysia
    //       </p>

    //       <p className="md:fixed left-0 top-0 flex w-full py-[14px] lg:static">
    //         <Image
    //           src="/images/jc-logo.png"
    //           alt="JC Rolex New"
    //           // className="dark:invert"
    //           width={150}
    //           height={150}
    //           priority
    //         />
    //       </p>
    //     </div>

    //     <Header />
    //     <Intro />
    //     <Search />
    //     <Rolexprice />
    //     <ComparePrice />
    //   </div>
    // </main>
  );
}
