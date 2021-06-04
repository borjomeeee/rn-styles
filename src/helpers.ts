import memo from "memoizee";
import Common from "./common";

import { createStyleSheet } from "./configure";
import { StyleCreators } from "./types";

const Styles = Object.assign({}, Common);

const colorRegExp = new RegExp(/(#[0-9a-zA-Z]{6,8})$/);
const numberRegExp = new RegExp(/(\d+)$/);

function getStyle(style: any, ...args: never[]) {
  return (Styles[style] as any)(...args);
}

function hasStyle(style: string) {
  return Styles.hasOwnProperty(style);
}

function checkIsColor(style: string) {
  return colorRegExp.test(style);
}

function checkIsNumber(style: string) {
  return numberRegExp.test(style);
}

type ProcessFunc = (arg: any) => any;
interface ProcessStyleOptions {
  process?: ProcessFunc[];
}
function processStyle(
  style: string,
  regexp: RegExp,
  options: ProcessStyleOptions = { process: [] }
) {
  const [styleName, styleValue] = style.split(regexp);
  const processedStyleValue = options.process?.reduce(
    (acc, func) => func(acc),
    styleValue
  ) as never;

  if (styleName && hasStyle(styleName))
    return getStyle(styleName, processedStyleValue);

  return null;
}

const defaultStyle = {};
export const s = memo(
  function (styleLine: string) {
    return styleLine
      .split(" ")
      .map((style) => {
        if (hasStyle(style)) return getStyle(style);

        if (checkIsColor(style)) {
          return processStyle(style, colorRegExp);
        } else if (checkIsNumber(style)) {
          return processStyle(style, numberRegExp, { process: [Number] });
        }

        return defaultStyle;
      })
      .reduce((acc, item) => ({ ...acc, ...item }));
  },
  { primitive: true, length: 1 }
);

export const configureStyleSheet = (styles: StyleCreators) => {
  Object.assign(Styles, createStyleSheet(styles));
};
