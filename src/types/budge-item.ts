import { BudgetStatusTypes } from "./budget-status";

export type BudgetItem = {
  id: string;
  description: string;
  customer: string;
  price: number;
  status: BudgetStatusTypes;
};
