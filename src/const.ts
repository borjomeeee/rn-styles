import * as DefaultStyles from "./styles/index";
import { IStyleSheet } from "./types";
import { createStyleSheet } from "./utils";

export const Styles: IStyleSheet = createStyleSheet(
  Object.assign({}, ...Object.values(DefaultStyles))
);

export const Variables: Record<string, string | number> = {};

export class StyleSheet {
  static contain(styleName: string) {
    return styleName in Styles;
  }
}
