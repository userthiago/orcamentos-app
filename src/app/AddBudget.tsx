import { Check } from "@/components/check";
import { Icon } from "@/components/icon";
import { ScreenContainer } from "@/components/screen-container";
import { Section } from "@/components/section";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AddBudget({
  navigation,
}: StackRoutesProps<"addBudget">) {
  const { goBack } = navigation;
  return (
    <ScreenContainer hiddeBottomEdge>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="chevron-left" size={32} color="#4A4A4A" />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Orçamento</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Section iconName="shop" title="Informações gerais">
          <View></View>
        </Section>
        <Section iconName="tag" title="Status">
          <View />
        </Section>
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
    flex: 1,
  },
});
