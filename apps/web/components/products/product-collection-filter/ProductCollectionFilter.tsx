"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { RadioGroup, Radio } from "@nextui-org/radio";

function ProductCollectionFilter() {
  const options = [
    {
      label: "Marble-look",
      value: "Marble-look",
    },
    {
      label: "Marble-look",
      value: "Marble-look",
    },
    {
      label: "Marble-look",
      value: "Marble-look",
    },
  ];

  return (
    <div className="flex gap-x-6 mt-8 mb-10">
      <div className="mt-2">
        <Select
          label="Style"
          labelPlacement="outside"
          variant="bordered"
          placeholder="Marble-look"
          radius="sm"
          size="lg"
          className="w-[170px]"
          classNames={{
            trigger: "border-1 border-neutral-300",
            label: "text-sm-semibold",
          }}
        >
          {options.map((option) => (
            <SelectItem
              className="px-4 py-2"
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="mt-2">
        <RadioGroup
          label="Color"
          orientation="horizontal"
          classNames={{
            label: "text-sm-semibold",
          }}
        >
          <div className="flex items-center gap-x-5 pt-2">
            <Radio value="white" classNames={{
              wrapper:"bg-white border-grey-800 border-[1.5px]",
              control:"bg-white hover:bg-white"
            }}></Radio>
            <Radio value="grey" classNames={{
              wrapper:"bg-decorative-greyish border-[1.5px] hover:bg-decorative-greyish ",
              control:"bg-decorative-greyish hover:bg-decorative-greyish"
            }}></Radio>
            <Radio value="cream" classNames={{
              wrapper:"bg-decorative-cream border-[1.5px] hover:bg-decorative-cream",
              control:"bg-decorative-cream  hover:bg-decorative-cream"
            }}></Radio>
            <Radio value="orange" classNames={{
              wrapper:"bg-decorative-orange border-[1.5px] hover:bg-decorative-orange ",
              control:"bg-decorative-orange hover:bg-decorative-orange"
            }}></Radio>
            <Radio value="black" classNames={{
              wrapper:"bg-decorative-dark-blue border-[1.5px]",
              control:"bg-decorative-dark-blue hover:bg-decorative-dark-blue"
            }}></Radio>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
export default ProductCollectionFilter;
