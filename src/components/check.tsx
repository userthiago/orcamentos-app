import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "./icon";

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
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
      testID={testID}
    >
      {type === "checkbox" ? (
        <CheckboxIcon isChecked={isChecked} />
      ) : (
        <RadioIcon isChecked={isChecked} />
      )}
      {typeof label === "string" ? (
        <Text style={styles.label}>{label}</Text>
      ) : (
        label
      )}
    </TouchableOpacity>
  );
}

function CheckboxIcon({ isChecked }: { isChecked: boolean }) {
  return (
    <View
      style={[
        styles.checkContainer,
        styles.checkboxContainer,
        isChecked ? styles.checked : styles.unchecked,
      ]}
    >
      {isChecked && <Icon name="check" size={16} color="#FFF" />}
    </View>
  );
}

function RadioIcon({ isChecked }: { isChecked: boolean }) {
  return (
    <View
      style={[
        styles.checkContainer,
        styles.radioContainer,
        isChecked ? styles.checked : styles.unchecked,
      ]}
    >
      {isChecked && <View style={styles.radioCircle} />}
    </View>
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
  checkContainer: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFFFFF",
    height: 20,
    width: 20,
    borderRadius: 6,
    borderWidth: 1,
  },
  checkboxContainer: {
    borderRadius: 6,
  },
  radioContainer: {
    borderRadius: 999,
  },
  radioCircle: {
    height: 8,
    width: 8,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },
  unchecked: {
    backgroundColor: "#FFFFFF",
    borderColor: "#A1A2A1",
  },
  checked: {
    backgroundColor: "#6A46EB",
    borderColor: "#6A46EB",
  },
});
