// Money helpers. Amounts are in dollars as JavaScript numbers.

/** Round an amount to whole cents, e.g. 1.005 -> 1.01. */
export function roundCents(dollars) {
  return Math.round(dollars * 100) / 100;
}

/** Add up a list of amounts, rounded to cents. */
export function sum(amounts) {
  return roundCents(amounts.reduce((total, amount) => total + amount, 0));
}

/** Format an amount in dollars as a price, e.g. 28 -> "$28.00". */
export function formatMoney(dollars) {
  return `$${roundCents(dollars).toFixed(2)}`;
}
