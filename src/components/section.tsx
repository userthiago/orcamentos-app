import { StyleSheet, Text, View, ViewProps } from "react-native";
import { Icon, IconName } from "./icon";

interface Props extends ViewProps {
  children: React.ReactNode;
  title: string;
  iconName?: IconName;
}

export function Section({ title, iconName, children, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.header}>
        {iconName && <Icon name={iconName} color="#6A46EB" size={16} />}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>{children}</View>
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
  title: {
    color: "#676767",
    fontSize: 12,
    lineHeight: 16.8,
    fontFamily: "Lato_400Regular",
  },
  content: {
    padding: 16,
  },
});
