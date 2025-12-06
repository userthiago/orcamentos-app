export function formatCurrency(
  value: number,
  config: { hideCurrencySymbol?: boolean } | undefined = {}
): string {
  const formatedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  if (config.hideCurrencySymbol) {
    return formatedValue.replace("R$", "").trim();
  }

  return formatedValue;
}
