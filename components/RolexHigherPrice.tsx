"use client"; // This is a client component
import React, { useState } from "react";

const RolexHigherPrice = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flexCenter flex-col mt-20">
      <div className="padding-container max-container w-full lg:px-72 px-6">
        <p className="text-center text-4xl font-bold mb-4 text-[24px] lg:text-[38px]">
          Sell your Rolex at a higher price
        </p>
        <div className="flex shadow-2xl my-10 py-5 lg:px-20 px-5 gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="self-start mt-[7px]"
          >
            {isOpen ? (
              <svg
                fill="none"
                height="20"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                fill="none"
                height="20"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>
          <div>
            <p className="justify-between leading-8 text-left">
              <span className="font-bold ">
                Sell your Rolex as soon as possible if you have decided that you
                won’t be using it.
              </span>
            </p>
            <p className={`${isOpen ? null : "line-clamp-3"}`}>
              The price of a Rolex varies depending on the model, but it can
              also fluctuate depending on the production year and reference
              number. For example, popular models with a relatively newer year
              and reference number can fetch a higher market price. Also, since
              demand tends to vary depending on the model, we recommend that you
              sell your Rolex as soon as you have decided that you will not be
              using it.
            </p>
          </div>
        </div>

        <div className="flex shadow-2xl my-10 py-5 lg:px-20 px-5 gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="self-start mt-[7px]"
          >
            {isOpen ? (
              <svg
                fill="none"
                height="20"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                fill="none"
                height="20"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>
          <div>
            <p className="justify-between leading-8 text-left">
              <span className="font-bold ">
                Sell your Rolex with its warranty card and accessories for a
                higher price.
              </span>
            </p>
            <p className={`${isOpen ? null : "line-clamp-3"}`}>
              {" "}
              Be sure to keep the warranty card, box, spare parts, and
              instruction manual that came with your Rolex when you purchased
              it. Without the warranty card, you may not be able to receive an
              authorized serviceor repair. Therefore, the purchase price of a
              Rolex will vary greatly depending on whether it has a warranty
              card. In addition, if the watch does not come with spare links,
              this limits its range of adjustable sizes, which may result in a
              lower price. That’s why it is advisable to keep all accessories
              carefully without throwing them away.
            </p>
          </div>
        </div>

        <div className="flex shadow-2xl my-10 py-5 lg:px-20 px-5 gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="self-start mt-[7px]"
          >
            {isOpen ? (
              <svg
                fill="none"
                height="20"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                fill="none"
                height="20"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>
          <div>
            <p className="justify-between leading-8 text-left">
              <span className="font-bold ">
                Remove the dirt from your Rolex and keep it clean to sell it at
                a higher price.
              </span>
            </p>
            <p className={`${isOpen ? null : "line-clamp-3"}`}>
              The key to increasing the appraisal value of a Rolex is to clean
              it as much as possible beforehand. Even a simple cleaning at home,
              such as wiping the glass surface or removing dirt from the
              crevices of the strap, can impact the appraisal value. If your
              Rolex has not been serviced for a long time, it is a good idea to
              just bring it in as is. Of course, a watch that has been serviced
              will fetch a higher price, but Rolexes can be expensive to repair
              and it may take many months. Considering the downsides, it is
              recommended to bring in the watch without getting it serviced.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolexHigherPrice;
