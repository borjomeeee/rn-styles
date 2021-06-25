import type { FlexStyle, TextStyle, ViewStyle, ImageStyle } from "react-native";

export type Styles = FlexStyle | TextStyle | ViewStyle | ImageStyle;
const colorRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/i;
export function parseOnlyFloat(value: any) {
  if (isNaN(value))
    throw new Error(`Value '${value}' is not a decimal number!`);
  return parseFloat(value);
}

export function parseOnlyInteger(value: any) {
  if (isNaN(value) || Math.floor(value) != value)
    throw new Error(`Value '${value}' is not a integer number!`);
  return parseFloat(value);
}

export function parseOnlyFloatToPercent(value: any) {
  if (isNaN(value))
    throw new Error(`Value '${value}' is not a decimal number!`);
  return value + "%";
}

export function parseOnlyColor(value: any) {
  if (!colorRegex.test(value))
    throw new Error(
      `Value '${value}' is not a hex color (must be satisfy to regex - /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/i)!`
    );
  return value;
}

export const compose =
  <T, U, K = Styles>(func1: (arg: U) => K, func2: (arg: T) => U) =>
  (arg: T) => {
    return func1(func2(arg));
  };

export const createStyleSheet = (
  styles: Record<string, (arg: string) => Styles>
) => styles;
