import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";

import type { IconProps } from "../types";

const Icon = ({ name, size, color }: IconProps) => {
  const iconPack = {
    home: <AntDesign name="home" size={size} color={color} />,
    map: <Feather name="map" size={size} color={color} />,
    order: <FontAwesome5 name="list" size={size} color={color} />,
  };

  return iconPack[name];
};

export default Icon;
