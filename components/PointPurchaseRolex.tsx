import { POINTROLEX } from "@/constants";
import React from "react";
import Image from "next/image";

const PointPurchaseRolex = () => {
  return (
    <section className="flexCenter flex-col mt-16">
      <div className="padding-container max-container w-full lg:px-72 px-10">
        <h2 className="text-center text-4xl font-bold mb-4 text-[24px] lg:text-[38px]">
          Points of Rolex Purchases
        </h2>
        <p className="justify-between leading-[1.7rem] text-center my-4">
          Why Jewel Cafe is strong in Rolex purchases
        </p>
        <div>
          <ul className="grid lg:gap-2 gap-6 lg:grid-cols-3 grid-cols-1">
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
        <div className="relative w-full h-[200px] lg:h-[190px]">
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
          <h3 className="mt-1 font-bold">{reason}</h3>
          <p className="mt-1 font-bold text-[16px]">{title}</p>
          <p className="mt-1 text-left text-[14px]">{desc}</p>
        </div>
      </div>
    </li>
  );
};

export default PointPurchaseRolex;
