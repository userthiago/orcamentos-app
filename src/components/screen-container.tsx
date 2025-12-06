import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function ScreenContainer({
  children,
  hiddeBottomEdge,
}: {
  children: React.ReactNode;
  hiddeBottomEdge?: boolean;
}) {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: top, paddingBottom: hiddeBottomEdge ? 0 : bottom },
      ]}
      // edges={hiddeBottomEdge ? ["top"] : ["top", "bottom"]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
