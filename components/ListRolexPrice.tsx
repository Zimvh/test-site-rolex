import { ROLEX_PRICELST } from "@/constants";
import Image from "next/image";
import React from "react";

const ListRolexPrice = () => {
  return (
    <section className="flexCenter flex-col my-20">
      <div className="padding-container max-container w-full lg:px-56 px-6">
        <h2 className="text-center text-4xl font-bold mb-4 text-[24px] lg:text-[38px]">
          Price of Rolex watches have seen tremendous growth over the year.
        </h2>
        <div className="grid grid-cols-4 mb-[10px] pt-9 pb-0">
          {/* Column 1: Small Image */}
          <div className="col-span-1 items-center w-auto"></div>

          {/* Column 2: Title */}
          <div className="col-span-1 self-center text-[12px] lg:text-[16px]"></div>

          {/* Column 3: Price 1 */}
          <div className="col-span-1 self-center justify-self-center">
            <p className="text-[12px] lg:text-[16px] p-3 bg-gray-300">2015</p>
          </div>

          {/* Column 4: Price 2 */}
          <div className="col-span-1 self-center justify-self-center">
            <p className="text-[12px] lg:text-[16px] p-3 bg-gray-300">2022</p>
          </div>
        </div>
        <ul>
          {ROLEX_PRICELST.map((pricelist) => (
            <PriceListItem
              key={pricelist.title}
              picture={pricelist.picture}
              title={pricelist.title}
              price1={pricelist.price1}
              price2={pricelist.price2}
            />
          ))}
        </ul>
      </div>
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
