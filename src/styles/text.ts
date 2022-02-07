import { compose, createStyleSheet } from "../utils";
import { parseOnlyColor, parseOnlyEmptyString, parseOnlyFloat } from "../parse";

export default createStyleSheet({
  c: compose((color) => ({ color }), parseOnlyColor),
  bold: compose(() => ({ fontWeight: "bold" }), parseOnlyEmptyString),

  ff: (family) => ({ fontFamily: family }),
  fsz: compose((size) => ({ fontSize: size }), parseOnlyFloat),

  ls: compose((size) => ({ letterSpacing: size }), parseOnlyFloat),
  lh: compose((size) => ({ lineHeight: size }), parseOnlyFloat),

  tac: compose(() => ({ textAlign: "center" }), parseOnlyEmptyString),
  tal: compose(() => ({ textAlign: "left" }), parseOnlyEmptyString),
  tar: compose(() => ({ textAlign: "right" }), parseOnlyEmptyString),
});
