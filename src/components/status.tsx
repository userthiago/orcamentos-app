import { BudgetStatusTypes } from "@/types/budget-status";
import { StyleSheet, View, ViewProps } from "react-native";
import { TitleXs } from "./typography";

interface Props extends ViewProps {
  type: BudgetStatusTypes;
}

const statusTypes: Record<
  BudgetStatusTypes,
  {
    label: string;
    style: { backgroundColor: string; labelColor: string; iconColor: string };
  }
> = {
  sent: {
    label: "Enviado",
    style: {
      backgroundColor: "#CEEFFF",
      labelColor: "#1D7096",
      iconColor: "#2AA1D9",
    },
  },
  draft: {
    label: "Rascunho",
    style: {
      backgroundColor: "#E6E5E5",
      labelColor: "#676767",
      iconColor: "#A1A2A1",
    },
  },
  approved: {
    label: "Aprovado",
    style: {
      backgroundColor: "#BFF7BE",
      labelColor: "#30752F",
      iconColor: "#4BB84A",
    },
  },
  declined: {
    label: "Recusado",
    style: {
      backgroundColor: "#FFD6D6",
      labelColor: "#9E4949",
      iconColor: "#DB4D4D",
    },
  },
};

export function Status({ type, style: componentStyle, ...rest }: Props) {
  const { label, style } = statusTypes[type];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: style.backgroundColor },
        componentStyle,
      ]}
      {...rest}
    >
      <View style={[styles.ellipse, { backgroundColor: style.iconColor }]} />
      <TitleXs style={[{ color: style.labelColor }]}>{label}</TitleXs>
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
