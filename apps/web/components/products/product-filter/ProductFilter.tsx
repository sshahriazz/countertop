"use client";
import { Radio, RadioGroup } from "@nextui-org/radio";
import React, { useState } from "react";
import ProductBrand from "../product-brand/ProductBrand";

const ProductFilter = () => {
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
    <div className="pt-6 px-4 w-[375px] shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-h5-semibold font-bold">filter</h1>
        <p className="text-sm-semibold">Reset</p>
      </div>
      <div className="pb-8">
        <ProductBrand />
      </div>
      <div className="flex justify-center pb-8">
        <RadioGroup
          label="Color"
          orientation="horizontal"
          classNames={{
            label: "text-sm-semibold",
          }}
          size="lg"
        >
          <div className="flex items-center gap-x-5 pt-2">
            <Radio
              value="white"
              classNames={{
                wrapper: "bg-white border-grey-800 border-[1.5px]",
                control: "bg-white hover:bg-white",
              }}
            ></Radio>
            <Radio
              value="grey"
              classNames={{
                wrapper:
                  "bg-decorative-greyish border-[1.5px] hover:bg-decorative-greyish ",
                control: "bg-decorative-greyish hover:bg-decorative-greyish",
              }}
            ></Radio>
            <Radio
              value="cream"
              classNames={{
                wrapper:
                  "bg-decorative-cream border-[1.5px] hover:bg-decorative-cream",
                control: "bg-decorative-cream  hover:bg-decorative-cream",
              }}
            ></Radio>
            <Radio
              value="orange"
              classNames={{
                wrapper:
                  "bg-decorative-orange border-[1.5px] hover:bg-decorative-orange ",
                control: "bg-decorative-orange hover:bg-decorative-orange",
              }}
            ></Radio>
            <Radio
              value="black"
              classNames={{
                wrapper: "bg-decorative-dark-blue border-[1.5px]",
                control:
                  "bg-decorative-dark-blue hover:bg-decorative-dark-blue",
              }}
            ></Radio>
          </div>
        </RadioGroup>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ProductFilter;
