"use client";
import React, { useState } from "react";
import sinteredBg from "@web/public/assets/images/sinteredStone.png";
import ProductCard from "../product-card/ProductCard";
import { Skeleton } from "@nextui-org/skeleton";

function ProductCardList() {
  const [isLoading, setIsLoading] = useState(false);

  const imageItem = [
    {
        img: sinteredBg,
        title: " Calacatta Luisa Quartz White Kitchen",
        subtitle: "MSI",
      },
    {
      img: sinteredBg,
      title: " Calacatta Luisa Quartz White Kitchen",
      subtitle: "MSI",
    },
    {
        img: sinteredBg,
        title: " Calacatta Luisa Quartz White Kitchen",
        subtitle: "MSI",
      },
      {
        img: sinteredBg,
        title: " Calacatta Luisa Quartz White Kitchen",
        subtitle: "MSI",
      },
      {
        img: sinteredBg,
        title: " Calacatta Luisa Quartz White Kitchen",
        subtitle: "MSI",
      },
      {
        img: sinteredBg,
        title: " Calacatta Luisa Quartz White Kitchen",
        subtitle: "MSI",
      },
  ];
  return (
    <div>
      {isLoading ? (
        <div className="grid grid-cols-12 gap-5">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="col-span-6 sm:col-span-4">
              <Skeleton className="flex rounded-small h-[102px]" key={index} />
            </div>
          ))}
        </div>
      ) : imageItem?.length > 0 ? (
        <div className="grid grid-cols-12 gap-5">
          {imageItem?.map((data, index) => (
            <div key={index} className="col-span-6 sm:col-span-4">
              <ProductCard data={data} />
            </div>
          ))}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}

export default ProductCardList;
