# orbit-money

Small money helpers used by the [Orbit Supply Co. storefront](https://github.com/temporal-sa/agentic-sdlc-storefront). It exists as a sandbox dependency for the [Temporal agentic SDLC demo](https://github.com/temporal-sa/temporal-demo-agentic-sdlc): version 2.0.0 makes a real breaking change, so a dependency bump in the storefront needs code changes, which the demo's agents work out and make.

```js
import { formatMoney, roundCents, sum } from "orbit-money";
formatMoney(28); // "$28.00"
```

Install from GitHub: `npm install github:temporal-sa/orbit-money#v1.0.0`. See [CHANGELOG.md](CHANGELOG.md).
