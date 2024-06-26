"use client";

import { ROLEXPRICE } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const CheckPrice = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState<
    { title: string; model: string; price: string; category: string }[]
  >([]);

  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Get unique categories
      const categories = Array.from(
        new Set(ROLEXPRICE.map((item) => item.category))
      );

      setUniqueCategories(categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSearchInput(category); // Set input field value to selected category
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  const handleSearch = () => {
    // Filter data based on input value
    const filtered = ROLEXPRICE.filter((item) => {
      const searchInputLowerCase = searchInput.toLowerCase();
      // Check if any property contains the search input value
      return Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchInputLowerCase)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <section className="flex-col flexCenter bg-center bg-no-repeat mx-8 lg:mx-0">
      <div className="max-container padding-container relative w-full lg:py-4 lg:px-72 mt-10">
        <div className="bg-[#31452A] flex w-full auto flex-col lg:flex-row">
          <div className="hidden lg:block">
            <Image
              src="/images/bnr.png"
              width={1000}
              height={440}
              alt="bnr"
              title="Banner Top"
            />
          </div>
          <div className="self-center text-white p-[19px] text-center">
            <p className="text-3xl font-bold">Name your Rolex</p>
            <p className="text-base">and check the price</p>

            <div className="flex items-center justify-center mx-auto mt-[20px]">
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-4 mr-[4px] text-black"
                value={searchInput}
                onChange={handleInputChange}
              />
              <div
                className="cursor-pointer bg-white p-[10px]"
                onClick={handleSearch}
              >
                <Image
                  src="/images/searchIcon.png"
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  title="Search Icon"
                />
              </div>
            </div>
            <div className="w-full lg:w-[400px]">
              {/* Render buttons for unique categories */}
              {uniqueCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 rounded border border-white text-white cursor-pointer text-[10px] mr-2`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <RolexPriceItem data={filteredData} />
    </section>
  );
};

const RolexPriceItem = ({
  data,
}: {
  data: { title: string; model: string; price: string; category: string }[];
}) => {
  return (
    <div className="w-full lg:py-4 lg:px-72">
      <ul className="">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex py-5 lg:px-28 px-8 border-b-2 grid-col-2"
          >
            <div className="flex-1">
              <p>
                {item.title} {item.model}
              </p>
            </div>
            <div className="flex-1 text-right">
              <p>Market price {item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckPrice;
