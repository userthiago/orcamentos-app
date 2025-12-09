import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Icon } from "./icon";
import { TextXs, TitleSm } from "./typography";
import { CurrencyValue } from "./currency-value";

interface Props {
  title: string;
  description: string;
  price: number;
  quantity: number;
  titleNumberOfLines?: number;
  descriptionNumberOfLines?: number;
  onEditPress?: () => void;
  testID?: string;
}

export function ServiceItem({
  title,
  description,
  price,
  quantity,
  titleNumberOfLines,
  descriptionNumberOfLines,
  onEditPress,
  testID,
}: Props) {
  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.descriptionContainer}>
        <TitleSm numberOfLines={titleNumberOfLines}>{title}</TitleSm>
        <TextXs
          style={{ color: "#676767" }}
          numberOfLines={descriptionNumberOfLines}
        >
          {description}
        </TextXs>
      </View>
      <View style={styles.valueContainer}>
        <CurrencyValue value={price} strong />
        <TextXs style={{ color: "#676767" }}>Qt: {quantity}</TextXs>
      </View>
      {onEditPress && (
        <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
          <Icon name="edit-pen" size={20} color="#6A46EB" />
        </TouchableOpacity>
      )}
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
  editButton: {
    flexShrink: 0,
  },
});
