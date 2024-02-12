import { Button } from "@nextui-org/button";
import ProductCard from "@web/components/products/product-card/ProductCard";
// import ProductCard from '@web/components/products/product-card/page'
import ProductCollectionFilter from "@web/components/products/product-collection-filter/ProductCollectionFilter";
import ProductCardList from "@web/components/products/product-card-list/ProductCardList";
import ProductBrand from "@web/components/products/product-brand/ProductBrand";
import BrandOverview from "@web/components/products/brand-overview/BrandOverview";
import {
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div className="grid grid-cols-12 sm:gap-x-14 px-4 sm:px-[61px] py-6 sm:py-14">
      <div className="col-span-12 sm:col-span-8 mt-1">
          <p className="text-h4-semibold">Product collection</p>
          <div className="hidden sm:block">
            <ProductCollectionFilter />
          </div>
          <div className="sm:hidden flex justify-between items-center py-6">
            <h1 className="text-h5-semibold  flex justify-start sm:justify-center items-center">
              Quartz 3 cm
            </h1>
            <div className="flex gap-0 items-center">
              <Button isIconOnly variant="light">
                <AdjustmentsHorizontalIcon className="h-6 w-6" />
              </Button>
              <p>filter</p>
            </div>
          </div>
          <ProductCardList />
          <div className="flex justify-center mt-8">
            <Button className="px-3 py-2 border rounded-lg text-neutral-white bg-primary-blue-main ">
              See more products
            </Button>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-4">
          <p className="text-h2-semibold justify-center sm:justify-center items-center hidden sm:flex">
            Quartz 3 cm
          </p>
          <div className="mt-12">
          <ProductBrand />
          </div>
          <BrandOverview />
        </div>
      </div>
  );
};

export default page;
