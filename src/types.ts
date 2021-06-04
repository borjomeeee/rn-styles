import type * as RN from "react-native";

export type Style = RN.ViewStyle | RN.ImageStyle | RN.TextStyle;
export type StyleArg = number | string;
export type StyleCreators = {
  [key: string]: (arg: StyleArg) => Style;
};
export type StyleCreator<T extends StyleArg[] = [], U extends Style = Style> = (
  ...args: T
) => U;
