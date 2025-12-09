import { BudgetStatusTypes } from "./budget-status-types";
import { ServiceType } from "./service-type";

export type BudgetType = {
  id: string;
  budgetNumber: string;
  createdAt: string;
  title: string;
  customer: string;
  status: BudgetStatusTypes;
  services: ServiceType[];
  discount: number;
  price: number;
  priceWithDiscount: number;
};
