import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import { MaterialIcons } from "@expo/vector-icons";
import { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CheckProps {
  type: "checkbox" | "radio";
  isChecked: boolean;
  label: string | React.ReactNode;
  onToggle: () => void;
  testID?: string;
}

export function Check({
  type,
  isChecked,
  label,
  onToggle,
  testID,
}: CheckProps) {
  useFonts({
    Lato_400Regular,
  });

  const iconName = useMemo(() => {
    if (type === "checkbox")
      return isChecked ? "check-box" : "check-box-outline-blank";
    else return isChecked ? "radio-button-checked" : "radio-button-unchecked";
  }, [type, isChecked]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
      testID={testID}
    >
      <MaterialIcons
        name={iconName}
        size={20}
        color={isChecked ? "#6A46EB" : "#A1A2A1"}
      />
      {typeof label === "string" ? (
        <Text style={styles.label}>{label}</Text>
      ) : (
        label
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  label: {
    color: "#4A4A4A",
    fontFamily: "Lato_400Regular",
  },
});
