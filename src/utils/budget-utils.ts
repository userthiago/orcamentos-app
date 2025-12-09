export function getNextBudgetNumber(lastNumber: string) {
  return String(Number(lastNumber) + 1).padStart(5, "0");
}
