import React from "react";
import Image from "next/image";

const BrokenWatch = () => {
  return (
    <section className="flexCenter flex-col mt-14 py-10 bg-[#EDF4ED]">
      <div className="padding-container max-container lg:px-56 px-6">
        <div className="max-container relative flex w-full h-[84px] flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[247px] ">
          {" "}
          <Image
            src="/images/banner-2.png"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <h2 className="text-left lg:leading-[3rem] text-sm lg:text-4xl font-bold my-4">
          Old and Battered Rolex Do you have a Rolex that you think you would
          never be able to sell?
        </h2>
        <p className="justify-between leading-8 text-left">
          We buy even battered watches! Jewel Cafe specializes in the purchase
          of broken, old, and parts-only watches, as such we will buy your
          broken, battered, stuck, old, or junk Rolex watches at a high price.
          As a company with distribution routes all over the world, weat Jewel
          Cafe take pride in purchasing a large number of Rolexes every day.
          That’s why our professional staff are still able to appraise your
          broken Rolexes and offer you the most shocking prices.
        </p>
      </div>
    </section>
  );
};

export default BrokenWatch;
