import { BudgetStatusTypes } from "./budget-status-types";

export type BudgetSummaryType = {
  id: string;
  title: string;
  customer: string;
  price: number;
  status: BudgetStatusTypes;
  createdAt: string;
};
