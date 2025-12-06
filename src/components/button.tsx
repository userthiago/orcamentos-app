import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Icon, IconName } from "./icon";
import { TitleSm } from "./typography";

type Variant = "primary" | "secondary" | "danger";

const variantStyles: Record<
  Variant,
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
  ...rest
}: Props) {
  const { backgroundColor, borderColor, textColor, iconColor } =
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
      {!!iconName && <Icon name={iconName} size={20} color={iconColor} />}
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
