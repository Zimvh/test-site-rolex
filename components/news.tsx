import { NEWS } from "@/constants";
import React from "react";

const news = () => {
  return (
    <section className="lg:m-10 m-5">
      <div className="padding-container max-container w-full lg:px-72 lpx-6">
        <p className="text-left mb-4 lg:text-[22px]">Pickup News</p>

        <div>
          <ul className="">
            {NEWS.map((newsList) => (
              <NewsListItem
                key={newsList.title}
                date={newsList.date}
                title={newsList.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type NewsListItem = {
  date: string;
  title: string;
};

const NewsListItem = ({ date, title }: NewsListItem) => {
  return (
    <li className="bg-[#EFEFEF] text-[10px] lg:text-[16px]">
      <div className="flex lg:gap-9 lg:p-4 p-2 text-center lg:ml-8 pl-2 gap-2">
        <p className="text-left">{date}</p>
        <p className="text-left">{title}</p>
      </div>
    </li>
  );
};

export default news;
