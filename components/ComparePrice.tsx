import Image from "next/image";
import React from "react";

export default function ComparePrice() {
  return (
    <div>
      <div className="mt-10 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0">
        <h2 className="w-3/4 text-4xl font-bold mb-4 justify-self-center leading-[60px]">
          Comparing with other companies we purchase Rolex at a higher price?
        </h2>
        <p className="justify-between leading-8 text-left">
          We have a wide range of sales channels, and our professional staff can
          provide you with the best price in the industry for any kind of Luxury
          Watches. Please feel free to use our free appraisal service, which has
          the highest satisfaction rating.
        </p>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
          <div className="p-4">
            <p>ROLEX DAYTONA</p>
            <p>Ref. 116520</p>
            <div className="relative w-full h-[309px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/1-rolex-graph.png"
                alt="Banner"
                layout="fill"
                objectFit="cover"
                // width={100}
                // height={440}
                priority
              />
            </div>
          </div>

          <div className="p-4">
            <p>ROLEX SEADWELLER</p>
            <p>Ref. 16600</p>
            <div className="relative w-full h-[309px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/2-rolex-graph.png"
                alt="Banner"
                layout="fill"
                objectFit="cover"
                // width={100}
                // height={440}
                priority
              />
            </div>
          </div>

          <div className="p-4">
            <p>ROLEX SUBMARINER</p>
            <p>Ref. 116520</p>
            <div className="relative w-full h-[309px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/3-rolex-graph.png"
                alt="Banner"
                layout="fill"
                objectFit="cover"
                // width={100}
                // height={440}
                priority
              />
            </div>
          </div>

          <div className="p-4">
            <p>ROLEX SEADWELLER</p>
            <p>Ref. 16600</p>
            <div className="relative w-full h-[309px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/4-rolex-graph.png"
                alt="Banner"
                layout="fill"
                objectFit="cover"
                // width={100}
                // height={440}
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative w-full h-[630px]">
          <Image
            // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/images/banner-2.png"
            alt="Banner"
            layout="fill"
            objectFit="contain"
            // width={1000}
            // height={440}
            priority
          />
        </div>

        <h2 className="w-3/4 text-4xl font-bold mb-4 justify-self-center leading-[60px]">
          Old and Battered Rolex Do you have a Rolex that you think you would
          never be able to sell?
        </h2>
        <p className="justify-between leading-8 text-left">
          We buy even battered watches! Jewel Cafe specializes in the purchase
          of broken, old, and parts-only watches, as such we will buy your
          broken, battered, stuck, old, or junk Rolex watches at a high price.
          As a company with distribution routes all over the world, weat Jewel
          Cafe take pride inpurchasing a large number of Rolexes every day.
          That’s why our professional staff are still able toappraise your
          broken Rolexes and offer you the most shocking prices.
        </p>

        <h2 className="w-3/4 text-4xl font-bold mb-4 justify-self-center leading-[60px]">
          Points of Rolex Purchases
        </h2>
        <p className="justify-between leading-8 text-left">
          Why Jewel Cafe is strong in Rolex purchases
        </p>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
          <div className="p-4">
            <div className="relative w-full h-[245px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/1-point.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>

            <h3>Reason [1]</h3>
            <p>Professional Appraisal Staff</p>
            <p>
              At Jewel Cafe, our professional staff will carefully appraise your
              item.Taking into account of latest price data and market prices,
              we appraise with confidence and strive every day to offer the best
              price to satisfy our customers.
            </p>
          </div>

          <div className="p-4">
            <div className="relative w-full h-[245px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/2-point.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>

            <h3>Reason [2]</h3>
            <p>Unique worldwide sales channels</p>
            <p>
              Jewel Café has many operating stores oversea. By utilizing our
              domestic and international network to sell the items, we are able
              to offer even higher pricesfor the product we purchase.
            </p>
          </div>
          <div className="p-4">
            <div className="relative w-full h-[245px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/3-point.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>

            <h3>Reason [3]</h3>
            <p>250 direct-managed store worldwide</p>
            <p>
              Jewel Café has more than 250 directly operated stores worldwideand
              has been used by more than 3 million customers to date. We will
              continue to strive to keep the faith of our customers.
            </p>
          </div>

          <div className="p-4">
            <div className="relative w-full h-[245px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/4-point.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>

            <h3>Reason [4]</h3>
            <p>Various benefits available</p>
            <p>
              At Jewel Cafe, we offer a variety of special offers that can be
              used during your visit, our loyal customers are also overjoyed
              with these benefits. T-point and jewelry cleaning service are very
              popular among our customers!
            </p>
          </div>

          <div className="p-4">
            <div className="relative w-full h-[245px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/5-point.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>

            <h3>Reason [5]</h3>
            <p>Easy and convenient store location</p>
            <p>
              Jewel Café have stores operating at convenient locations such as
              large shopping mall and shoppingstreet at station front. We always
              aim to create a comfortable space which you can asually stop by
              during your grocery shopping.
            </p>
          </div>
        </div>

        <h2 className="w-3/4 text-4xl font-bold mb-4 justify-self-center leading-[60px]">
          We purchase at a Higher Price!
        </h2>

        <p className="justify-between leading-8 text-left">
          Unparalleled number of assessments and purchases High price purchases
          of Rolex.
        </p>

        <div>
          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            {/* Row 1, Column 1 */}
            <div className="p-4">
              {/* Content for the first grid item */}
              <div className="relative w-full h-[245px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/rolex.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="text-right">
                <p>Rolex Submariner 126613</p>
                <p>We bought at</p>
                <p>RM 70,950</p>
              </div>
            </div>

            {/* Row 1, Column 2 */}
            <div className="p-4">
              {/* Content for the second grid item */}
              <div className="relative w-full h-[245px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/rolex.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="text-right">
                <p>Rolex Submariner 126613</p>
                <p>We bought at</p>
                <p>RM 70,950</p>
              </div>
            </div>

            {/* Row 1, Column 3 */}
            <div className="p-4">
              {/* Content for the third grid item */}
              <div className="relative w-full h-[245px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/rolex.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="text-right">
                <p>Rolex Submariner 126613</p>
                <p>We bought at</p>
                <p>RM 70,950</p>
              </div>
            </div>

            {/* Row 1, Column 4 */}
            <div className="p-4">
              {/* Content for the fourth grid item */}
              <div className="relative w-full h-[245px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/rolex.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="text-right">
                <p>Rolex Submariner 126613</p>
                <p>We bought at</p>
                <p>RM 70,950</p>
              </div>
            </div>

            {/* Row 2, Column 1 */}
            <div className="p-4">
              {/* Content for the fifth grid item */}
              <div className="relative w-full h-[245px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/rolex.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="text-right">
                <p>Rolex Submariner 126613</p>
                <p>We bought at</p>
                <p>RM 70,950</p>
              </div>
            </div>

            {/* Row 2, Column 2 */}
            <div className="p-4">
              {/* Content for the sixth grid item */}
              <div className="relative w-full h-[245px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/rolex.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="text-right">
                <p>Rolex Submariner 126613</p>
                <p>We bought at</p>
                <p>RM 70,950</p>
              </div>
            </div>

            {/* Row 2, Column 3 */}
            <div className="p-4">
              {/* Content for the seventh grid item */}
              <div className="relative w-full h-[245px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/rolex.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="text-right">
                <p>Rolex Submariner 126613</p>
                <p>We bought at</p>
                <p>RM 70,950</p>
              </div>
            </div>

            {/* Row 2, Column 4 */}
            <div className="p-4">
              {/* Content for the eighth grid item */}
              <div className="relative w-full h-[245px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/rolex.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="text-right">
                <p>Rolex Submariner 126613</p>
                <p>We bought at</p>
                <p>RM 70,950</p>
              </div>
            </div>
          </div>
          <p className="text-left">
            *The value is only for reference purpose. Value affected by the
            condition and market price.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4 justify-self-center leading-[60px]">
            Rolex purchase price table
          </h2>
          <div className="grid grid-cols-4 grid-rows-3 gap-[30px]">
            {/* Row 1, Column 1 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>

            {/* Row 1, Column 2 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>

            {/* Row 1, Column 3 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>
            {/* Row 1, Column 4 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>

            {/* Row 2, Column 1 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>
            {/* Row 2, Column 2 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>
            {/* Row 2, Column 3 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>
            {/* Row 2, Column 4 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>

            {/* Row 3, Column 1 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>
            {/* Row 3, Column 2 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>
            {/* Row 3, Column 3 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>

            {/* Row 3, Column 4 */}
            <div className="rounded-[20px] border border-black p-4">
              {/* Content for the first grid item */}
              <div className="text-[14px] text-left font-bold">
                {" "}
                <p>Rolex</p>
                <p className="text-[#265C26]">Daytona</p>
                <p>116520</p>
              </div>

              <div className="relative w-full h-[145px]">
                <Image
                  // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/images/purchasetable.png"
                  alt="Banner"
                  layout="fill"
                  objectFit="contain"
                  // width={1000}
                  // height={440}
                  priority
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="relative w-full">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/smallrolex.png"
                    alt="Banner"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div>
                  <p className="text-[10px]">Jewel Cafe Latest market price</p>
                  <p className="text-[14px] font-bold">RM78,200.00</p>
                  <p className="text-[10px]">(2 days ago +0.06%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="w-3/4 text-4xl font-bold mb-4 justify-self-center leading-[60px]">
          Sell your Rolex at a higher price
        </h2>
        <p className="justify-between leading-8 text-left mb-[30px]">
          Sell your Rolex as soon as possible if you have decided that you won’t
          be using it.The price of a Rolex varies depending on the model, but it
          can also fluctuate depending on the production year and reference
          number. For example, popular models with a relatively newer year and
          reference number can fetch a higher market price. Also, since demand
          tends to vary depending on the model, we recommend that you sell your
          Rolex as soon as you have decided that you will not be using it.
        </p>

        <p className="justify-between leading-8 text-left mb-[30px]">
          Sell your Rolex with its warranty card and accessories for a higher
          price. Be sure to keep the warranty card, box, spare parts, and
          instruction manual that came with your Rolex when you purchased it.
          Without the warranty card, you may not be able to receive an
          authorized serviceor repair. Therefore, the purchase price of a Rolex
          will vary greatly depending on whether it has a warranty card. In
          addition, if the watch does not come with spare links, this limits its
          range of adjustable sizes, which may result in a lower price. That’s
          why it is advisable to keep all accessories carefully without throwing
          them away.
        </p>

        <p className="justify-between leading-8 text-left mb-[30px]">
          Remove the dirt from your Rolex and keep it clean to sell it at a
          higher price. Thekey to increasing the appraisal value of a Rolex is
          to clean it as much as possible beforehand. Even a simple cleaning at
          home, such as wiping the glass surface or removing dirt from the
          crevices of the strap, can impact the appraisal value. If your Rolex
          has not been serviced for a long time, it is a good idea to just bring
          it in as is. Of course, a watch that has been serviced will fetch a
          higher price, but Rolexes can be expensive to repair and it may take
          many months. Considering the downsides, it is recommended to bring in
          the watch without getting it serviced.
        </p>

        <h2 className="w-3/4 text-4xl font-bold mb-4 justify-self-center leading-[60px]">
          Types of Rolex Watches
        </h2>

        <div className="grid grid-cols-4 gap-4">
          {/* Row 1 */}
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/1-daytona.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Daytona
            </div>
          </div>

          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/2-datejust.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Datejust
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/3-daydate.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Day-date
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/4-explorer.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Explorer
            </div>
          </div>

          {/* Row 2 */}
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/5-explorer2.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Explorer II
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/6-submariner.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Submariner
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/7-gmtmaster.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              GMT Master
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/8-seadweller.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Sea Dweller
            </div>
          </div>

          {/* Row 3 */}
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/9-skydweller.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Sky Dweller
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/10-airking.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Airking
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/11-yatchmaster.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Yatch - Master
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/12-milgauss.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Milgauss
            </div>
          </div>

          {/* Row 4 */}
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/13-cellini.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Cellini
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/14-turnograph.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Turn - O - Graph
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/15-rolexantique.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Rolex Antique
            </div>
          </div>
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/16-oysterperpetual.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Oyster Perpetual
            </div>
          </div>

          {/* Row 5 */}
          <div className="rounded-[20px] border border-black">
            <div className="relative w-full h-[145px]">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/17-brokenrolex.png"
                alt="Banner"
                layout="fill"
                objectFit="contain"
                // width={1000}
                // height={440}
                priority
              />
            </div>
            <div className="rounded-[20px] border border-black bg-[#265C26] text-white mx-[5px] mb-[5px]">
              Broken Rolex
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl px-5 bg-white min-h-sceen">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-5xl mt-5 tracking-tight">
              Rolex purchase FAQ
            </h2>
          </div>
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Which Rolex models sell well?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  SAAS platform is a cloud-based software service that allows
                  users to access and use a variety of tools and functionality.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Does the purchase price vary depending on the production
                    year and reference number of the Rolex?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a variety of billing options, including monthly and
                  annual subscription plans, as well as pay-as-you-go pricing
                  for certain services. Payment is typically made through a
                  credit card or other secure online payment method.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Does the condition of the Rolex affect its grading and
                    price?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a 30-day money-back guarantee for most of its
                  subscription plans. If you are not satisfied with your
                  subscription within the first 30 days, you can request a full
                  refund. Refunds for subscriptions that have been active for
                  longer than 30 days may be considered on a case-by-case basis.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Do I need to consider the timing of when to sell my Rolex?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  To cancel your We subscription, you can log in to your account
                  and navigate to the subscription management page. From there,
                  you should be able to cancel your subscription and stop future
                  billing.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Should I have my Rolex repaired or serviced before selling
                    it?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a free trial of its platform for a limited time.
                  During the trial period, you will have access to a limited set
                  of features and functionality, but you will not be charged.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Are there any or other costs associated with the purchase or
                    appraisal of my Rolex?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Documentation is available on the website and can be accessed
                  by logging in to your account. The documentation provides
                  detailed information on how to use the , as well as code
                  examples and other resources.
                </p>
              </details>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl px-5 bg-white min-h-sceen">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-5xl mt-5 tracking-tight">
              Customer Review
            </h2>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <div className="px-10">
                <div className="bg-white px-10 py-8">
                  <div className="mt-4 text-left">
                    <div className="flex mt-2 items-center border-b-2 border-black mb-5">
                      <p>4.8</p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p>
                      I sold the Daytona Ref,116520. I coincidentally bought
                    </p>
                    <p className="mt-4 text-md text-gray-600">
                      I sold a Daytona that I miraculously able to purchase on a
                      trip to Hawaii with my family about 10 years ago! When I
                      went to an authorized store to buy a Rolex to commemorate
                    </p>
                  </div>
                  <div className="mt-4 text-left">
                    <div className="flex mt-2 items-center border-b-2 border-black mb-5">
                      <p>4.8</p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p>
                      I sold the Daytona Ref,116520. I coincidentally bought
                    </p>
                    <p className="mt-4 text-md text-gray-600">
                      I sold a Daytona that I miraculously able to purchase on a
                      trip to Hawaii with my family about 10 years ago! When I
                      went to an authorized store to buy a Rolex to commemorate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
