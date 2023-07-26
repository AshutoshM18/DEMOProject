"use client";

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { FaSkiing } from "react-icons/Fa";
import { IoDiamond } from "react-icons/Io5";
import { BsSnow } from "react-icons/Bs";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This Property is close to beach",
  },
  {
    label: "windmill",
    icon: GiWindmill,
    description: "This Property has Windmill",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This Property is modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This Property is in the countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This Property has a pool",
  },
  {
    label: "Island",
    icon: GiIsland,
    description: "This Property is on an island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This Property is close to Lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This Property has skiing activities",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This Property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This Property has camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This Property has camping activities",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This Property is in a Cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This Property is in the Desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This Property is in the Barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This Property is luxurious",
  },


];

function Categories() {
  const params= useSearchParams();
  const category = params?.get("category");
  const pathname= usePathname();
  const isMainPage = pathname==='/';
  if(!isMainPage){
    return null;
  };

  return (
    <Container>
      <div
        className=" pt-4 
   flex 
   flex-row 
   items-center 
   justify-between 
   overflow-x-auto"
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category===item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
