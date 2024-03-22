"use client";

import { ROLEX_PRICELST } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ListRolexPrice = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="flexCenter flex-col my-20 relative">
      <div className="padding-container max-container w-full lg:px-72 px-6">
        <h2 className="text-center text-4xl font-bold mb-4 text-[24px] lg:text-[38px] lg:mx-14 lg:leading-[60px]">
          Price of Rolex watches have seen tremendous growth over the year.
        </h2>
        <div className="grid grid-cols-4 mb-[10px] pt-9 pb-0">
          {/* Column 1: Small Image */}
          <div className="col-span-1 items-center w-auto"></div>

          {/* Column 2: Title */}
          <div className="col-span-1 self-center text-[12px] lg:text-[16px]"></div>

          <div className="col-span-1 self-center justify-self-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-white to-gray-300"></div>
            <p className="text-[12px] lg:text-[16px] px-5 relative z-10">
              2015
            </p>
          </div>

          <div className="col-span-1 self-center justify-self-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-white to-gray-300"></div>
            <p className="text-[12px] lg:text-[16px] px-5 relative z-10">
              2022
            </p>
          </div>
        </div>
        <ul>
          {ROLEX_PRICELST.slice(
            0,
            isMobile && !expanded ? 3 : ROLEX_PRICELST.length
          ).map((pricelist) => (
            <PriceListItem
              key={pricelist.title}
              picture={pricelist.picture}
              title={pricelist.title}
              price1={pricelist.price1}
              price2={pricelist.price2}
            />
          ))}
        </ul>
        {!expanded && isMobile && (
          <button
            className="relative text-center block mx-auto mb-4 mt-16 px-8 py-2 bg-[#31452A] text-white rounded-3xl z-20"
            onClick={toggleExpansion}
          >
            See more
          </button>
        )}
      </div>
      {/* Bottom div with blurry effect */}
      {isMobile && !expanded && (
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-transparent to-white blur-md"></div>
      )}
    </section>
  );
};

type PriceListItem = {
  picture: string;
  title: string;
  price1: string;
  price2: string;
};

const PriceListItem = ({ picture, title, price1, price2 }: PriceListItem) => {
  return (
    <div className="grid grid-cols-4 mb-[10px] border-b-2">
      {/* Column 1: Small Image */}
      <div className="col-span-1 items-center w-auto">
        {" "}
        <Image
          src={picture}
          width={100}
          height={100}
          alt={title}
          title={title}
        />
      </div>

      {/* Column 2: Title */}
      <div className="col-span-1 self-center text-[12px] lg:text-[16px]">
        {title}
      </div>

      {/* Column 3: Price 1 */}
      <div className="col-span-1 self-center justify-self-center">
        <p className="text-[12px] lg:text-[16px]">{price1}</p>
      </div>

      {/* Column 4: Price 2 */}
      <div className="col-span-1 self-center justify-self-center">
        <p className="text-[12px] lg:text-[16px]">{price2}</p>
      </div>
    </div>
  );
};

export default ListRolexPrice;
