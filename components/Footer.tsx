import { FOOTER } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter flex-col mb-24 mt-10 bg-[#EDF4ED] py-5">
      <div className="padding-container max-container flex w-full flex-col lg:px-56 px-6">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row mt-9">
          <Link href="/" className="mb-10">
            <Image
              src="/images/footer-logo.png"
              alt="logo"
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap lg:px-96  px-6 justify-center">
          {FOOTER.map((footerList) => (
            <FooterListItem
              key={footerList.title}
              title={footerList.title}
              link={footerList.link}
            />
          ))}
        </ul>
      </div>

      <div className="flex justify-center my-5">
        <div className="flex items-center bg-green-800 rounded-lg w-96 mx-5">
          <Image
            src="/images/woman.png"
            alt="Woman Jewel Cafe"
            width={100}
            height={150}
            className="absolute pb-[22px]"
          />
          <p className="text-[26px] flex flex-wrap m-4 text-white font-semibold ml-[120px]">
            Jewel Cafe Outlet Staff Recruitment
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-9">
        <p className="font-bold text-[34px] text-green-900 text-center">
          Jewel Cafe Has 250 Stores Worldwide
        </p>
      </div>

      <div className="flex justify-center gap-3 my-9 mx-5">
        <div className="bg-[#BED8B2] rounded-md">
          <p className="p-3 lg:min-w-[200px] text-center font-bold lg:text-[20px] text-white">
            Kuala Lumpur
          </p>
        </div>
        <div className="bg-[#BED8B2] rounded-md">
          <p className="p-3 lg:min-w-[200px] text-center font-bold lg:text-[20px] text-white">
            Selangor
          </p>
        </div>
        <div className="bg-[#BED8B2] rounded-md">
          <p className="p-3 lg:min-w-[200px] text-center font-bold lg:text-[20px] text-white">
            Penang
          </p>
        </div>
      </div>

      <div className="flex justify-center max-container w-full ">
        <p className="bg-green-900 lg:px-96 rounded-md text-white text-[24px] font-bold px-20">
          Kuala Lumpur
        </p>
      </div>

      <div className="flexCenter flex-col">
        <div className="padding-container max-container w-full lg:px-56 px-6">
          <div className="lg:flex w-full lg:px-12 my-10 gap-5">
            <div className="">
              <p className="font-bold text-green-950 my-1">
                AEON AU2 Setiawangsa
              </p>
              <p className="text-[12px] my-1">
                Lot G26 Ground Floor, No.6 Jalan Taman Setiawangsa AU2, Taman
                Keramat, 54200 Kuala Lumpur.
              </p>

              <div className="flex">
                <p className="font-bold">TEL 03-4251 1151</p>
                <p className="border border-green-950 lg:ml-40 ml-28 font-bold px-2">
                  More Info
                </p>
              </div>
            </div>

            <div className="">
              <p className="font-bold text-green-950 my-1">
                AEON AU2 Setiawangsa
              </p>
              <p className="text-[12px] my-1">
                Lot G26 Ground Floor, No.6 Jalan Taman Setiawangsa AU2, Taman
                Keramat, 54200 Kuala Lumpur.
              </p>
              <div className="flex">
                <p className="font-bold">TEL 03-4251 1151</p>
                <p className="border border-green-950 lg:ml-40 ml-28 font-bold px-2">
                  More Info
                </p>
              </div>
            </div>
          </div>

          <div className="lg:flex text-center gap-32 justify-center font-bold text-md text-green-950 my-10">
            <p>Jewel Cafe Overseas</p>
            <p>Japan | Hong Kong | Taiwan | Singapore | Thailand</p>
          </div>
        </div>
      </div>

      <p className="font-thin text-[12px] w-full text-center text-gray-30">
        ⓒ JEWEL CAFE All Right Reserved.
      </p>
    </footer>
  );
};

type FooterListItem = {
  title: string;
  link: string;
};

const FooterListItem = ({ title, link }: FooterListItem) => {
  return (
    <li className="flex flex-wrap m-4">
      <Link href="/" className="">
        {title}
      </Link>
      <p className="ml-4">|</p>
    </li>
  );
};

export default Footer;
