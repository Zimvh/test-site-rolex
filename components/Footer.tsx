"use client";

import { FOOTER, OUTLET } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type FooterListItem = {
  title: string;
  link: string;
};

type OutletListItemProps = {
  outlet: {
    name: string;
    address: string;
    tel: string;
  };
};

const OutletListItem: React.FC<OutletListItemProps> = ({ outlet }) => {
  const { name, address, tel } = outlet;

  return (
    <div>
      <p className="font-bold text-green-950 my-1">{name}</p>
      <p className="text-[12px] my-1">{address}</p>

      <div className="flex">
        <p className="font-bold">{tel}</p>
        <p className="border border-green-950 lg:ml-40 ml-28 font-bold px-2">
          More Info
        </p>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [uniqueState, setUniqueState] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [outletsInSelectedState, setOutletsInSelectedState] = useState<
    { name: string; address: string; tel: string }[]
  >([]);

  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);

  useEffect(() => {
    if (uniqueState.length > 0) {
      // Initially select the first state
      handleStateClick(uniqueState[0]);
    }
  }, [uniqueState]);

  const fetchData = async () => {
    try {
      // Get unique categories
      const states = Array.from(new Set(OUTLET.map((item) => item.state)));
      setUniqueState(states);

      console.log(uniqueState);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleStateClick = (state: string) => {
    setSelectedState(state);
    const filteredOutlets = OUTLET.filter((item) => item.state === state);
    setOutletsInSelectedState(filteredOutlets);
  };

  return (
    <footer className="flexCenter flex-col mt-10 bg-[#EDF4ED] py-5">
      <div className="padding-container max-container flex w-full flex-col lg:px-56 px-6">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row mt-9">
          <Link href="/" className="mb-10">
            <Image
              src="/images/footer-logo.png"
              alt="logo"
              width={500}
              height={500}
              title="Footer logo"
            />
          </Link>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap lg:px-96  px-6 justify-center">
          {FOOTER.map((footerList, index) => (
            <FooterListItem
              key={index}
              title={footerList.title}
              link={footerList.link}
            />
          ))}
        </ul>
      </div>

      <div className="flex justify-center my-5">
        <div className="flex items-center bg-green-800 rounded-lg w-96 mx-5">
          <Image
            src="/images/woman.png"
            alt="Woman Jewel Cafe"
            width={100}
            height={150}
            className="absolute pb-[22px]"
            title="Woman JC"
          />
          <p className="text-[26px] flex flex-wrap m-4 text-white font-semibold ml-[120px]">
            Jewel Cafe Outlet Staff Recruitment
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-9">
        <p className="font-bold text-[34px] text-green-900 text-center">
          Jewel Cafe Has 250 Stores Worldwide
        </p>
      </div>

      <div className="flex justify-center my-9 mx-5">
        <div className="flex rounded-md gap-3 ">
          {uniqueState.map((state, index) => (
            <div
              key={index}
              className={`rounded-md cursor-pointer ${
                selectedState === state ? "bg-green-900" : "bg-[#BED8B2] "
              }`}
              onClick={() => handleStateClick(state)}
            >
              <button className="p-3 lg:min-w-[200px] text-center font-bold lg:text-[20px] text-white">
                {state}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flexCenter flex-col">
        <div className="padding-container max-container w-full lg:px-56 px-6">
          <div className="lg:flex w-full lg:px-12 my-10 gap-5">
            <div className="">
              {selectedState && (
                <div className="max-container">
                  <div className="flex justify-center max-container w-full bg-green-900 rounded-md">
                    <p className=" text-white text-[24px] font-bold px-20">
                      {selectedState}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {outletsInSelectedState.map((outlet, index) => (
                      <OutletListItem key={index} outlet={outlet} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:flex text-center gap-32 justify-center font-bold text-md text-green-950 my-10">
            <p>Jewel Cafe Overseas</p>
            <p>Japan | Hong Kong | Taiwan | Singapore | Thailand</p>
          </div>
        </div>
      </div>

      <p className="font-thin text-[12px] w-full text-center text-gray-30">
        ⓒ JEWEL CAFE All Right Reserved.
      </p>
    </footer>
  );
};

const FooterListItem: React.FC<FooterListItem> = ({ title, link }) => {
  return (
    <li className="flex flex-wrap m-4">
      <Link href="/" className="">
        {title}
      </Link>
      <p className="ml-4">|</p>
    </li>
  );
};

export default Footer;
