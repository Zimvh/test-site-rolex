import Image from "next/image";
import React from "react";

import { Button } from "@material-tailwind/react";

import ComparePrice from "@/components/ComparePrice";

import BrokenWatch from "@/components/BrokenWatch";
import PointPurchaseRolex from "@/components/PointPurchaseRolex";
import HigherPrice from "@/components/HigherPrice";
import PriceTable from "@/components/PriceTable";
import RolexHigherPrice from "@/components/RolexHigherPrice";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Search from "@/components/Search";
import Rolexprice from "@/components/Rolexprice";
import TypeOfRolex from "@/components/TypeOfRolex";
import Faq from "@/components/Faq";
import CustReviews from "@/components/CustReviews";
import RolexRanking from "@/components/RolexRanking";
import News from "@/components/News";

export default function Home() {
  return (
    <>
      <Header />
      <News />
      <Intro />
      <Search />
      <Rolexprice />
      <ComparePrice />
      <BrokenWatch />
      <PointPurchaseRolex />
      <HigherPrice />
      <PriceTable />
      <RolexHigherPrice />
      <TypeOfRolex />
      <Faq />
      <CustReviews />
      <RolexRanking />
    </>
  );
}