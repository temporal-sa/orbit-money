import { test } from "node:test";
import assert from "node:assert/strict";
import { formatMoney, sum, toCents } from "../index.js";

test("formats cents as dollars", () => assert.equal(formatMoney(2800), "$28.00"));
test("refuses fractional cents", () => assert.throws(() => formatMoney(28.5)));
test("converts dollars to cents", () => assert.equal(toCents(1.234), 123));
test("sums cents exactly", () => assert.equal(sum([10, 20]), 30));
