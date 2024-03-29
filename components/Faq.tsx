import { FAQ } from "@/constants";
import React from "react";

const Faq = () => {
  return (
    <section className="flexCenter flex-col mt-20">
      <div className="padding-container max-container w-full lg:px-72 px-10">
        <div className="text-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">
            Rolex purchase <span className="text-[#265C26]">FAQ</span>
          </h2>
        </div>
        <div className="grid divide-y divide-neutral-200 mx-auto mt-8">
          <div className="py-5">
            {FAQ.map((faqList) => (
              <FaqList key={faqList.q} q={faqList.q} a={faqList.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type FaqList = {
  q: string;
  a: string;
};

const FaqList = ({ q, a }: FaqList) => {
  return (
    <details>
      {" "}
      <summary className="flex items-center font-medium cursor-pointer list-none border-t border-b border-gray-400 py-5 my-5 lg:pl-16 pl-3 ">
        <span className="transition group-open duration-500 pr-5">
          <svg
            fill="none"
            height="16"
            shape-rendering="geometricPrecision"
            stroke="#265C26"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M12 5v14M5 12h14"></path>
          </svg>
        </span>
        <span> {q}</span>
      </summary>
      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">{a}</p>
    </details>
  );
};

export default Faq;
