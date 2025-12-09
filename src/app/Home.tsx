import { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import { StackRoutesProps } from "@/routes/StackRoutes";
import { BUDGET_SORT_DEFAULT_OPTION } from "@/config/budget-config";
import { SortOptions } from "@/enums/sort-options";
import { BudgetType } from "@/types/budget-type";
import { BudgetStorage } from "@/storage/budget-storage";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { FilterModal } from "@/components/filter-modal";
import { TextSm, TitleLg } from "@/components/typography";
import { ScreenContainer } from "@/components/screen-container";
import { ServiceBudgetCard } from "@/components/service-budget-card";
import { EmptyBudgetList } from "@/components/empty-budget-list";

export default function Home({ navigation }: StackRoutesProps<"home">) {
  const [storageBudgets, setStorageBudgets] = useState<BudgetType[]>([]);
  const [term, setTerm] = useState<string>("");
  const [budgets, setBudgets] = useState<BudgetType[]>([]);
  const [isFilterModalVisible, setIsFilterModalVisible] =
    useState<boolean>(false);
  const [filters, setFilters] = useState<{
    statuses: string[];
    sortOption: string;
  }>({ statuses: [], sortOption: BUDGET_SORT_DEFAULT_OPTION.value });

  const draftAmount = storageBudgets.filter(
    (budget) => budget.status === "draft"
  ).length;

  const toggleFilterModal = () => {
    setIsFilterModalVisible((prev) => !prev);
  };

  const resetFilters = useCallback(
    (budgetsData?: BudgetType[]) => {
      setBudgets(budgetsData ?? storageBudgets);
      setFilters({
        statuses: [],
        sortOption: BUDGET_SORT_DEFAULT_OPTION.value,
      });
    },
    [storageBudgets]
  );

  const setFiltersOptions = (statuses: string[], sortOption: string) => {
    setFilters({ statuses, sortOption });
  };

  const applyFilters = useCallback(async () => {
    const { statuses, sortOption } = filters;
    let filteredBudgets = [...storageBudgets];

    // Filtrar por status
    if (statuses.length > 0) {
      filteredBudgets = filteredBudgets.filter((budget) =>
        statuses.includes(budget.status)
      );
    }

    // Ordenar por opção selecionada
    if (sortOption === SortOptions.HIGHEST_VALUE) {
      filteredBudgets.sort((a, b) => b.priceTotal - a.priceTotal);
    } else if (sortOption === SortOptions.LOWEST_VALUE) {
      filteredBudgets.sort((a, b) => a.priceTotal - b.priceTotal);
    } else if (sortOption === SortOptions.MOST_RECENT) {
      filteredBudgets.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    } else if (sortOption === SortOptions.LEAST_RECENT) {
      filteredBudgets.sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
    }

    // Filtrar pelo termo de busca
    if (term.trim() !== "") {
      filteredBudgets = filteredBudgets.filter(
        (budget) =>
          budget.title.toLowerCase().includes(term.toLowerCase()) ||
          budget.customer.toLowerCase().includes(term.toLowerCase())
      );
    }

    setBudgets(filteredBudgets);
  }, [filters, storageBudgets, term]);

  const loadBudgets = useCallback(async () => {
    try {
      const budgets = await BudgetStorage.get();
      setStorageBudgets(budgets);
      resetFilters(budgets);
    } catch (error) {
      console.error("Erro ao carregar orçamentos:", error);
    }
  }, []);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  useFocusEffect(
    useCallback(() => {
      loadBudgets();
    }, [])
  );

  return (
    <>
      <ScreenContainer hiddeBottomEdge>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TitleLg style={styles.screenTitle}>Orçamentos</TitleLg>
            {draftAmount > 0 && (
              <TextSm style={styles.draftTitle}>
                Você tem {draftAmount} item{draftAmount > 1 ? "s" : ""} em
                rascunho
              </TextSm>
            )}
          </View>
          <Button
            text="Novo"
            iconName="plus"
            onPress={() => navigation.navigate("addBudget")}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.searchContainer}>
            <Input
              type="search"
              placeholder="Título ou cliente"
              flex
              value={term}
              onChangeText={setTerm}
            />
            <Button
              iconName="filter"
              variant="secondary"
              onPress={toggleFilterModal}
            />
          </View>
          <FlatList
            data={budgets}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ServiceBudgetCard
                status={item.status}
                title={item.title}
                customer={item.customer}
                price={item.priceTotal}
                onPress={() =>
                  navigation.navigate("budgetDetails", { budgetId: item.id })
                }
              />
            )}
            style={{ flex: 1 }}
            bounces={budgets.length > 0}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyBudgetList />}
            contentContainerStyle={[
              {
                paddingBottom: 64,
                gap: 8,
              },
              budgets.length === 0 && { flex: 1, justifyContent: "center" },
            ]}
          />
        </View>
      </ScreenContainer>
      <FilterModal
        isVisible={isFilterModalVisible}
        selectedStatuses={filters.statuses}
        selectedSortOption={filters.sortOption}
        onApplyFilters={setFiltersOptions}
        onToggleVisibility={toggleFilterModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerContent: {
    gap: 2,
    alignItems: "flex-start",
    flex: 1,
  },
  screenTitle: {
    color: "#6A46EB",
  },
  draftTitle: {
    color: "#676767",
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingVertical: 24,
    width: "100%",
  },
});
