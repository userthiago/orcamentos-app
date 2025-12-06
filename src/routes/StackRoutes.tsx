import AddBudget from "@/app/AddBudget";
import BudgetDetails from "@/app/BudgetDetails";
import Home from "@/app/Home";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type StackRoutesList = {
  home: undefined;
  addBudget:
    | undefined
    | {
        budgetId: string;
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
      <Stack.Screen name="addBudget" component={AddBudget} />
      <Stack.Screen name="budgetDetails" component={BudgetDetails} />
    </Stack.Navigator>
  );
}
