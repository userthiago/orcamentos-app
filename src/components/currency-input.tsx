import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import RNCurrencyInput, {
  CurrencyInputProps,
} from "react-native-currency-input";

import { TitleMd } from "./typography";

interface Props extends CurrencyInputProps {
  isInvalid?: boolean;
  flex?: boolean;
}

export function CurrencyInput({ isInvalid, flex, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const iconBorderColors = useMemo(() => {
    if (isInvalid)
      return {
        border: "#DB4D4D",
        icon: "#DB4D4D",
      };
    if (isFocused)
      return {
        border: "#6A46EB",
        icon: "#6A46EB",
      };
    return {
      border: "#E6E5E5",
      icon: "#4A4A4A",
    };
  }, [isInvalid, isFocused]);

  return (
    <View
      style={[
        styles.container,
        { borderColor: iconBorderColors.border },
        flex && { flex: 1 },
      ]}
    >
      <TitleMd
        style={[
          {
            color: iconBorderColors.icon,
          },
        ]}
      >
        R$
      </TitleMd>
      <RNCurrencyInput
        style={[styles.input]}
        placeholderTextColor="#676767"
        cursorColor="#6A46EB"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FAFAFA",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E6E5E5",
    borderRadius: 999,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Lato_400Regular",
    color: "#0F0F0F",
  },
});
