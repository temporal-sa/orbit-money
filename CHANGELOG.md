# Changelog

## 2.0.0

### Breaking changes

- **Amounts are integer cents everywhere.** Floating-point dollars drift (`0.1 + 0.2 !== 0.3`), so every function now takes and returns integer cents.
- **`formatMoney(cents, { currency })`** takes cents, not dollars. `formatMoney(28)` used to return `"$28.00"`; it now returns `"$0.28"`. It throws a `TypeError` if it's given a non-integer.
- **`roundCents` is removed.** Use `toCents(dollars)` to convert a dollar amount to integer cents once, at the edge of your system.
- **`sum(cents)`** adds integer cents and no longer rounds.

### Migrating from 1.x

1. Convert prices to cents where they enter your code: `toCents(product.price)`.
2. Keep totals in cents; replace `roundCents(x)` with arithmetic on cents.
3. Pass cents to `formatMoney`. If you still have a dollar amount, call `formatMoney(toCents(dollars))`.

## 1.0.0

- `formatMoney(dollars)`, `roundCents(dollars)` and `sum(amounts)`.
