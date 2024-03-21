import Image from "next/image";
import React from "react";

const RolexRanking = () => {
  return (
    <section className="flexCenter flex-col mt-10">
      <div className="padding-container max-container w-full lg:px-56 px-6">
        <p className="text-center text-4xl font-bold mb-4 text-[24px] lg:text-[38px]">
          Rolex Purchase Ranking
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 mb-[10px] pt-9 pb-0 justify-items-center">
          <div className="text-center my-10">
            <Image
              src={"/images/Submariner.png"}
              width={180}
              height={280}
              alt={"Submariner"}
            />
            <p>SUBMARINER</p>
          </div>
          <div className="text-center my-10">
            <Image
              src={"/images/Datejust.png"}
              width={300}
              height={300}
              alt={"Submariner"}
            />
            <p>DATEJUST</p>
          </div>
          <div className="text-center my-10">
            <Image
              src={"/images/explorer2.png"}
              width={150}
              height={180}
              alt={"Submariner"}
            />
            <p>EXPLORER II</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolexRanking;
