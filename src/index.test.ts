import { describe, expect, it } from "vitest";

import { add } from "./index.ts";

describe("add()", () => {
  it("should return 5 when given 2 and 3", () => {
    const result = add(2, 3);

    expect(result).toBe(5);
  });
});
