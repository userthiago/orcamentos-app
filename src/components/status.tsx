import { StyleSheet, ViewProps } from "react-native";

import { Tag } from "./tag";

import { BUDGET_STATUS_OPTIONS } from "@/config/budget-config";
import { BudgetStatusTypes } from "@/types/budget-status-types";

interface Props extends ViewProps {
  type: BudgetStatusTypes;
}

export function Status({ type, ...rest }: Props) {
  const { label } = BUDGET_STATUS_OPTIONS[type];

  return <Tag variant={type} text={label} showBullet {...rest} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,

    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  ellipse: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
