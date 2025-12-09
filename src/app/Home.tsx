import { Button } from "@/components/button";
import { FilterModal } from "@/components/filter-modal";
import { Input } from "@/components/input";
import { ScreenContainer } from "@/components/screen-container";
import { ServiceBudgetCard } from "@/components/service-budget-card";
import { TextSm, TitleLg } from "@/components/typography";
import { BUDGET_SORT_DEFAULT_OPTION } from "@/config/budget-config";
import { SortOptions } from "@/enums/sort-options";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { BudgetSummaryType } from "@/types/budge-summary-type";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const MOCK_BUDGETS: BudgetSummaryType[] = [
  {
    id: "1",
    title: "Desenvolvimento de aplicativo de loja online",
    customer: "Soluções Tecnológicas Beta",
    price: 22300,
    status: "approved",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Consultoria em marketing digital",
    customer: "Marketing Wizards",
    price: 4000,
    status: "draft",
    createdAt: "2024-02-10",
  },
  {
    id: "3",
    title: "Serviços de SEO",
    customer: "SEO Masters",
    price: 3500,
    status: "sent",
    createdAt: "2024-03-05",
  },
  {
    id: "4",
    title: "Gestão de redes sociais",
    customer: "Social Experts",
    price: 1800,
    status: "declined",
    createdAt: "2024-04-20",
  },
  {
    id: "5",
    title: "Desenvolvimento de website corporativo",
    customer: "Corporate Web Solutions",
    price: 12500,
    status: "approved",
    createdAt: "2024-05-12",
  },
  {
    id: "6",
    title: "Campanha de publicidade online",
    customer: "Ad Creators",
    price: 6000,
    status: "sent",
    createdAt: "2024-06-18",
  },
  {
    id: "7",
    title: "Design gráfico para materiais promocionais",
    customer: "Creative Designs",
    price: 2700,
    status: "draft",
    createdAt: "2024-07-22",
  },
  {
    id: "8",
    title: "Desenvolvimento de sistema de gestão empresarial",
    customer: "Enterprise Solutions",
    price: 30000,
    status: "approved",
    createdAt: "2024-08-30",
  },
  {
    id: "9",
    title: "Serviços de tradução e localização",
    customer: "Global Translations",
    price: 4500,
    status: "sent",
    createdAt: "2024-09-14",
  },
];

export default function Home({ navigation }: StackRoutesProps<"home">) {
  const [budgets, setBudgets] = useState<BudgetSummaryType[]>(MOCK_BUDGETS);
  const [isFilterModalVisible, setIsFilterModalVisible] =
    useState<boolean>(false);
  const [filters, setFilters] = useState<{
    statuses: string[];
    sortOption: string;
  }>({ statuses: [], sortOption: BUDGET_SORT_DEFAULT_OPTION.value });

  const draftAmount = MOCK_BUDGETS.filter(
    (budget) => budget.status === "draft"
  ).length;

  const toggleFilterModal = () => {
    setIsFilterModalVisible((prev) => !prev);
  };

  const applyFilters = useCallback((statuses: string[], sortOption: string) => {
    let filteredBudgets = [...MOCK_BUDGETS];

    // Filtrar por status
    if (statuses.length > 0) {
      filteredBudgets = filteredBudgets.filter((budget) =>
        statuses.includes(budget.status)
      );
    }

    // Ordenar por opção selecionada
    if (sortOption === SortOptions.HIGHEST_VALUE) {
      filteredBudgets.sort((a, b) => b.price - a.price);
    } else if (sortOption === SortOptions.LOWEST_VALUE) {
      filteredBudgets.sort((a, b) => a.price - b.price);
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

    setFilters({ statuses, sortOption });
    setBudgets(filteredBudgets);
  }, []);

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
            <Input type="search" placeholder="Título ou cliente" flex />
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
                price={item.price}
                onPress={() =>
                  navigation.navigate("budgetDetails", { budgetId: item.id })
                }
              />
            )}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 64,
              gap: 8,
            }}
          />
        </View>
      </ScreenContainer>
      <FilterModal
        isVisible={isFilterModalVisible}
        selectedStatuses={filters.statuses}
        selectedSortOption={filters.sortOption}
        onApplyFilters={applyFilters}
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
