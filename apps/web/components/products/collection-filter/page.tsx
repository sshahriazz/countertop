function ProductCollectionFilter() {
    return (
        <div className=" flex gap-x-6 mt-8">
            <div className="">
                <p className="pb-1">Style</p>
                <select className="px-4 py-2 border items-center rounded-lg text-md-regular font-medium">
                    <option value="1">Marble-look</option>
                    <option value="2">Marble-look</option>
                    <option value="3">Marble-look</option>
                    <option value="4">Marble-look</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                </select>
            </div>
            <div>
                <p className="pb-2">Color</p>
                <div className="flex gap-x-5">
                    <input
                        className="relative float-left mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-[1.5px] border-solid  border-grey-800 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-decorative-greyish checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        name="flexRadioNoLabel"
                        id="radioNoLabel01"
                    />
                    <input
                        className="relative float-left mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full  checked:border-[1.5px] checked:border-solid bg-decorative-greyish border-grey-800 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full   before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-decorative-greyish  checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full     hover:cursor-pointer  "
                        type="radio"
                        name="flexRadioNoLabel"
                        id="radioNoLabel01"
                    />
                    <input
                        className="relative float-left mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full  checked:border-[1.5px] checked:border-solid bg-decorative-cream border-grey-800 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full   before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-decorative-greyish  checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full     hover:cursor-pointer  "
                        type="radio"
                        name="flexRadioNoLabel"
                        id="radioNoLabel01"
                    />
                    <input
                        className="relative float-left mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full checked:border-[1.5px] checked:border-solid bg-decorative-orange border-grey-800 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full   before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-decorative-greyish  checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full     hover:cursor-pointer  "
                        type="radio"
                        name="flexRadioNoLabel"
                        id="radioNoLabel01"
                    />
                    <input
                        className="relative float-left mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full checked:border-[1.5px] checked:border-solid bg-decorative-dark-blue border-grey-800 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full   before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-decorative-greyish  checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full     hover:cursor-pointer  "
                        type="radio"
                        name="flexRadioNoLabel"
                        id="radioNoLabel01"
                    />
                </div>
            </div>
        </div>
    );
}
export default ProductCollectionFilter;