import { useMemo, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { TitleMd } from "./typography";
import { Icon } from "./icon";

interface Props extends TextInputProps {
  isInvalid?: boolean;
  type?: "search" | "currency" | "textfield";
  flex?: boolean;
}

export function Input({ type, isInvalid, flex, ...rest }: Props) {
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
        type === "textfield" && styles.textfieldContainer,
        flex && { flex: 1 },
      ]}
    >
      {(() => {
        if (type === "search") {
          return <Icon name="search" size={20} color={iconBorderColors.icon} />;
        }
        if (type === "currency") {
          return (
            <TitleMd
              style={[
                {
                  color: iconBorderColors.icon,
                },
              ]}
            >
              R$
            </TitleMd>
          );
        }
        return null;
      })()}

      <TextInput
        placeholderTextColor="#676767"
        cursorColor="#6A46EB"
        style={[styles.input, type === "textfield" && styles.textfield]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType={type === "currency" ? "decimal-pad" : "default"}
        multiline={type === "textfield"}
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
  textfieldContainer: {
    height: 120,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Lato_400Regular",
    color: "#0F0F0F",
  },
  textfield: {
    height: 96,
  },
});
