import { SortOptions } from "@/enums/sort-options";
import { StatusOptions } from "@/enums/status-options";
import { BudgetStatusTypes } from "@/types/budget-status-types";

export const BUDGET_STATUS_OPTIONS: Record<
  BudgetStatusTypes,
  { label: string; value: BudgetStatusTypes }
> = {
  draft: {
    label: "Rascunho",
    value: StatusOptions.DRAFT,
  },
  sent: {
    label: "Enviado",
    value: StatusOptions.SENT,
  },
  approved: {
    label: "Aprovado",
    value: StatusOptions.APPROVED,
  },
  declined: {
    label: "Recusado",
    value: StatusOptions.DECLINED,
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
