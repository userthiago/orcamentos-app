import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import { MaterialIcons } from "@expo/vector-icons";

type Variant = "primary" | "secondary" | "danger";

interface Props extends TouchableOpacityProps {
  label: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  variant?: Variant;
}

const variantStyles = {
  primary: {
    backgroundColor: "#6A46EB",
    borderColor: "#6A46EB",
    labelColor: "#FFFFFF",
    iconColor: "#FFFFFF",
  },
  secondary: {
    backgroundColor: "#FAFAFA",
    borderColor: "#E6E5E5",
    labelColor: "#6A46EB",
    iconColor: "#6A46EB",
  },
  danger: {
    backgroundColor: "#FAFAFA",
    borderColor: "#E6E5E5",
    labelColor: "#DB4D4D",
    iconColor: "#DB4D4D",
  },
};

export function Button({
  label,
  iconName,
  variant = "primary",
  ...rest
}: Props) {
  useFonts({
    Lato_700Bold,
  });

  const { backgroundColor, borderColor, labelColor, iconColor } =
    variantStyles[variant];

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        },
      ]}
      activeOpacity={0.5}
      {...rest}
    >
      <MaterialIcons name={iconName} size={20} color={iconColor} />
      <Text
        style={[
          styles.label,
          {
            color: labelColor,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    padding: 12,
    borderRadius: 999,
    borderWidth: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: "Lato_700Bold",
  },
});
