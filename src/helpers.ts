import { Styles, Variables } from "./const";
import { createStyleSheet } from "./utils";

import { IStyleSheet } from "./types";

// WTF? where init stylesheet???

export const configureVariables = (vars: Record<string, string | number>) => {
  Object.assign(Variables, vars);
};

export const configureStylesheet = (stylesheet: IStyleSheet) => {
  const additionalStylesheet = createStyleSheet(stylesheet);
  Object.assign(Styles, additionalStylesheet);
};
