import Home from "@/app/Home";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View } from "react-native";

export type StackRoutesList = {
  home: undefined;
  budgetManagement:
    | undefined
    | {
        serviceId: string;
      };
  budgetDetails: {
    budgetId: string;
  };
};

export type StackRoutesProps<RouteName extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, RouteName>;

const Stack = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="budgetManagement" component={View} />
      <Stack.Screen name="budgetDetails" component={View} />
    </Stack.Navigator>
  );
}
