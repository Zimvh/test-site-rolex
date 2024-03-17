import Image from "next/image";
import React from "react";

export default function Search() {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-24 lg:px-56">
      <div className="max-container padding-container relative w-full">
        <div className="flex w-full auto lg:h-[260px] flex-col lg:flex-row">
          <div className="relative">
            <Image src="/images/bnr.png" width={1000} height={440} />
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
    // <div>
    //   <div className="2">
    //     <div>
    //       <div className="relative w-full h-[285px]">
    //         <Image
    //           // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //           src="/images/bnr.png"
    //           alt="Banner"
    //           layout="fill"
    //           objectFit="cover"
    //           // width={1000}
    //           // height={440}
    //           priority
    //         />
    //       </div>
    //     </div>
    //     <div className="bg-[#31452A] text-white p-[60px]">
    //       <p className="text-3xl font-bold">Name your Rolex</p>
    //       <p className="text-base">and check the price</p>

    //       <div className="flex items-center justify-center mx-auto mt-[20px]">
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           className="py-2 px-4 mr-[4px]"
    //         />
    //         <div className="cursor-pointer bg-white p-[10px]">
    //           <Image
    //             src="/images/searchIcon.png" // Replace with the actual image source for the search icon
    //             alt="Search Icon"
    //             width={20}
    //             height={20}
    //             className="cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //       <div className="w-[400px]">
    //         <button className="px-4 rounded border border-white text-white cursor-pointer text-[10px] mr-2">
    //           Submariner
    //         </button>
    //         <button className="px-4 rounded border text-white cursor-pointer text-[10px] mr-2">
    //           Datejust
    //         </button>
    //         <button className="px-4 rounded border text-white cursor-pointer text-[10px] mr-2">
    //           Explorer II
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
