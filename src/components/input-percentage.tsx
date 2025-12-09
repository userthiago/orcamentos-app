import { useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import { TitleMd } from "./typography";

interface InputProps extends TextInputProps {
  isInvalid?: boolean;
}

export function InputPercentage({ isInvalid, ...rest }: InputProps) {
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
    <View style={[styles.container, { borderColor: iconBorderColors.border }]}>
      <TextInput
        placeholderTextColor="#676767"
        cursorColor="#6A46EB"
        style={[styles.input]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType="numeric"
        maxLength={3}
        {...rest}
      />
      <TitleMd
        style={[
          {
            color: iconBorderColors.icon,
          },
        ]}
      >
        %
      </TitleMd>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FAFAFA",
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E6E5E5",
    borderRadius: 999,
  },
  input: {
    fontSize: 16,
    fontFamily: "Lato_400Regular",
    color: "#0F0F0F",
    width: 26,
    textAlign: "center",
  },
});
