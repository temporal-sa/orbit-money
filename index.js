// Money helpers. Since 2.0.0, amounts are integer cents: floating-point dollars drift
// (0.1 + 0.2 !== 0.3), and cents don't.

/** Convert a dollar amount to integer cents, e.g. 28.5 -> 2850. */
export function toCents(dollars) {
  return Math.round(dollars * 100);
}

/** Add up a list of amounts in cents. */
export function sum(cents) {
  return cents.reduce((total, amount) => total + amount, 0);
}

/** Format an amount in cents as a price, e.g. 2800 -> "$28.00". */
export function formatMoney(cents, { currency = "USD" } = {}) {
  if (!Number.isInteger(cents)) {
    throw new TypeError(`formatMoney expects integer cents, got ${cents}`);
  }
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(cents / 100);
}
