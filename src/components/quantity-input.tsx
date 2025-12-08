import { useMemo, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "./icon";

interface Props
  extends Omit<TextInputProps, "value" | "placeholder" | "onChangeText"> {
  value: number | undefined;
  onChangeQuantity: (value: number) => void;
}

export function QuantityInput({ value, onChangeQuantity, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const isMinusDisabled = !value || Number(value) <= 0;

  const iconBorderColors = useMemo(() => {
    if (isFocused)
      return {
        border: "#6A46EB",
        icon: "#6A46EB",
      };
    return {
      border: "#E6E5E5",
      icon: "#4A4A4A",
    };
  }, [isFocused]);

  const onAdd = () => {
    onChangeQuantity((value ?? 0) + 1);
  };

  const onRemove = () => {
    if ((value ?? 0) > 0) {
      onChangeQuantity((value ?? 0) - 1);
    }
  };

  return (
    <View style={[styles.container, { borderColor: iconBorderColors.border }]}>
      <TouchableOpacity
        onPress={onRemove}
        activeOpacity={0.5}
        testID="remove-quantity-button"
        disabled={isMinusDisabled}
      >
        <Icon
          name="minus"
          size={20}
          color={isMinusDisabled ? "#E6E5E5" : "#6A46EB"}
        />
      </TouchableOpacity>
      <TextInput
        placeholderTextColor="#676767"
        cursorColor="#6A46EB"
        style={[styles.input]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={(text) =>
          onChangeQuantity(isNaN(Number(text)) ? 0 : Number(text ?? 0))
        }
        keyboardType="number-pad"
        value={String(value ?? "")}
        placeholder="0"
        {...rest}
      />
      <TouchableOpacity
        onPress={onAdd}
        activeOpacity={0.5}
        testID="add-quantity-button"
      >
        <Icon name="plus" size={20} color="#6A46EB" />
      </TouchableOpacity>
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
    fontSize: 16,
    fontFamily: "Lato_400Regular",
    color: "#0F0F0F",
    textAlign: "center",
  },
  textfield: {
    height: 96,
  },
});
