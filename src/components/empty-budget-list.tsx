import { StyleSheet, View } from "react-native";

import { Icon } from "./icon";
import { TextSm, TitleMd } from "./typography";

export function EmptyBudgetList() {
  return (
    <View style={styles.container}>
      <Icon name="note-with-text" style={styles.icon} color="#6A46EB" />
      <TitleMd style={{ color: "#676767", textAlign: "center" }}>
        Nenhum orçamento encontrado!
      </TitleMd>
      <TextSm style={{ color: "#676767", textAlign: "center" }}>
        Crie orçamentos para gerenciar seus serviços e acompanhar seus custos de
        forma eficiente.
      </TextSm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginBottom: 4,
  },
});
