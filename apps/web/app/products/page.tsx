import { Button } from '@nextui-org/button'
import ProductCard from '@web/components/products/product-card/page'
import ProductCollectionFilter from '@web/components/products/collection-filter/page'

const page = () => {
    return (
        <div className="grid grid-cols-12 sm:gap-x-14 sm:pl-[61px] pt-[22px]">
            <div className="sm:col-span-8 col-span-12 ">
                <div className="sm:py-14">
                    <p className="text-h4-semibold">Product collection</p>
                    <ProductCollectionFilter />
                    <ProductCard />
                    <div className="flex justify-center mt-8">
                        <Button className="px-3 py-2 border rounded-lg text-white bg-blue-500 ">See more products</Button>
                    </div>
                </div>
            </div>
            <div className="sm:col-span-4 col-span-12">
                <div className="sm:py-14">
                    <p className="text-h2-semibold flex justify-center items-center">Quartz 3 cm</p>
                </div>
            </div>
        </div>
    )
}

export default page