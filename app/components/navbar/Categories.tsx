'use client';

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi"
import { MdOutlineVilla } from "react-icons/md"
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa"


export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: "This property is close to the beach!"
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: "This property is has windmills!"
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: "This property is modern"
  },
  {
    label: 'Contrys',
    icon: TbMountain,
    description: "This property is in countryside"
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: "This property has a pool"
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: "This property is on an island"
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: "This property is close to a lake"
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: "This property has skiing activity"
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: "This property has a castle"
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: "This property has camping activity"
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: "This property is near a arctic"
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: "This property has Cave"
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: "This property is in desert"
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: "This property is in a Barn"
  },
  {
    label: 'Luxurious',
    icon: IoDiamond,
    description: "This property is luxurious"
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>

  );
}

export default Categories;