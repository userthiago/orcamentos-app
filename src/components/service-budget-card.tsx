import { BudgetStatusTypes } from "@/types/budget-status-types";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { Status } from "./status";
import { TextSm, TitleMd } from "./typography";
import { CurrencyValue } from "./currency-value";

interface Props extends TouchableOpacityProps {
  status: BudgetStatusTypes;
  title: string;
  customer: string;
  price: number;
}

export function ServiceBudgetCard({
  status,
  title,
  customer,
  price,
  ...rest
}: Props) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.5} {...rest}>
      <View style={styles.titleContainer}>
        <TitleMd numberOfLines={2}>{title}</TitleMd>
        <TextSm numberOfLines={1}>{customer}</TextSm>
      </View>
      <View style={styles.priceContainer}>
        <Status
          type={status}
          style={{ marginTop: -8, marginRight: -8, alignSelf: "flex-end" }}
        />
        <CurrencyValue value={price} strong />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    flexDirection: "row",
    gap: 12,

    backgroundColor: "#FAFAFA",
    padding: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    gap: 8,
  },
  priceContainer: {
    justifyContent: "space-between",
  },
});
