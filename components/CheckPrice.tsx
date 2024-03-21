import Image from "next/image";
import React from "react";

const CheckPrice = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat lg:py-4 lg:px-56 mt-10">
      <div className="max-container padding-container relative w-full">
        <div className="flex w-full auto lg:h-[260px] flex-col lg:flex-row">
          <div className="relative">
            <Image src="/images/bnr.png" width={1000} height={440} alt="bnr" />
          </div>
          <div className="bg-[#31452A] text-white lg:p-[60px] p-[48px] text-center">
            <p className="text-3xl font-bold">Name your Rolex</p>
            <p className="text-base">and check the price</p>

            <div className="flex items-center justify-center mx-auto mt-[20px]">
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-4 mr-[4px]"
              />
              <div className="cursor-pointer bg-white p-[10px]">
                <Image
                  src="/images/searchIcon.png" //Replace with the actual image source for the search icon
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full lg:w-[400px]">
              <button className="px-4 rounded border border-white text-white cursor-pointer text-[10px] mr-2">
                Submariner
              </button>
              <button className="px-4 rounded border text-white cursor-pointer text-[10px] mr-2">
                Datejust
              </button>
              <button className="px-4 rounded border text-white cursor-pointer text-[10px] mr-2">
                Explorer II
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckPrice;
