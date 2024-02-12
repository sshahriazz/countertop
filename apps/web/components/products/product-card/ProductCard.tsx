import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";

const ProductCard = ({ data }: any) => {
  return (
    <Card
      className="flex flex-col rounded-[4px] shadow-md  max-h-[356px] p-2 sm:p-5"
      shadow="none"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          alt="Card background"
          className="object-cover rounded-none"
          src={data.img.src}
          height={218}
          width={228}
        />
        <div className="pb-0 pt-5 flex-col items-start">
          <h4 className="text-sm-semibold md:text-h6-semibold mb-1">
            {data.title}
          </h4>
          <p className="text-sm-regular">{data.subtitle}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
