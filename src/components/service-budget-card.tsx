import { BudgetStatusTypes } from "@/types/budget-status";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Status } from "./status";
import { CurrencyValue } from "./currency-value";

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
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <Text style={styles.customer} numberOfLines={1}>
          {customer}
        </Text>
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
  description: {
    color: "0F0F0F",
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    lineHeight: 22.4,
  },
  priceContainer: {
    justifyContent: "space-between",
  },
  customer: {
    color: "#4A4A4A",
    fontFamily: "Lato_400Regular",
    fontSize: 14,
    lineHeight: 19.6,
  },
  currency: {
    color: "0F0F0F",
    fontFamily: "Lato_400Regular",
    fontSize: 12,
    lineHeight: 16.8,
  },
  currencyValue: {
    color: "0F0F0F",
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    lineHeight: 22.4,
  },
});
