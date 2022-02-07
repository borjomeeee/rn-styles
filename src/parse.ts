import { or } from "./utils";
import { Styles, StyleSheet, Variables } from "./const";

const colorRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{6}[0-9]{2})$/i;

export function parseOnlyEmptyString(value: string) {
  if (value.length !== 0) {
    throw new Error(
      `Value '${value}' can't be assigned to non-parameters style constructor!`
    );
  }

  return undefined as never;
}

export function parseOnlyFloat(value: string) {
  return or(parseOnlyInteger, (mayBeFloatNumber: string) => {
    if (!/^(\-?)(\d+).(\d+)$/.test(mayBeFloatNumber)) {
      throw new Error(`Value '${mayBeFloatNumber}' is not a float number!`);
    }

    return +mayBeFloatNumber;
  })(value);
}

export function parseOnlyInteger(value: string) {
  if (!/^(\-?)(\d+)$/.test(value))
    throw new Error(`Value '${value}' is not a integer number!`);
  return parseFloat(value);
}

export function parseOnlyPercent(value: string) {
  if (!/^(\d+)\%$/g.test(value)) {
    throw new Error(
      `Value '${value}' is not a percent value! (valid example: 25%)`
    );
  }

  return value;
}

export function parseOnlyColor(value: string) {
  if (!colorRegex.test(value))
    throw new Error(
      `Value '${value}' is not a hex color (must be satisfy to regex - /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/i)!`
    );
  return value;
}

const isVariable = (value: string | undefined): boolean =>
  !!value && Variables[value] !== undefined;

export function parseStringToStyle(styleString: string) {
  try {
    let [styleName, styleValue] = styleString.trim().split(":") as [
      string,
      string | undefined
    ];

    if (!StyleSheet.contain(styleName)) {
      console.warn(`Style with name '${styleName}' is not recognized! (maybe you skip ':')`);
      return {};
    }

    // if ':' character not exist
    if (styleValue === undefined) {
      return Styles[styleName]("");
    }

    // If ':' character exist, but value not passed
    if (styleValue.length === 0) {
      console.warn(
        `Get incorrect template ${styleString} (ps. if you not pass value - remove ':')`
      );
      return {};
    }

    const styleValueOrVariable = isVariable(styleValue)
      ? Variables[styleValue as string]
      : styleValue;

    const processedStyleValue = Styles[styleName](
      styleValueOrVariable.toString()
    );
    return processedStyleValue;
  } catch (e) {
    console.warn(`Get error on set styles '${styleString}' - ` + e.message);
    return {};
  }
}
