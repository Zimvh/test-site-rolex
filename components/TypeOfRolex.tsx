import { TYPE0FROLEX } from "@/constants";
import Image from "next/image";
import React from "react";

const TypeOfRolex = () => {
  return (
    <section className="flexCenter flex-col mt-24">
      <div className="padding-container max-container w-full lg:px-72 px-6">
        <h2 className="text-center text-4xl font-bold mb-4 text-[24px] lg:text-[38px]">
          Type of Rolex Watches
        </h2>

        <div>
          <ul className="mt-10 grid gap-5 grid-cols-2 lg:grid-cols-4">
            {TYPE0FROLEX.map((typeRolex) => (
              <TypeofRolex
                key={typeRolex.title}
                picture={typeRolex.picture}
                title={typeRolex.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type TypeofRolex = {
  picture: string;
  title: string;
};

const TypeofRolex = ({ picture, title }: TypeofRolex) => {
  return (
    <li className="border border-green-950 rounded-lg py-2 px-2">
      <div className="relative w-full h-[110px] lg:h-[140px]">
        <Image
          src={picture}
          alt="Banner"
          //   layout="fill"
          //   objectFit="cover"
          width={250}
          height={250}
          priority
          title={title}
        />
      </div>
      <div className="text-center border border-green-950 bg-green-900 rounded-xl text-white">
        <p>{title}</p>
      </div>
    </li>
  );
};

export default TypeOfRolex;
