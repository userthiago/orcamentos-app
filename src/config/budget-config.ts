import { SortOptions } from "@/enums/sort-options";
import { BudgetStatusTypes } from "@/types/budget-status";

export const BUDGET_STATUS_OPTIONS: Record<
  BudgetStatusTypes,
  { label: string; value: BudgetStatusTypes }
> = {
  draft: {
    label: "Rascunho",
    value: "draft",
  },
  sent: {
    label: "Enviado",
    value: "sent",
  },
  approved: {
    label: "Aprovado",
    value: "approved",
  },
  declined: {
    label: "Recusado",
    value: "declined",
  },
};

export const BUDGET_SORT_OPTIONS: Record<
  string,
  { label: string; value: string }
> = {
  most_recent: {
    label: "Mais recente",
    value: SortOptions.MOST_RECENT,
  },
  least_recent: {
    label: "Mais antigo",
    value: SortOptions.LEAST_RECENT,
  },
  lowest_value: {
    label: "Menor valor",
    value: SortOptions.LOWEST_VALUE,
  },
  highest_value: {
    label: "Maior valor",
    value: SortOptions.HIGHEST_VALUE,
  },
};

export const BUDGET_SORT_DEFAULT_OPTION = BUDGET_SORT_OPTIONS.most_recent;
