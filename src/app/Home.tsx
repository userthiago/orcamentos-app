import { Button } from "@/components/button";
import { FilterModal } from "@/components/filter-modal";
import { Input } from "@/components/input";
import { ScreenContainer } from "@/components/screen-container";
import { ServiceBudgetCard } from "@/components/service-budget-card";
import { TextSm, TitleLg } from "@/components/typography";
import { BUDGET_SORT_DEFAULT_OPTION } from "@/config/budget-config";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { BudgetSummaryItem } from "@/types/budge-summary-item";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const MOCK_BUDGETS: BudgetSummaryItem[] = [
  {
    id: "1",
    description: "Desenvolvimento de aplicativo de loja online",
    customer: "Soluções Tecnológicas Beta",
    price: 22300,
    status: "approved",
  },
  {
    id: "2",
    description: "Consultoria em marketing digital",
    customer: "Marketing Wizards",
    price: 4000,
    status: "draft",
  },
  {
    id: "3",
    description: "Serviços de SEO",
    customer: "SEO Masters",
    price: 3500,
    status: "sent",
  },
  {
    id: "4",
    description: "Gestão de redes sociais",
    customer: "Social Experts",
    price: 1800,
    status: "declined",
  },
  {
    id: "5",
    description: "Desenvolvimento de website corporativo",
    customer: "Corporate Web Solutions",
    price: 12500,
    status: "approved",
  },
  {
    id: "6",
    description: "Campanha de publicidade online",
    customer: "Ad Creators",
    price: 6000,
    status: "sent",
  },
  {
    id: "7",
    description: "Design gráfico para materiais promocionais",
    customer: "Creative Designs",
    price: 2700,
    status: "draft",
  },
  {
    id: "8",
    description: "Desenvolvimento de sistema de gestão empresarial",
    customer: "Enterprise Solutions",
    price: 30000,
    status: "approved",
  },
  {
    id: "9",
    description: "Serviços de tradução e localização",
    customer: "Global Translations",
    price: 4500,
    status: "sent",
  },
];

export default function Home({ navigation }: StackRoutesProps<"home">) {
  const [isFilterModalVisible, setIsFilterModalVisible] =
    useState<boolean>(false);
  const [selectedStatuses, setSelectedStatuses] = useState<
    string[] | undefined
  >(undefined);
  const [selectedSortOption, setSelectedSortOption] = useState<string>(
    BUDGET_SORT_DEFAULT_OPTION.value
  );

  const draftAmount = MOCK_BUDGETS.filter(
    (budget) => budget.status === "draft"
  ).length;

  const toggleFilterModal = () => {
    setIsFilterModalVisible((prev) => !prev);
  };

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
            data={MOCK_BUDGETS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ServiceBudgetCard
                status={item.status}
                description={item.description}
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
        selectedStatuses={selectedStatuses}
        selectedSortOption={selectedSortOption}
        onSelectStatuses={setSelectedStatuses}
        onSelectSortOption={setSelectedSortOption}
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
