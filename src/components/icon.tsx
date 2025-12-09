import React from "react";
import { SvgProps } from "react-native-svg";

import * as Icons from "./icons";

export type IconName =
  | "direction-up-right"
  | "edit-pen"
  | "copy"
  | "credit-card"
  | "shop"
  | "plus"
  | "multiply"
  | "note-with-text"
  | "trash-2"
  | "chevron-right"
  | "chevron-left"
  | "calendar"
  | "search"
  | "filter"
  | "check"
  | "minus"
  | "tag";

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
}

const iconMap: Record<IconName, keyof typeof Icons> = {
  "direction-up-right": "DirectionUpRight",
  "edit-pen": "EditPen",
  copy: "Copy",
  "credit-card": "CreditCard",
  shop: "Shop",
  plus: "Plus",
  multiply: "Multiply",
  "note-with-text": "NoteWithText",
  "trash-2": "Trash2",
  "chevron-right": "ChevronRight",
  "chevron-left": "ChevronLeft",
  calendar: "Calendar",
  search: "Search",
  filter: "Filter",
  check: "Check",
  minus: "Minus",
  tag: "Tag",
};

export function Icon({ name, size = 24, color = "#000", ...props }: IconProps) {
  const IconComponent = Icons[iconMap[name]];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} color={color} {...props} />;
}
