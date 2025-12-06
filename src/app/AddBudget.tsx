import { ScreenContainer } from "@/components/screen-container";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { MaterialIcons } from "@expo/vector-icons";
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
            <MaterialIcons name="chevron-left" size={32} color="#4A4A4A" />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Orçamento</Text>
        </View>
      </View>
      <View style={styles.content}></View>
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
    paddingHorizontal: 20,
    flex: 1,
  },
});
