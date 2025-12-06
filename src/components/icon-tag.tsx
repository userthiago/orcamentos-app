import { StyleSheet, View } from "react-native";
import { Icon, IconName } from "./icon";

interface Props {
  name: IconName;
}

export function IconTag({ name }: Props) {
  return (
    <View style={styles.container}>
      <Icon name={name} size={20} color="#6A46EB" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#DFDAF2",
    height: 36,
    width: 36,
    borderRadius: 8,
  },
});
