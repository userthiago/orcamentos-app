import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CurrencyValue } from "./currency-value";
import { Icon } from "./icon";

interface Props {
  title: string;
  description: string;
  value: number;
  quantity: number;
  titleNumberOfLines?: number;
  descriptionNumberOfLines?: number;
  onEditPress: () => void;
  testID?: string;
}

export function ServiceItem({
  title,
  description,
  value,
  quantity,
  titleNumberOfLines,
  descriptionNumberOfLines,
  onEditPress,
  testID,
}: Props) {
  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.tile} numberOfLines={titleNumberOfLines}>
          {title}
        </Text>
        <Text
          style={styles.description}
          numberOfLines={descriptionNumberOfLines}
        >
          {description}
        </Text>
      </View>
      <View style={styles.valueContainer}>
        <CurrencyValue value={value} strong />
        <Text style={styles.quantityText}>Qt: {quantity}</Text>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
        <Icon name="edit-pen" size={20} color="#6A46EB" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  descriptionContainer: {
    flex: 1,
  },
  valueContainer: {
    alignItems: "flex-end",
    flexShrink: 0,
  },
  tile: {
    fontFamily: "Lato_700Bold",
    color: "#0F0F0F",
    fontSize: 14,
    lineHeight: 19.6,
  },
  description: {
    fontFamily: "Lato_400Regular",
    color: "#676767",
    fontSize: 12,
    lineHeight: 16.8,
  },
  quantityText: {
    fontFamily: "Lato_400Regular",
    color: "#676767",
    fontSize: 10,
    lineHeight: 14,
  },
  editButton: {
    flexShrink: 0,
  },
});
