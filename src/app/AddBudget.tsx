import { Button } from "@/components/button";
import { Check } from "@/components/check";
import { Icon } from "@/components/icon";
import { Input } from "@/components/input";
import { ScreenContainer } from "@/components/screen-container";
import { Section } from "@/components/section";
import { ServiceItem } from "@/components/service-item";
import { Status } from "@/components/status";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { BudgetStatusTypes } from "@/types/budget-status";
import { chunkArray } from "@/utils/array-utils";
import React, { useState } from "react";
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
          <Text style={styles.screenTitle}>Orçamento</Text>
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
        <Section iconName="credit-card" title="Investimento">
          <View />
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
  screenTitle: {
    fontFamily: "Lato_700Bold",
    color: "#0F0F0F",
    fontSize: 14,
    lineHeight: 19.6,
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
