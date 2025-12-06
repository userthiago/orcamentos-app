import { formatCurrency } from "@/utils/currency-utils";
import { StyleSheet, Text } from "react-native";

type Sizes = "small" | "medium" | "large";

interface Props {
  value: number;
  hideCurrencySymbol?: boolean;
  strong?: boolean;
  size?: Sizes;
}

export function CurrencyValue({
  value,
  hideCurrencySymbol = false,
  strong = false,
  size = "medium",
}: Props) {
  const priceFormated = formatCurrency(value, { hideCurrencySymbol: true });

  return (
    <Text style={styles.currency}>
      {!hideCurrencySymbol && <Text>R$ </Text>}
      <Text
        style={[
          styles.currencyValue,
          strong ? styles.valueStrong : styles.valueRegular,
          styles[size],
        ]}
      >
        {priceFormated}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  currency: {
    color: "0F0F0F",
    fontFamily: "Lato_400Regular",
    fontSize: 12,
    lineHeight: 16.8,
  },
  currencyValue: {
    color: "0F0F0F",
  },
  valueRegular: {
    fontFamily: "Lato_400Regular",
  },
  valueStrong: {
    fontFamily: "Lato_700Bold",
  },
  small: {
    fontSize: 14,
    lineHeight: 19.6,
  },
  medium: {
    fontSize: 16,
    lineHeight: 22.4,
  },
  large: {
    fontSize: 20,
    lineHeight: 28,
  },
});
