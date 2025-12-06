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
import { TextSm, TextXs, TitleSm } from "@/components/typography";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { BudgetStatusTypes } from "@/types/budget-status";
import { chunkArray } from "@/utils/array-utils";
import { formatCurrency } from "@/utils/currency-utils";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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

export default function AddBudget({
  navigation,
}: StackRoutesProps<"addBudget">) {
  const { goBack } = navigation;
  const [selectedStatus, setSelectedStatus] =
    useState<BudgetStatusTypes>("draft");

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="chevron-left" size={32} color="#4A4A4A" />
          </TouchableOpacity>
          <TitleSm>Orçamento</TitleSm>
        </View>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Section iconName="shop" title="Informações gerais">
          <View style={styles.generalInformationContent}>
            <Input placeholder="Título" />
            <Input placeholder="Cliente" />
          </View>
        </Section>

        <Section iconName="tag" title="Status">
          <View style={styles.statusContent}>
            {chunkArray(STATUS_OPTIONS, 2).map((statusColumn, columnIndex) => (
              <View key={columnIndex} style={styles.statusColumn}>
                {statusColumn.map((status) => (
                  <Check
                    key={status}
                    type="radio"
                    isChecked={selectedStatus === status}
                    label={<Status type={status} />}
                    onToggle={() => setSelectedStatus(status)}
                  />
                ))}
              </View>
            ))}
          </View>
        </Section>

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
                onEditPress={() => {}}
              />
            ))}
            <Button
              iconName="plus"
              text="Adicionar serviço"
              variant="secondary"
              onPress={() => {}}
            />
          </View>
        </Section>

        <Section iconName="credit-card" title="Investimento" hideContentPadding>
          <View style={styles.investimentContent}>
            <View style={styles.investimentContentRow}>
              <TextSm>Subtotal</TextSm>
              <View style={[styles.investimentContentRowGroup, { gap: 12 }]}>
                <TextXs>8 itens</TextXs>
                <CurrencyValue value={3847.5} size="small" />
              </View>
            </View>
            <View style={styles.investimentContentRow}>
              <View style={[styles.investimentContentRowGroup, { gap: 8 }]}>
                <TextSm>Desconto</TextSm>
                <InputPercentage placeholder="0" />
              </View>
              <TextSm style={{ color: "#DB4D4D" }}>
                - {formatCurrency(200)}
              </TextSm>
            </View>
          </View>
          <View style={styles.investimentFooter}>
            <TitleSm>Valor total</TitleSm>
            <View style={styles.investimentFooterValueContainer}>
              <TextXs
                style={{
                  color: "#4A4A4A",
                  textDecorationColor: "#4A4A4A",
                  textDecorationLine: "line-through",
                }}
              >
                R$ 11.500,00
              </TextXs>
              <CurrencyValue value={3847.5} strong size="large" />
            </View>
          </View>
        </Section>
      </ScrollView>

      <View style={styles.footer}>
        <Button text="Cancelar" variant="secondary" onPress={() => goBack()} />
        <Button text="Salvar" iconName="check" onPress={() => {}} />
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
  generalInformationContent: {
    gap: 12,
  },
  statusContent: {
    flexDirection: "row",
    gap: 12,
  },
  statusColumn: {
    gap: 12,
    flex: 1,
  },
  includeServicesContainer: {
    gap: 20,
  },
  investimentContent: {
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  investimentContentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  investimentContentRowGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  investimentFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#FAFAFA",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    paddingHorizontal: 20,
  },
  investimentFooterValueContainer: {
    alignItems: "flex-end",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,

    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
});
