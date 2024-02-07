import Image from "next/image";
import sinteredBg from "@web/public/assets/images/sinteredStone.png";

function ProductCard() {
    const imageItem = [
        {
            img: sinteredBg,
            title: "Rafat",
        },
        {
            img: sinteredBg,
            title: "Rafat",
        },
        {
            img: sinteredBg,
            title: "Rafat",
        },
        {
            img: sinteredBg,
            title: "Rafat",
        },
        {
            img: sinteredBg,
            title: "Rafat",
        },
        {
            img: sinteredBg,
            title: "Rafat",
        },
    ];
    return (
        <div className="grid grid-cols-12 gap-x-5 ">
            {imageItem.map((item, index) => (
                <div key={index} className="border rounded h-[356px] px-5 py-5 mt-5 sm:col-span-4 col-span-12 ">
                    <Image
                        className="object-cover h-[228px]"
                        src={sinteredBg}
                        alt="Picture of the user"
                    />
                    <p className="mt-5 text-h6-semibold">
                        Calacatta Luisa Quartz White Kitchen
                    </p>
                    <p className="text-grey-500">MSI</p>
                </div>
            ))}
        </div>
    );
}
export default ProductCard;