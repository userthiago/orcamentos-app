import { useCallback, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as Crypto from "expo-crypto";

import { StackRoutesProps } from "@/routes/StackRoutes";
import { formatCurrency } from "@/utils/currency-utils";
import { BudgetType } from "@/types/budget-type";
import { BudgetStorage } from "@/storage/budget-storage";

import {
  TextSm,
  TextXs,
  TitleLg,
  TitleSm,
  TitleXs,
} from "@/components/typography";
import { Tag } from "@/components/tag";
import { Icon } from "@/components/icon";
import { Button } from "@/components/button";
import { Status } from "@/components/status";
import { Section } from "@/components/section";
import { IconTag } from "@/components/icon-tag";
import { ServiceItem } from "@/components/service-item";
import { CurrencyValue } from "@/components/currency-value";
import { ScreenContainer } from "@/components/screen-container";
import { getNextBudgetNumber } from "@/utils/budget-utils";

export default function BudgetDetails({
  navigation,
  route,
}: StackRoutesProps<"budgetDetails">) {
  const { navigate, goBack } = navigation;
  const { budgetId } = route.params;
  const [budgetData, setBudgetData] = useState<BudgetType | null>(null);

  const loadBudgetData = async (id: string) => {
    const data = await BudgetStorage.getById(id);
    setBudgetData(data);
  };

  const handleDuplicateBudget = async () => {
    if (budgetData) {
      const budgetNextNumber = await BudgetStorage.getLastBudgetNumber();
      const newBudgetData: BudgetType = {
        ...budgetData,
        id: Crypto.randomUUID(),
        budgetNumber: getNextBudgetNumber(budgetNextNumber),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await BudgetStorage.add(newBudgetData);

      Alert.alert("Cotação duplicada com sucesso");
      goBack();
    }
  };

  const handleRemoveBudget = async (id: string) => {
    Alert.alert(
      "Excluir cotação",
      "Tem certeza que deseja excluir esta cotação?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            await BudgetStorage.remove(id);
            goBack();
          },
        },
      ]
    );
  };

  useFocusEffect(
    useCallback(() => {
      loadBudgetData(budgetId);
    }, [budgetId])
  );

  if (budgetData === null) {
    return null;
  }

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="chevron-left" size={24} color="#4A4A4A" />
          </TouchableOpacity>
          <TitleSm>Orçamento #{budgetData.budgetNumber}</TitleSm>
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
            <TitleLg style={{ flex: 1 }}>{budgetData.title}</TitleLg>
          </View>
          <View
            style={[styles.customerDescriptionContainer, styles.sectionPadding]}
          >
            <View style={styles.customerDescriptionItem}>
              <TextXs style={styles.customerDescriptionTitle}>Cliente</TextXs>
              <TextSm style={styles.customerDescriptionValue}>
                {budgetData.customer}
              </TextSm>
            </View>
            <View style={styles.customerDescriptionRow}>
              <View style={styles.customerDescriptionItem}>
                <TextXs style={styles.customerDescriptionTitle}>
                  Criado em
                </TextXs>
                <TextSm style={styles.customerDescriptionValue}>
                  {new Date(budgetData.createdAt).toLocaleDateString()}
                </TextSm>
              </View>
              <View style={styles.customerDescriptionItem}>
                <TextXs style={styles.customerDescriptionTitle}>
                  Atualizado em
                </TextXs>
                <TextSm style={styles.customerDescriptionValue}>
                  {new Date(budgetData.updatedAt).toLocaleDateString()}
                </TextSm>
              </View>
            </View>
          </View>
        </View>

        <Section iconName="note-with-text" title="Serviços inclusos">
          <View style={styles.includeServicesContainer}>
            {budgetData.services.map((service) => (
              <ServiceItem
                key={service.id}
                title={service.title}
                description={service.description}
                price={service.price}
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
                {formatCurrency(budgetData.priceSubtotal)}
              </TitleXs>
            </View>
            <View style={styles.budgetTotalRow}>
              <View style={styles.budgetTotalRowGroup}>
                <TextSm style={styles.budgetTotalLabel}>Desconto</TextSm>
                <Tag
                  text={`${budgetData.discountPercentage}% off`}
                  variant={
                    budgetData.discountPercentage > 0 ? "approved" : "draft"
                  }
                />
              </View>
              <TitleXs
                style={[
                  styles.budgetTotalLabel,
                  {
                    color:
                      budgetData.discountAmount > 0 ? "#30752F" : "#4A4A4A",
                  },
                ]}
              >
                - {formatCurrency(budgetData.discountAmount)}
              </TitleXs>
            </View>
            <View style={styles.divisor} />
            <View style={styles.budgetTotalRow}>
              <TitleSm style={styles.budgetTotalLabel}>
                Investimento total
              </TitleSm>
              <CurrencyValue
                value={budgetData.priceTotal}
                strong
                size="large"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerActionsGroup}>
          <Button
            variant="danger"
            iconName="trash-2"
            onPress={() => handleRemoveBudget(budgetData.id)}
          />
          <Button
            variant="secondary"
            iconName="copy"
            onPress={handleDuplicateBudget}
          />
          <Button
            variant="secondary"
            iconName="edit-pen"
            onPress={() => navigate("addBudget", { budgetId: budgetData.id })}
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
    padding: 16,
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
