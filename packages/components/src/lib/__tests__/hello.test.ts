import { add, hello } from "../hello";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should add negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it("should add zero", () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe("hello", () => {
  it("should return a greeting message", () => {
    expect(hello()).toBe("Hello, components!");
  });
});
