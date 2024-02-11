"use client";
import { Radio, RadioGroup } from "@nextui-org/radio";
import React, { useState } from "react";

const ProductBrand = () => {
  const [selected, setSelected] = useState("All");
  const BrandData = [
    {
      title: "All",
      amount: "56",
    },
    {
      title: "MSI",
      amount: "35",
    },
    {
      title: "Pental quartz",
      amount: "14",
    },
    {
      title: "Silestone",
      amount: "07",
    },
  ];
  return (
    <div className="mt-12">
      <p className="flex justify-center items-center text-h4-semibold">Brand</p>
      <RadioGroup
        color="primary"
        value={selected}
        onValueChange={setSelected}
        className=" mt-[21px]"
      >
        <div className="flex flex-col gap-5 px-8">
          {BrandData.map((brand, index) => (
            <div key={index} className="flex justify-between">
              <Radio
                value={brand.title}
                classNames={{
                  wrapper: "border border-primary-blue-main",
                  control: "border  bg-primary-blue-main border-primary-blue-main",
                }}
              >
                {brand.title==selected?<p className="text-lg-semibold">{brand.title}</p>:<p className="text-lg-regular">{brand.title}</p>}
              </Radio>
              <p>({brand.amount})</p>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default ProductBrand;
