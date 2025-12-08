import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { TitleSm } from "./typography";
import { Icon } from "./icon";
import { Button } from "./button";
import { ServiceItemType } from "@/types/service-item-type";
import { Input } from "./input";
import { QuantityInput } from "./quantity-input";
import { useState } from "react";

interface Props {
  isVisible: boolean;
  onAddService: (data: ServiceItemType) => void;
  onToggleVisibility: () => void;
}

export function AddServiceModal({
  isVisible,
  onAddService,
  onToggleVisibility,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [quantity, setQuantity] = useState<number | undefined>(undefined);

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setPrice(undefined);
    setQuantity(undefined);
  };

  const handleCancel = () => {
    resetFields();
    onToggleVisibility();
  };

  const handleSaveService = () => {
    if (!title || !description || !price || !quantity) {
      return;
    }

    const newService: ServiceItemType = {
      id: String(new Date().getTime()),
      title,
      description,
      price,
      quantity,
    };

    onAddService(newService);
    resetFields();
    onToggleVisibility();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TitleSm>Serviço</TitleSm>
          <TouchableOpacity onPress={onToggleVisibility}>
            <Icon name="multiply" size={24} color="#4A4A4A" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Input
            placeholder="Título do serviço"
            value={title}
            onChangeText={setTitle}
          />
          <Input
            placeholder="Descrição do serviço"
            type="textfield"
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.inputGroupRow}>
            <Input
              type="currency"
              placeholder="0,00"
              flex
              value={String(price ?? "")}
              onChangeText={(text) => setPrice(Number(text))}
            />
            <QuantityInput
              value={quantity}
              onChangeQuantity={setQuantity}
              maxLength={4}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button iconName="trash-2" variant="danger" onPress={resetFields} />
          <Button text="Salvar" iconName="check" onPress={handleSaveService} />
        </View>
      </View>
      <TouchableOpacity style={styles.backdrop} onPress={onToggleVisibility} />
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  container: {
    zIndex: 10,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  content: {
    padding: 20,
    paddingBottom: 32,
    gap: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,

    padding: 20,
    paddingBottom: 54,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  inputGroupRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
});
