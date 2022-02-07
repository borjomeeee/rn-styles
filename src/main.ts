import memo from "memoizee";
import { parseStringToStyle } from "./parse";

const isString = (arg: any): arg is String => typeof arg === "string";

const helper = memo(
  (styleString: string) => {
    return styleString
      .trim()
      .split(/\s+/)
      .map(parseStringToStyle)
      .reduce((acc, item) => ({ ...acc, ...item }));
  },
  { primitive: true, length: 1 }
);

type StyleParameter = string | boolean | undefined;
export function s(...args: StyleParameter[]) {
  const styleString = args.filter(isString).join(" ");
  return helper(styleString);
}
