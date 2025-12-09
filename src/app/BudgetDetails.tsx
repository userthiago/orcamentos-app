import { useState } from "react";
import { Button } from "@/components/button";
import { Check } from "@/components/check";
import { CurrencyValue } from "@/components/currency-value";
import { Icon } from "@/components/icon";
import { Input } from "@/components/input";
import { InputPercentage } from "@/components/input-percentage";
import { ScreenContainer } from "@/components/screen-container";
import { Section } from "@/components/section";
import { ServiceItem } from "@/components/service-item";
import { Status } from "@/components/status";
import {
  TextSm,
  TextXs,
  TitleLg,
  TitleSm,
  TitleXs,
} from "@/components/typography";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { BudgetStatusTypes } from "@/types/budget-status-types";
import { chunkArray } from "@/utils/array-utils";
import { formatCurrency } from "@/utils/currency-utils";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IconTag } from "@/components/icon-tag";
import { Tag } from "@/components/tag";

const MOCK_SERVICES = [
  {
    id: "1",
    title: "Desenvolvimento de website",
    description: "Criação de um website responsivo e moderno",
    value: 5000,
    quantity: 1,
  },
  {
    id: "2",
    title: "Design de logo",
    description: "Criação de uma identidade visual única",
    value: 1200,
    quantity: 1,
  },
  {
    id: "3",
    title: "Manutenção mensal",
    description: "Atualizações e suporte contínuo",
    value: 300,
    quantity: 12,
  },
  {
    id: "4",
    title: "Consultoria em marketing digital",
    description: "Estratégias para aumentar a presença online",
    value: 2000,
    quantity: 1,
  },
];

const STATUS_OPTIONS: BudgetStatusTypes[] = [
  "draft",
  "sent",
  "approved",
  "declined",
];

export default function BudgetDetails({
  navigation,
}: StackRoutesProps<"budgetDetails">) {
  const { navigate, goBack } = navigation;
  const id = "12345";
  const [selectedStatus, setSelectedStatus] =
    useState<BudgetStatusTypes>("draft");

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="chevron-left" size={24} color="#4A4A4A" />
          </TouchableOpacity>
          <TitleSm>Orçamento #{id}</TitleSm>
        </View>
        <Status type="sent" />
      </View>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sectionContainer}>
          <View style={[styles.customerTitleContainer, styles.sectionPadding]}>
            <IconTag name="shop" />
            <TitleLg style={{ flex: 1 }}>
              Desenvolvimento de aplicativo de loja online
            </TitleLg>
          </View>
          <View
            style={[styles.customerDescriptionContainer, styles.sectionPadding]}
          >
            <View style={styles.customerDescriptionItem}>
              <TextXs style={styles.customerDescriptionTitle}>Cliente</TextXs>
              <TextSm style={styles.customerDescriptionValue}>
                Soluções Tecnológicas Beta
              </TextSm>
            </View>
            <View style={styles.customerDescriptionRow}>
              <View style={styles.customerDescriptionItem}>
                <TextXs style={styles.customerDescriptionTitle}>
                  Criado em
                </TextXs>
                <TextSm style={styles.customerDescriptionValue}>
                  22/08/2024
                </TextSm>
              </View>
              <View style={styles.customerDescriptionItem}>
                <TextXs style={styles.customerDescriptionTitle}>
                  Atualizado em
                </TextXs>
                <TextSm style={styles.customerDescriptionValue}>
                  25/08/2024
                </TextSm>
              </View>
            </View>
          </View>
        </View>

        <Section iconName="note-with-text" title="Serviços inclusos">
          <View style={styles.includeServicesContainer}>
            {MOCK_SERVICES.map((service) => (
              <ServiceItem
                key={service.id}
                title={service.title}
                description={service.description}
                value={service.value}
                quantity={service.quantity}
                titleNumberOfLines={1}
                descriptionNumberOfLines={1}
              />
            ))}
          </View>
        </Section>

        <View
          style={[
            styles.sectionContainer,
            styles.sectionContainerRow,
            styles.sectionPadding,
          ]}
        >
          <IconTag name="shop" />
          <View style={{ flex: 1 }}>
            <View style={styles.budgetTotalRow}>
              <TextSm style={styles.budgetTotalLabel}>Subtotal</TextSm>
              <TitleXs style={styles.budgetTotalLabel}>
                {formatCurrency(4050)}
              </TitleXs>
            </View>
            <View style={styles.budgetTotalRow}>
              <View style={styles.budgetTotalRowGroup}>
                <TextSm style={styles.budgetTotalLabel}>Desconto</TextSm>
                <Tag text="5% off" variant="approved" />
              </View>
              <TitleXs style={[styles.budgetTotalLabel, { color: "#30752F" }]}>
                - {formatCurrency(200)}
              </TitleXs>
            </View>
            <View style={styles.divisor} />
            <View style={styles.budgetTotalRow}>
              <TitleSm style={styles.budgetTotalLabel}>
                Investimento total
              </TitleSm>
              <CurrencyValue value={3850} strong size="large" />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerActionsGroup}>
          <Button
            variant="danger"
            iconName="trash-2"
            onPress={() => goBack()}
          />
          <Button
            variant="secondary"
            iconName="copy"
            onPress={() => goBack()}
          />
          <Button
            variant="secondary"
            iconName="edit-pen"
            onPress={() => navigate("addBudget", { budgetId: id })}
          />
        </View>
        <Button
          text="Compartilhar"
          iconName="direction-up-right"
          onPress={() => {}}
        />
      </View>
    </ScreenContainer>
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
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    padding: 20,
    gap: 20,
  },
  sectionContainer: {
    backgroundColor: "#FAFAFA",
    borderColor: "#F0F0F0",
    borderWidth: 1,
    borderRadius: 16,
  },
  sectionContainerRow: {
    flexDirection: "row",
    gap: 16,
  },
  sectionPadding: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  customerTitleContainer: {
    flexDirection: "row",
    gap: 12,

    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
  },
  customerDescriptionContainer: {
    gap: 12,
  },
  customerDescriptionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  customerDescriptionTitle: {
    color: "#676767",
  },
  customerDescriptionValue: {
    color: "#0F0F0F",
  },
  customerDescriptionItem: {
    gap: 4,
    flex: 1,
  },
  includeServicesContainer: {
    gap: 20,
  },
  budgetTotalGroup: {
    gap: 2,
  },
  budgetTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  budgetTotalRowGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  budgetTotalLabel: {
    color: "#4A4A4A",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,

    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  divisor: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginVertical: 8,
  },
  footerActionsGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
