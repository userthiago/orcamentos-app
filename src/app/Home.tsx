import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { ScreenContainer } from "@/components/screen-container";
import { ServiceBudgetCard } from "@/components/service-budget-card";
import { BudgetItem } from "@/types/budge-item";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const MOCK_BUDGETS: BudgetItem[] = [
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

export default function Home() {
  const draftAmount = MOCK_BUDGETS.filter(
    (budget) => budget.status === "draft"
  ).length;

  return (
    <ScreenContainer hiddeBottomEdge>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.screenTitle}>Orçamentos</Text>
          {draftAmount > 0 && (
            <Text style={styles.draftTitle}>
              Você tem {draftAmount} item{draftAmount > 1 ? "s" : ""} em
              rascunho
            </Text>
          )}
        </View>
        <Button text="Novo" iconName="add" onPress={() => {}} />
      </View>
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <Input type="search" placeholder="Título ou cliente" />
          <Button
            iconName="filter-list"
            variant="secondary"
            onPress={() => {}}
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
              onPress={() => {}}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 64, gap: 8 }}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
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
    fontFamily: "Lato_700Bold",
    color: "#6A46EB",
    fontSize: 18,
  },
  draftTitle: {
    fontFamily: "Lato_400Regular",
    color: "#676767",
    fontSize: 14,
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
  },
});
