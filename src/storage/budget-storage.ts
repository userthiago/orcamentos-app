import AsyncStorage from "@react-native-async-storage/async-storage";

import { BUDGET_STORAGE_KEY } from "@/config/budget-config";
import { BudgetType } from "@/types/budget-type";

async function get(): Promise<BudgetType[]> {
  try {
    const storage = await AsyncStorage.getItem(BUDGET_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error("GET_BUDGETS: " + error);
  }
}

async function getById(id: string): Promise<BudgetType | null> {
  try {
    const budgets = await get();
    const budget = budgets.find((b) => b.id === id);
    return budget || null;
  } catch (error) {
    throw new Error("GET_BUDGET_BY_ID: " + error);
  }
}

async function getLastBudgetNumber(): Promise<string> {
  try {
    const budgets = await get();
    if (budgets.length === 0) {
      return "00000";
    }
    const lastBudget = budgets.reduce((prev, current) =>
      Number(prev.budgetNumber) > Number(current.budgetNumber) ? prev : current
    );
    return lastBudget.budgetNumber;
  } catch (error) {
    throw new Error("GET_LAST_BUDGET_NUMBER: " + error);
  }
}

async function save(budgets: BudgetType[]): Promise<void> {
  try {
    await AsyncStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(budgets));
  } catch (error) {
    throw new Error("SAVE_BUDGETS: " + error);
  }
}

async function add(budget: BudgetType): Promise<BudgetType[]> {
  try {
    const budgets = await get();
    const updatedBudgets = [...budgets, budget];
    await save(updatedBudgets);
    return updatedBudgets;
  } catch (error) {
    throw new Error("ADD_BUDGET: " + error);
  }
}

async function update(budget: BudgetType): Promise<BudgetType[]> {
  try {
    const budgets = await get();
    const updatedBudgets = budgets.map((b) =>
      b.id === budget.id ? budget : b
    );
    await save(updatedBudgets);
    return updatedBudgets;
  } catch (error) {
    throw new Error("UPDATE_BUDGET: " + error);
  }
}

async function remove(id: string): Promise<BudgetType[]> {
  try {
    const budgets = await get();
    const updatedBudgets = budgets.filter((b) => b.id !== id);
    await save(updatedBudgets);
    return updatedBudgets;
  } catch (error) {
    throw new Error("REMOVE_BUDGET: " + error);
  }
}

async function clear(): Promise<void> {
  try {
    await AsyncStorage.removeItem(BUDGET_STORAGE_KEY);
  } catch (error) {
    throw new Error("CLEAR_BUDGETS: " + error);
  }
}

export const BudgetStorage = {
  get,
  getById,
  getLastBudgetNumber,
  save,
  add,
  update,
  remove,
  clear,
};
