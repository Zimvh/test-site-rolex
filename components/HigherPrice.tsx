import { HIGHERPRICE } from "@/constants";

import Image from "next/image";

import React from "react";

const HigherPrice = () => {
  return (
    <section className="flexCenter flex-col mt-40">
      <div className="padding-container max-container w-full lg:px-72 px-10">
        <h2 className="text-center text-4xl font-bold mb-4 text-[24px] lg:text-[38px]">
          We purchase at a Higher Price!
        </h2>
        <p className="justify-between leading-8 text-center">
          Unparalleled number of assessments and purchases High price purchases
          of Rolex.
        </p>
        <div>
          <ul className="mt-10 grid gap-5 grid-cols-2 lg:grid-cols-4">
            {HIGHERPRICE.map((highPrice) => (
              <HigherPriceItem
                key={highPrice.title}
                picture={highPrice.picture}
                title={highPrice.title}
                desc={highPrice.desc}
                price={highPrice.price}
              />
            ))}
          </ul>
        </div>
        <p className="text-left font-extralight mt-10 text-xs">
          *The value is only for reference purpose. Value affected by the
          condition and market price.
        </p>
      </div>
    </section>
  );
};

type HigherPriceItem = {
  picture: string;
  title: string;
  desc: string;
  price: string;
};

const HigherPriceItem = ({ picture, title, desc, price }: HigherPriceItem) => {
  return (
    <li className="shadow-2xl">
      <div className="relative w-full lg:h-[200px] h-[134px]">
        <Image
          src={picture}
          alt="Banner"
          //   layout="fill"
          //   objectFit="cover"
          width={200}
          height={160}
          priority
          title={title}
        />
      </div>
      <div className="p-1 text-end my-2">
        <p className="text-[14px] lg:text-[11px] font-bold">{title}</p>
        <p className="text-[12px] lg:text-[11px] ">{desc}</p>
        <p className="text-[14px] lg:text-[14px] font-bold">{price}</p>
      </div>
    </li>
  );
};

export default HigherPrice;
