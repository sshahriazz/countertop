import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

const SkeletonLoader = ({ children }: any) => {
  return <Skeleton>{children}</Skeleton>;
};

export default SkeletonLoader;
