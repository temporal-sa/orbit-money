import { test } from "node:test";
import assert from "node:assert/strict";
import { formatMoney, roundCents, sum } from "../index.js";

test("formats dollars with two decimals", () => assert.equal(formatMoney(28), "$28.00"));
test("rounds to cents", () => assert.equal(roundCents(1.234), 1.23));
test("sums amounts", () => assert.equal(sum([0.1, 0.2]), 0.3));
