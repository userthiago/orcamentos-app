import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { TitleSm } from "./typography";
import { Icon, IconName } from "./icon";

type Variant = "primary" | "secondary" | "danger";

const variantStyles: Record<
  Variant | "disabled",
  {
    backgroundColor: string;
    borderColor: string;
    textColor: string;
    iconColor: string;
  }
> = {
  primary: {
    backgroundColor: "#6A46EB",
    borderColor: "#6A46EB",
    textColor: "#FFFFFF",
    iconColor: "#FFFFFF",
  },
  secondary: {
    backgroundColor: "#FAFAFA",
    borderColor: "#E6E5E5",
    textColor: "#6A46EB",
    iconColor: "#6A46EB",
  },
  danger: {
    backgroundColor: "#FAFAFA",
    borderColor: "#E6E5E5",
    textColor: "#DB4D4D",
    iconColor: "#DB4D4D",
  },
  disabled: {
    backgroundColor: "#F0F0F0",
    borderColor: "#F0F0F0",
    textColor: "#A8A8A8",
    iconColor: "#A8A8A8",
  },
};

interface Props extends TouchableOpacityProps {
  text?: string;
  iconName?: IconName;
  variant?: Variant;
}

export function Button({
  text,
  iconName,
  variant = "primary",
  disabled,
  ...rest
}: Props) {
  const { backgroundColor, borderColor, textColor, iconColor } = disabled
    ? variantStyles["disabled"]
    : variantStyles[variant];

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
      disabled={disabled}
      {...rest}
    >
      {!!iconName && <Icon name={iconName} size={24} color={iconColor} />}
      {!!text && (
        <TitleSm
          style={[
            styles.text,
            {
              color: textColor,
            },
          ]}
        >
          {text}
        </TitleSm>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    padding: 12,
    borderRadius: 999,
    borderWidth: 1,
  },
  text: {
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
});
