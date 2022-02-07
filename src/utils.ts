import { IStyleSheet, IStyles } from "./types";
export { or } from "./or";

export type AnyFunc = (...args: any) => any;

export const compose = <T, U, K = IStyles>(
  func1: (...args: U[]) => K,
  func2: (...args: T[]) => U
) => {
  return (...args: T[]) => {
    return func1(func2(...args));
  };
};

export const createStyleSheet = (stylesheet: IStyleSheet) => stylesheet;
