import { BudgetStatusTypes } from "@/types/budget-status";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Status } from "./status";
import { CurrencyValue } from "./currency-value";
import { TextSm, TitleMd } from "./typography";

interface Props extends TouchableOpacityProps {
  status: BudgetStatusTypes;
  description: string;
  customer: string;
  price: number;
}

export function ServiceBudgetCard({
  status,
  description,
  customer,
  price,
  ...rest
}: Props) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.5} {...rest}>
      <View style={styles.descriptionContainer}>
        <TitleMd numberOfLines={2}>{description}</TitleMd>
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
  descriptionContainer: {
    flex: 1,
    gap: 8,
  },
  priceContainer: {
    justifyContent: "space-between",
  },
});
