import { BudgetStatusTypes } from "./budget-status";

export type BudgetSummaryItem = {
  id: string;
  description: string;
  customer: string;
  price: number;
  status: BudgetStatusTypes;
  createdAt: string;
};
