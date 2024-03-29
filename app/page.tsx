import Image from "next/image";
import React from "react";

import { Button } from "@material-tailwind/react";

import ComparePrice from "@/components/ComparePrice";

import BrokenWatch from "@/components/BrokenWatch";
import PointPurchaseRolex from "@/components/PointPurchaseRolex";
import HigherPrice from "@/components/HigherPrice";
import PriceTable from "@/components/PriceTable";
import RolexHigherPrice from "@/components/RolexHigherPrice";

import TypeOfRolex from "@/components/TypeOfRolex";
import Faq from "@/components/Faq";
import CustReviews from "@/components/CustReviews";
import RolexRanking from "@/components/RolexRanking";
import Header from "@/components/Top";
import News from "@/components/TopNews";
import WhySellRolex from "@/components/WhySellRolex";
import CheckPrice from "@/components/CheckPrice";
import ListRolexPrice from "@/components/ListRolexPrice";

export default function Home() {
  return (
    <>
      <Header />
      <News />
      <WhySellRolex />
      <CheckPrice />
      <ListRolexPrice />
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
