import { data } from "../data";
export type IconName = "home" | "map" | "order";

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

export type OrderItemProps = {
  item: (typeof data)[0];
};
