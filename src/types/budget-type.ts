import { BudgetStatusTypes } from "./budget-status-types";
import { ServiceType } from "./service-type";

export type BudgetType = {
  id: string;
  budgetNumber: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  customer: string;
  status: BudgetStatusTypes;
  services: ServiceType[];
  discountPercentage: number;
  discountAmount: number;
  priceSubtotal: number;
  priceTotal: number;
};
