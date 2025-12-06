import {
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato";
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
  useFonts({ Lato_100Thin, Lato_300Light, Lato_400Regular, Lato_700Bold });

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
