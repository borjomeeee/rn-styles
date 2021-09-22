import memo from "memoizee";
import { TextStyles, ViewStyles } from "./styles/index";
import { createStyleSheet } from "./utils";

const Styles = Object.assign({}, ViewStyles, TextStyles);
const Variables = {};
export const s = memo(
  function (styleLine: string) {
    return styleLine
      .trim()
      .split(/\s+/)
      .map((style) => {
        let [styleName, styleValue] = style.split(":");
        styleValue = (Variables as any)[styleValue] ?? styleValue;

        if (!(styleName in Styles))
          console.warn(`Style with name '${styleName}' is not recognized!`);

        try {
          const processedStyleValue = (Styles as any)[styleName](styleValue);
          if (typeof processedStyleValue !== "object")
            throw new Error(
              `Damn ... get processed style value - '${processedStyleValue.toString()}'`
            );

          return processedStyleValue;
        } catch (e) {
          console.warn(`Get error on set styles '${style}': ` + e.message);
        }
      })
      .reduce((acc, item) => ({ ...acc, ...item }));
  },
  { primitive: true, length: 1 }
);

export const configureVariables = (vars: Record<string, string | number>) => {
  Object.assign(Variables, vars);
};

export const configureStylesheet = (
  ...params: Parameters<typeof createStyleSheet>
) => {
  const stylesheet = createStyleSheet(...params);
  Object.assign(Styles, stylesheet);
};
