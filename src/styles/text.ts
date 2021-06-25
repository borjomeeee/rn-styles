import {
  compose,
  createStyleSheet,
  parseOnlyColor,
  parseOnlyFloat,
} from "../utils";

export default createStyleSheet({
  c: compose((color) => ({ color }), parseOnlyColor),

  ff: (family) => ({ fontFamily: family }),
  fsz: compose((size) => ({ fontSize: size }), parseOnlyFloat),

  ls: compose((size) => ({ letterSpacing: size }), parseOnlyFloat),
  lh: compose((size) => ({ lineHeight: size }), parseOnlyFloat),

  tac: () => ({ textAlign: "center" }),
  tal: () => ({ textAlign: "left" }),
  tar: () => ({ textAlign: "right" }),
});
