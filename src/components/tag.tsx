import { StyleSheet, View, ViewProps } from "react-native";
import { TitleXs } from "./typography";
import { BudgetStatusTypes } from "@/types/budget-status-types";

const statusTypes: Record<
  BudgetStatusTypes,
  { backgroundColor: string; labelColor: string; iconColor: string }
> = {
  sent: {
    backgroundColor: "#CEEFFF",
    labelColor: "#1D7096",
    iconColor: "#2AA1D9",
  },
  draft: {
    backgroundColor: "#E6E5E5",
    labelColor: "#676767",
    iconColor: "#A1A2A1",
  },
  approved: {
    backgroundColor: "#BFF7BE",
    labelColor: "#30752F",
    iconColor: "#4BB84A",
  },
  declined: {
    backgroundColor: "#FFD6D6",
    labelColor: "#9E4949",
    iconColor: "#DB4D4D",
  },
};

interface Props extends ViewProps {
  variant: BudgetStatusTypes;
  showBullet?: boolean;
  text: string;
}

export function Tag({
  variant,
  text,
  style: componentStyle,
  showBullet = false,
  ...rest
}: Props) {
  const style = statusTypes[variant];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: style.backgroundColor },
        componentStyle,
      ]}
      {...rest}
    >
      {showBullet && (
        <View style={[styles.ellipse, { backgroundColor: style.iconColor }]} />
      )}
      <TitleXs style={[{ color: style.labelColor }]}>{text}</TitleXs>
    </View>
  );
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
