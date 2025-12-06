import { StyleSheet, Text, TextProps } from "react-native";

export function TitleLg({ children, style, ...rest }: TextProps) {
  return (
    <Text style={[styles.titleLg, style]} {...rest}>
      {children}
    </Text>
  );
}

export function TitleMd({ children, style, ...rest }: TextProps) {
  return (
    <Text style={[styles.titleMd, style]} {...rest}>
      {children}
    </Text>
  );
}

export function TitleSm({ children, style, ...rest }: TextProps) {
  return (
    <Text style={[styles.titleSm, style]} {...rest}>
      {children}
    </Text>
  );
}

export function TitleXs({ children, style, ...rest }: TextProps) {
  return (
    <Text style={[styles.titleXs, style]} {...rest}>
      {children}
    </Text>
  );
}

export function TextMd({ children, style, ...rest }: TextProps) {
  return (
    <Text style={[styles.textMd, style]} {...rest}>
      {children}
    </Text>
  );
}

export function TextSm({ children, style, ...rest }: TextProps) {
  return (
    <Text style={[styles.textSm, style]} {...rest}>
      {children}
    </Text>
  );
}

export function TextXs({ children, style, ...rest }: TextProps) {
  return (
    <Text style={[styles.textXs, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  titleLg: {
    fontSize: 18,
    lineHeight: 25.2,
    fontFamily: "Lato_700Bold",
    color: "#000000",
  },
  titleMd: {
    fontSize: 16,
    lineHeight: 22.4,
    fontFamily: "Lato_700Bold",
    color: "#000000",
  },
  titleSm: {
    fontSize: 14,
    lineHeight: 19.6,
    fontFamily: "Lato_700Bold",
    color: "#000000",
  },
  titleXs: {
    fontSize: 12,
    lineHeight: 16.8,
    fontFamily: "Lato_700Bold",
    color: "#000000",
  },
  textMd: {
    fontSize: 16,
    lineHeight: 22.4,
    fontFamily: "Lato_400Regular",
    color: "#0F0F0F",
  },
  textSm: {
    fontSize: 14,
    lineHeight: 19.6,
    fontFamily: "Lato_400Regular",
    color: "#0F0F0F",
  },
  textXs: {
    fontSize: 12,
    lineHeight: 16.8,
    fontFamily: "Lato_400Regular",
    color: "#0F0F0F",
  },
});
