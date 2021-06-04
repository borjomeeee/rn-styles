import memo from "memoizee";
import { Style, StyleArg, StyleCreator, StyleCreators } from "./types";

export function createStyleSheet(customStyles: StyleCreators) {
  return Object.fromEntries(
    Object.entries(customStyles).map(([key, value]) => [
      key,
      makeMemoStyle(value),
    ])
  );
}

export function makeMemoStyle<
  T extends StyleArg[] = StyleArg[],
  U extends Style = Style
>(func: StyleCreator<T, U>, length?: number) {
  return memo((...args: T) => func(...args), { primitive: true, length });
}
