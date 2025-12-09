import { StyleSheet, View, ViewProps } from "react-native";

import { TextXs } from "./typography";
import { Icon, IconName } from "./icon";

interface Props extends ViewProps {
  children: React.ReactNode;
  title: string;
  iconName?: IconName;
  hideContentPadding?: boolean;
}

export function Section({
  title,
  iconName,
  children,
  hideContentPadding,
  ...rest
}: Props) {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.header}>
        {iconName && <Icon name={iconName} color="#6A46EB" size={16} />}
        <TextXs style={{ color: "#676767" }}>{title}</TextXs>
      </View>
      <View style={hideContentPadding ? undefined : styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#F0F0F0",
  },
  content: {
    padding: 16,
  },
});
