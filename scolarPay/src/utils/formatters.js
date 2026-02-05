export function formatCurrency(amount) {
  if (typeof amount !== "number") return amount;
  return amount.toLocaleString("fr-FR") + " FCFA";
}

