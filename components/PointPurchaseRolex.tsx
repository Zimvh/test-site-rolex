import { POINTROLEX } from "@/constants";
import React from "react";
import Image from "next/image";

const PointPurchaseRolex = () => {
  return (
    <section className="flexCenter flex-col mt-16">
      <div className="padding-container max-container w-full lg:px-80 px-6">
        <h2 className="text-center text-4xl font-bold mb-4 text-[24px] lg:text-[38px]">
          Points of Rolex Purchases
        </h2>
        <p className="justify-between leading-8 text-center my-4">
          Why Jewel Cafe is strong in Rolex purchases
        </p>
        <div>
          <ul className="grid gap-2 lg:gap-10 grid-cols-2">
            {POINTROLEX.map((pointRolexPurchase) => (
              <PointRolexPurchaseItem
                key={pointRolexPurchase.reason}
                reason={pointRolexPurchase.reason}
                picture={pointRolexPurchase.picture}
                title={pointRolexPurchase.title}
                desc={pointRolexPurchase.desc}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type PointRolexPurchaseItem = {
  picture: string;
  title: string;
  desc: string;
  reason: string;
};

const PointRolexPurchaseItem = ({
  picture,
  title,
  desc,
  reason,
}: PointRolexPurchaseItem) => {
  return (
    <li className="shadow-2xl">
      <div className="text-left">
        <div className="relative w-full h-[88px] lg:h-[305px]">
          <Image
            src={picture}
            alt="Banner"
            layout="fill"
            objectFit="cover"
            // width={100}
            // height={440}
            priority
            title={title}
          />
        </div>
        <div className="p-4">
          <h3 className="mt-1 ml-2 font-bold">{reason}</h3>
          <p className="mt-1 ml-2 font-bold text-[14px] lg:text-[16px]">
            {title}
          </p>
          <p className="mt-1 ml-2 text-justify">{desc}</p>
        </div>
      </div>
    </li>
  );
};

export default PointPurchaseRolex;
