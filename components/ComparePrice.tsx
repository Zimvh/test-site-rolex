import Image from "next/image";
import React from "react";
import { PRICELISTGRAPH } from "@/constants";

const ComparePrice = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full lg:px-72 px-10">
        <h2 className="text-center font-bold mb-8 text-[24px] lg:text-[38px] lg:leading-[60px]">
          Comparing with other companies <br className="hidden lg:block" /> we
          purchase Rolex at a higher price?
        </h2>
        <p className="justify-between leading-8 text-left">
          We have a wide range of sales channels, and our professional staff can
          provide you with the best price in the industry for any kind of Luxury
          Watches. Please feel free to use our free appraisal service, which has
          the highest satisfaction rating.
        </p>
        <div>
          <ul className="mt-10 grid lg:gap-0 gap-1 gap-y-6 grid-cols-2">
            {PRICELISTGRAPH.map((pricelistGraph) => (
              <PriceListGraphItem
                key={pricelistGraph.title}
                picture={pricelistGraph.picture}
                title={pricelistGraph.title}
                refNum={pricelistGraph.refNum}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type PriceListGraphItem = {
  picture: string;
  title: string;
  refNum: string;
};

const PriceListGraphItem = ({ picture, title, refNum }: PriceListGraphItem) => {
  return (
    <li>
      <div className="lg:p-4 text-center">
        <p className="text-[10px] lg:text-[16px]">{title}</p>
        <p className="text-[8px]">{refNum}</p>
        <div className="relative w-full h-[96px] lg:h-[262px]">
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
      </div>
    </li>
  );
};

export default ComparePrice;

// import Image from "next/image";
// import React from "react";
// import { PRICELISTGRAPH } from "@/constants";

// export default function ComparePrice() {
//   return (
//     <section className="flexCenter flex-col">
//       <div className="padding-container max-container w-full lg:px-56 px-6">
//         <p className="text-center text-4xl font-bold mb-4 text-[24px] lg:text-[38px]">
//           Comparing with other companies we purchase Rolex at a higher price?
//         </p>
//         <p className="justify-between leading-8 text-left">
//           We have a wide range of sales channels, and our professional staff can
//           provide you with the best price in the industry for any kind of Luxury
//           Watches. Please feel free to use our free appraisal service, which has
//           the highest satisfaction rating.
//         </p>
//         <div>
//           <ul className="mt-10 grid gap-0 grid-cols-2">
//             {PRICELISTGRAPH.map((pricelistGraph) => (
//               <PriceListGraphItem
//                 key={pricelistGraph.title}
//                 picture={pricelistGraph.picture}
//                 title={pricelistGraph.title}
//                 refNum={pricelistGraph.refNum}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
