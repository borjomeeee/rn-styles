import { or } from "../dist/or";

const errorFunc = () => {
  throw new Error("Damn!");
};
const say42 = () => 42;
const say52 = () => 52;

describe("'or' success result", () => {
  it("(two items) first function error", () => {
    expect(or(errorFunc, say42)()).toBe(42);
  });

  it("(two items) second function error", () => {
    expect(or(say42, errorFunc)()).toBe(42);
  });

  it("(three items) second function error", () => {
    expect(or(say52, errorFunc, say42)()).toBe(52);
  });
});

describe("'or' failed result", () => {
  it("every function is error", () => {
    expect(or(errorFunc)).toThrow(new Error("Damn!"));
    expect(or(errorFunc, errorFunc)).toThrow(new Error("Damn! | and | Damn!"));
    expect(or(errorFunc, errorFunc, errorFunc)).toThrow(
      new Error("Damn! | and | Damn! | and | Damn!")
    );
  });
});
