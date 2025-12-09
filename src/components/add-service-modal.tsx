import { useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import * as Crypto from "expo-crypto";

import { ServiceType } from "@/types/service-type";

import { Icon } from "./icon";
import { Input } from "./input";
import { Button } from "./button";
import { TitleSm } from "./typography";
import { QuantityInput } from "./quantity-input";
import { CurrencyInput } from "./currency-input";

interface Props {
  isVisible: boolean;
  editData?: ServiceType;
  onSaveService: (data: ServiceType) => void;
  onRemoveService: (id: string) => void;
  onToggleVisibility: () => void;
}

export function AddServiceModal({
  isVisible,
  editData,
  onSaveService,
  onRemoveService,
  onToggleVisibility,
}: Props) {
  const [id, setId] = useState<string | undefined>(undefined);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number | undefined>(undefined);

  const resetFields = () => {
    setId(undefined);
    setTitle("");
    setDescription("");
    setPrice(null);
    setQuantity(undefined);
  };

  const handleCancel = () => {
    if (id) {
      onRemoveService(id);
    }
    onToggleVisibility();
    resetFields();
  };

  const handleSaveService = () => {
    if (!title || !description || !price || !quantity) {
      return;
    }

    const newService: ServiceType = {
      id: id ?? Crypto.randomUUID(),
      title,
      description,
      price,
      quantity,
    };

    onSaveService(newService);
    onToggleVisibility();
    resetFields();
  };

  useEffect(() => {
    setId(editData?.id);
    setTitle(editData?.title || "");
    setDescription(editData?.description || "");
    setPrice(editData?.price ?? null);
    setQuantity(editData?.quantity);
  }, [editData]);

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
            <CurrencyInput
              flex
              value={price ?? null}
              placeholder="0,00"
              onChangeValue={(text) => setPrice(text)}
            />
            <QuantityInput
              value={quantity}
              onChangeQuantity={setQuantity}
              maxLength={4}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button iconName="trash-2" variant="danger" onPress={handleCancel} />
          <Button
            text="Salvar"
            iconName="check"
            onPress={handleSaveService}
            disabled={!title || !description || !price || !quantity}
          />
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
