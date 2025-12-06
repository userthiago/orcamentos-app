import { BudgetStatusTypes } from "@/types/budget-status";
import { StyleSheet, View, ViewProps } from "react-native";
import { TitleXs } from "./typography";
import { Tag } from "./tag";

interface Props extends ViewProps {
  type: BudgetStatusTypes;
}

const statusLabel: Record<BudgetStatusTypes, string> = {
  sent: "Enviado",
  draft: "Rascunho",
  approved: "Aprovado",
  declined: "Recusado",
};

export function Status({ type, ...rest }: Props) {
  const label = statusLabel[type];

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
