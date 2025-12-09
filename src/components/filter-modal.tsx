import { useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import { Icon } from "./icon";
import { Button } from "./button";
import { Check } from "./check";
import { Status } from "./status";
import { TextSm, TitleSm } from "./typography";

import {
  BUDGET_SORT_DEFAULT_OPTION,
  BUDGET_SORT_OPTIONS,
  BUDGET_STATUS_OPTIONS,
} from "@/config/budget-config";

interface Props {
  isVisible: boolean;
  selectedStatuses: string[];
  selectedSortOption: string;
  onToggleVisibility: () => void;
  onApplyFilters: (statuses: string[], sortOption: string) => void;
}

export function FilterModal({
  isVisible,
  selectedStatuses,
  selectedSortOption,
  onToggleVisibility,
  onApplyFilters,
}: Props) {
  const [internalSelectedStatuses, setInternalSelectedStatuses] =
    useState<string[]>(selectedStatuses);
  const [internalSelectedSortOption, setInternalSelectedSortOption] =
    useState<string>(selectedSortOption);

  function handleSelectStatus(status: string) {
    if (internalSelectedStatuses?.includes(status)) {
      const updatedStatuses = internalSelectedStatuses.filter(
        (s) => s !== status
      );
      setInternalSelectedStatuses(updatedStatuses);
    } else {
      setInternalSelectedStatuses((prevStatuses) => [
        ...(prevStatuses || []),
        status,
      ]);
    }
  }

  function handleSelectSortOption(sortOption: string) {
    setInternalSelectedSortOption(sortOption);
  }

  function handleResetFilters() {
    // Reseta os estados internos
    setInternalSelectedStatuses([]);
    setInternalSelectedSortOption(BUDGET_SORT_DEFAULT_OPTION.value);

    // Reseta os estados externos
    onApplyFilters([], BUDGET_SORT_DEFAULT_OPTION.value);

    onToggleVisibility();
  }

  function handleConfirmFilters() {
    onApplyFilters(internalSelectedStatuses, internalSelectedSortOption);

    onToggleVisibility();
  }

  // Garante que os estados internos sejam sincronizados com os externos ao abrir o modal
  useEffect(() => {
    if (isVisible) {
      setInternalSelectedStatuses(selectedStatuses);
      setInternalSelectedSortOption(selectedSortOption);
    }
  }, [isVisible]);

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TitleSm>Filtrar e ordenar</TitleSm>
          <TouchableOpacity onPress={onToggleVisibility}>
            <Icon name="multiply" size={24} color="#4A4A4A" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.filterContainer}>
            <TextSm>Status</TextSm>
            <View style={styles.filterGroupContainer}>
              {Object.values(BUDGET_STATUS_OPTIONS).map((status) => (
                <Check
                  key={status.value}
                  type="checkbox"
                  label={<Status type={status.value} />}
                  isChecked={
                    internalSelectedStatuses?.includes(status.value) ?? false
                  }
                  onToggle={() => handleSelectStatus(status.value)}
                />
              ))}
            </View>
          </View>
          <View style={styles.filterContainer}>
            <TextSm>Ordenação</TextSm>
            <View style={styles.filterGroupContainer}>
              {Object.values(BUDGET_SORT_OPTIONS).map((sortOption) => (
                <Check
                  key={sortOption.value}
                  type="radio"
                  label={sortOption.label}
                  isChecked={sortOption.value === internalSelectedSortOption}
                  onToggle={() => handleSelectSortOption(sortOption.value)}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            text="Resetar filtros"
            variant="secondary"
            onPress={() => handleResetFilters()}
          />
          <Button
            text="Aplicar"
            iconName="check"
            onPress={() => handleConfirmFilters()}
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
    gap: 20,
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
  filterContainer: {
    gap: 16,
  },
  filterGroupContainer: {
    gap: 12,
  },
});
