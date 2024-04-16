import { HIGHERPRICE, ROLEXPRICETABLE } from "@/constants";
import React from "react";
import Image from "next/image";

const PriceTable = () => {
  return (
    <section className="flexCenter flex-col mt-10">
      <div className="padding-container max-container w-full lg:px-72 px-3">
        <h2 className="text-center text-4xl font-bold mb-4 text-[24px] lg:text-[38px]">
          Rolex purchase price table
        </h2>

        <div>
          <ul className="mt-10 grid gap-5 grid-cols-2 lg:grid-cols-4">
            {ROLEXPRICETABLE.map((rolexPriceTable) => (
              <RolexPriceTableItem
                key={rolexPriceTable.brand}
                brand={rolexPriceTable.brand}
                model={rolexPriceTable.model}
                modelNum={rolexPriceTable.modelNum}
                graph={rolexPriceTable.graph}
                picture={rolexPriceTable.picture}
                desc1={rolexPriceTable.desc1}
                desc2={rolexPriceTable.desc2}
                price={rolexPriceTable.price}
                lastUpdate={rolexPriceTable.lastUpdate}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type RolexPriceTableItem = {
  brand: string;
  model: string;
  modelNum: string;
  graph: string;
  picture: string;
  desc1: string;
  desc2: string;
  price: string;
  lastUpdate: string;
};

const RolexPriceTableItem = ({
  brand,
  model,
  modelNum,
  graph,
  picture,
  desc1,
  desc2,
  price,
  lastUpdate,
}: RolexPriceTableItem) => {
  return (
    // <li className="border-2 border-black rounded-xl">
    <li className="text-center">
      <div className="relative w-full h-[206px] lg:h-[246px]">
        <Image
          src={graph}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          // width={100}
          // height={440}
          priority
          title="Jewel Cafe Rolex Banner"
        />
      </div>
    </li>
    // </li>
    // <li className="border-2 border-black rounded-xl">
    //   <div className="p-4 text-center">
    //     <div className="text-left">
    //       <p className="text-[14px] lg:text-[16px]">{brand}</p>
    //       <p className="text-[14px] lg:text-[16px] text-[#265C26] font-bold">
    //         {model}
    //       </p>
    //       <p className="text-[14px] lg:text-[16px]">{modelNum}</p>
    //     </div>

    //     <div className="relative w-full h-[53px] lg:h-[86px]">
    //       <Image
    //         src={graph}
    //         alt="Banner"
    //         layout="fill"
    //         objectFit="cover"
    //         // width={100}
    //         // height={440}
    //         priority
    //         title="Jewel Cafe Rolex Banner"
    //       />
    //     </div>
    //     <div className="flex">
    //       <div className="relative self-end">
    //         <Image
    //           src={picture}
    //           alt="Banner"
    //           //   layout="fill"
    //           //   objectFit="cover"
    //           width={40}
    //           height={40}
    //           priority
    //           title={brand}
    //         />
    //       </div>
    //       <div className="text-end mt-3 w-36  ">
    //         <p className="text-xs">{desc1}</p>
    //         <p className="text-[9px] lg:text-xs">{desc2}</p>
    //         <p className="text-xs lg:text-[14px] text-[#265C26] font-bold">
    //           {price}
    //         </p>
    //         <p className="text-[9px] xs:w-max lg:text-xs">{lastUpdate}</p>
    //       </div>
    //     </div>
    //   </div>
    // </li>
  );
};

export default PriceTable;
