import { useState } from "react";
import { Button } from "@/components/button";
import { Check } from "@/components/check";
import { CurrencyValue } from "@/components/currency-value";
import { Icon } from "@/components/icon";
import { Input } from "@/components/input";
import { InputPercentage } from "@/components/input-percentage";
import { ScreenContainer } from "@/components/screen-container";
import { Section } from "@/components/section";
import { Status } from "@/components/status";
import { TextSm, TextXs, TitleSm } from "@/components/typography";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { BudgetStatusTypes } from "@/types/budget-status-types";
import { chunkArray } from "@/utils/array-utils";
import { formatCurrency } from "@/utils/currency-utils";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AddServiceModal } from "@/components/add-service-modal";
import { ServiceType } from "@/types/service-type";
import { ServiceItem } from "@/components/service-item";
import { BUDGET_STATUS_DEFAULT_OPTION } from "@/config/budget-config";

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

  return (
    <>
      <ScreenContainer>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => goBack()}>
              <Icon name="chevron-left" size={24} color="#4A4A4A" />
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
              {chunkArray(STATUS_OPTIONS, 2).map(
                (statusColumn, columnIndex) => (
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
                )
              )}
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
                <TextSm
                  style={{ color: discountAmount > 0 ? "#DB4D4D" : "#4A4A4A" }}
                >
                  - {formatCurrency(discountAmount)}
                </TextSm>
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
          <Button text="Salvar" iconName="check" onPress={() => {}} />
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
