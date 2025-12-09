import { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import * as Crypto from "expo-crypto";

import { StackRoutesProps } from "@/routes/StackRoutes";
import { BUDGET_STATUS_OPTIONS } from "@/consts/budget-consts";
import { BUDGET_STATUS_DEFAULT_OPTION } from "@/config/budget-config";
import { chunkArray } from "@/utils/array-utils";
import { formatCurrency } from "@/utils/currency-utils";
import { ServiceType } from "@/types/service-type";
import { BudgetStatusTypes } from "@/types/budget-status-types";

import { Icon } from "@/components/icon";
import { Input } from "@/components/input";
import { Check } from "@/components/check";
import { Status } from "@/components/status";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { ServiceItem } from "@/components/service-item";
import { CurrencyValue } from "@/components/currency-value";
import { AddServiceModal } from "@/components/add-service-modal";
import { InputPercentage } from "@/components/input-percentage";
import { ScreenContainer } from "@/components/screen-container";
import { TextSm, TextXs, TitleSm } from "@/components/typography";
import { BudgetType } from "@/types/budget-type";
import { BudgetStorage } from "@/storage/budget-storage";
import { getNextBudgetNumber } from "@/utils/budget-utils";

export default function AddBudget({
  navigation,
  route,
}: StackRoutesProps<"addBudget">) {
  const { goBack } = navigation;

  const [budgetNumber, setBudgetNumber] = useState("");
  const [title, setTitle] = useState("");
  const [customer, setCustomer] = useState("");
  const [status, setStatus] = useState<BudgetStatusTypes>(
    BUDGET_STATUS_DEFAULT_OPTION.value
  );
  const [services, setServices] = useState<ServiceType[]>([]);
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);

  const [selectedServiceToEdit, setSelectedServiceToEdit] = useState<
    ServiceType | undefined
  >(undefined);

  const priceSubtotal = services.reduce(
    (acc, service) => acc + service.price * service.quantity,
    0
  );
  const discountAmount = (priceSubtotal * discountPercentage) / 100;
  const priceTotal = priceSubtotal - discountAmount;

  const [isAddServiceModalVisible, setIsAddServiceModalVisible] =
    useState(false);

  const handleToggleAddServiceModal = () => {
    if (isAddServiceModalVisible) {
      setSelectedServiceToEdit(undefined);
    }
    setIsAddServiceModalVisible((prev) => !prev);
  };

  const handleSaveService = (data: ServiceType) => {
    const isEditing = Boolean(
      services.find((service) => service.id === data.id)
    );

    if (isEditing) {
      setServices((prevServices) =>
        prevServices.map((service) => (service.id === data.id ? data : service))
      );
    } else {
      setServices((prevServices) => [...prevServices, data]);
    }
  };

  const handleSelectServiceToEdit = (service: ServiceType) => {
    setSelectedServiceToEdit(service);
    handleToggleAddServiceModal();
  };

  const handleRemoveService = (id: string) => {
    setServices((prevServices) =>
      prevServices.filter((service) => service.id !== id)
    );
  };

  const handleSaveBudget = async () => {
    const budgetId = route.params?.budgetId;

    if (budgetId) {
      const existingBudget = await BudgetStorage.getById(budgetId);

      if (!existingBudget) {
        Alert.alert("Erro", "Orçamento não encontrado para atualização");
        goBack();
        return;
      }

      const updatedBudget: BudgetType = {
        ...existingBudget,
        title,
        customer,
        status,
        services,
        discountPercentage,
        discountAmount,
        priceSubtotal,
        priceTotal,
        updatedAt: new Date().toISOString(),
      };

      await BudgetStorage.update(updatedBudget);

      Alert.alert("Sucesso", "Cotação atualizada com sucesso");
      goBack();
    } else {
      const budgetNumber = await BudgetStorage.getLastBudgetNumber();
      const newBudget: BudgetType = {
        id: Crypto.randomUUID(),
        budgetNumber: getNextBudgetNumber(budgetNumber),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        title,
        customer,
        status,
        services,
        discountPercentage,
        discountAmount,
        priceSubtotal,
        priceTotal,
      };

      await BudgetStorage.add(newBudget);

      Alert.alert("Sucesso", "Cotação salva com sucesso");
      goBack();
    }
  };

  const loadBudgetDetails = async () => {
    const budgetId = route.params?.budgetId;

    if (!budgetId) {
      return;
    }

    const budgetData = await BudgetStorage.getById(budgetId);

    if (!budgetData) {
      return;
    }

    setBudgetNumber(budgetData.budgetNumber);
    setTitle(budgetData.title);
    setCustomer(budgetData.customer);
    setStatus(budgetData.status);
    setServices(budgetData.services);
    setDiscountPercentage(budgetData.discountPercentage);
  };

  useEffect(() => {
    loadBudgetDetails();
  }, []);

  return (
    <>
      <ScreenContainer>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => goBack()}>
              <Icon name="chevron-left" size={24} color="#4A4A4A" />
            </TouchableOpacity>
            <TitleSm>
              Orçamento{budgetNumber ? ` #${budgetNumber}` : ""}
            </TitleSm>
          </View>
        </View>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Section iconName="shop" title="Informações gerais">
            <View style={styles.generalInformationContent}>
              <Input
                placeholder="Título"
                value={title}
                onChangeText={setTitle}
              />
              <Input
                placeholder="Cliente"
                value={customer}
                onChangeText={setCustomer}
              />
            </View>
          </Section>

          <Section iconName="tag" title="Status">
            <View style={styles.statusContent}>
              {chunkArray(
                Object.values(BUDGET_STATUS_OPTIONS).map(
                  (option) => option.value
                ),
                2
              ).map((statusColumn, columnIndex) => (
                <View key={columnIndex} style={styles.statusColumn}>
                  {statusColumn.map((statusItem) => (
                    <Check
                      key={statusItem}
                      type="radio"
                      isChecked={statusItem === status}
                      label={<Status type={statusItem} />}
                      onToggle={() => setStatus(statusItem)}
                    />
                  ))}
                </View>
              ))}
            </View>
          </Section>

          <Section iconName="note-with-text" title="Serviços inclusos">
            <View style={styles.includeServicesContainer}>
              {services.map((service) => (
                <ServiceItem
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  quantity={service.quantity}
                  titleNumberOfLines={1}
                  descriptionNumberOfLines={1}
                  onEditPress={() => handleSelectServiceToEdit(service)}
                />
              ))}
              <Button
                iconName="plus"
                text="Adicionar serviço"
                variant="secondary"
                onPress={() => handleToggleAddServiceModal()}
              />
            </View>
          </Section>

          <Section
            iconName="credit-card"
            title="Investimento"
            hideContentPadding
          >
            <View style={styles.investimentContent}>
              <View style={styles.investimentContentRow}>
                <TextSm>Subtotal</TextSm>
                <View style={[styles.investimentContentRowGroup, { gap: 12 }]}>
                  <TextXs>
                    {services.length} item{services.length !== 1 ? "s" : ""}
                  </TextXs>
                  <CurrencyValue value={priceSubtotal} size="small" />
                </View>
              </View>
              <View style={styles.investimentContentRow}>
                <View style={[styles.investimentContentRowGroup, { gap: 8 }]}>
                  <TextSm>Desconto</TextSm>
                  <InputPercentage
                    placeholder="0"
                    value={String(discountPercentage)}
                    onChangeText={(text) => setDiscountPercentage(Number(text))}
                  />
                </View>
                {discountAmount > 0 && (
                  <TextSm style={{ color: "#DB4D4D" }}>
                    - {formatCurrency(discountAmount)}
                  </TextSm>
                )}
              </View>
            </View>
            <View style={styles.investimentFooter}>
              <TitleSm>Valor total</TitleSm>
              <View style={styles.investimentFooterValueContainer}>
                {priceSubtotal !== priceTotal && (
                  <TextXs
                    style={{
                      color: "#4A4A4A",
                      textDecorationColor: "#4A4A4A",
                      textDecorationLine: "line-through",
                    }}
                  >
                    {formatCurrency(priceSubtotal)}
                  </TextXs>
                )}
                <CurrencyValue value={priceTotal} strong size="large" />
              </View>
            </View>
          </Section>
        </ScrollView>

        <View style={styles.footer}>
          <Button
            text="Cancelar"
            variant="secondary"
            onPress={() => goBack()}
          />
          <Button text="Salvar" iconName="check" onPress={handleSaveBudget} />
        </View>
      </ScreenContainer>
      <AddServiceModal
        isVisible={isAddServiceModalVisible}
        editData={selectedServiceToEdit}
        onToggleVisibility={handleToggleAddServiceModal}
        onSaveService={handleSaveService}
        onRemoveService={handleRemoveService}
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
