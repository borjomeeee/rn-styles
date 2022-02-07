import { createStyleSheet, compose, or } from "../utils";

import {
  parseOnlyFloat,
  parseOnlyInteger,
  parseOnlyColor,
  parseOnlyPercent,
  parseOnlyEmptyString,
} from "../parse";

export default createStyleSheet({
  acfs: compose(() => ({ alignContent: "flex-start" }), parseOnlyEmptyString),
  acfe: compose(() => ({ alignContent: "flex-end" }), parseOnlyEmptyString),
  acc: compose(() => ({ alignContent: "center" }), parseOnlyEmptyString),

  aifs: compose(() => ({ alignItems: "flex-start" }), parseOnlyEmptyString),
  aife: compose(() => ({ alignItems: "flex-end" }), parseOnlyEmptyString),
  aic: compose(() => ({ alignItems: "center" }), parseOnlyEmptyString),

  asfs: compose(() => ({ alignSelf: "flex-start" }), parseOnlyEmptyString),
  asfe: compose(() => ({ alignSelf: "flex-end" }), parseOnlyEmptyString),
  asc: compose(() => ({ alignSelf: "center" }), parseOnlyEmptyString),

  jcfs: compose(() => ({ justifyContent: "flex-start" }), parseOnlyEmptyString),
  jcfe: compose(() => ({ justifyContent: "flex-end" }), parseOnlyEmptyString),
  jcc: compose(() => ({ justifyContent: "center" }), parseOnlyEmptyString),
  jcsb: compose(
    () => ({ justifyContent: "space-between" }),
    parseOnlyEmptyString
  ),
  jcsa: compose(
    () => ({ justifyContent: "space-around" }),
    parseOnlyEmptyString
  ),

  bw: compose((size) => ({ borderWidth: size }), parseOnlyFloat),
  btw: compose((size) => ({ borderTopWidth: size }), parseOnlyFloat),
  blw: compose((size) => ({ borderLeftWidth: size }), parseOnlyFloat),
  brw: compose((size) => ({ borderRightWidth: size }), parseOnlyFloat),
  bbw: compose((size) => ({ borderBottomWidth: size }), parseOnlyFloat),

  br: compose((size) => ({ borderRadius: size }), parseOnlyFloat),
  btrr: compose((size) => ({ borderTopRightRadius: size }), parseOnlyFloat),
  btlr: compose((size) => ({ borderTopLeftRadius: size }), parseOnlyFloat),
  bbrr: compose((size) => ({ borderBottomRightRadius: size }), parseOnlyFloat),
  bblr: compose((size) => ({ borderBottomLeftRadius: size }), parseOnlyFloat),

  bc: compose((color) => ({ borderColor: color }), parseOnlyColor),
  bgc: compose((color) => ({ backgroundColor: color }), parseOnlyColor),

  none: compose(() => ({ display: "none" }), parseOnlyEmptyString),
  fill: compose(() => ({ flex: 1 }), parseOnlyEmptyString),

  row: compose(() => ({ flexDirection: "row" }), parseOnlyEmptyString),
  rowr: compose(() => ({ flexDirection: "row-reverse" }), parseOnlyEmptyString),
  col: compose(() => ({ flexDirection: "column" }), parseOnlyEmptyString),
  colr: compose(
    () => ({ flexDirection: "column-reverse" }),
    parseOnlyEmptyString
  ),

  flex: compose((size) => ({ flex: size }), parseOnlyInteger),
  grow: compose((size) => ({ flexGrow: size }), parseOnlyInteger),
  shrink: compose((size) => ({ flexShrink: size }), parseOnlyInteger),

  fww: compose(() => ({ flexWrap: "wrap" }), parseOnlyEmptyString),

  h: compose(
    (size: string | number) => ({ height: size }),
    or(parseOnlyFloat, parseOnlyPercent)
  ),
  minH: compose(
    (size: string | number) => ({ minHeight: size }),
    or(parseOnlyFloat, parseOnlyPercent)
  ),
  maxH: compose(
    (size: string | number) => ({ maxHeight: size }),
    or(parseOnlyFloat, parseOnlyPercent)
  ),
  fullH: compose(() => ({ height: "100%" }), parseOnlyEmptyString),

  w: compose(
    (size: string | number) => ({ width: size }),
    or(parseOnlyFloat, parseOnlyPercent)
  ),
  minW: compose(
    (size: string | number) => ({ minWidth: size }),
    or(parseOnlyFloat, parseOnlyPercent)
  ),
  maxW: compose(
    (size: string | number) => ({ maxWidth: size }),
    or(parseOnlyFloat, parseOnlyPercent)
  ),
  fullW: compose(() => ({ width: "100%" }), parseOnlyEmptyString),

  abs: compose(() => ({ position: "absolute" }), parseOnlyEmptyString),
  rel: compose(() => ({ position: "relative" }), parseOnlyEmptyString),

  t: compose((size) => ({ top: size }), parseOnlyFloat),
  r: compose((size) => ({ right: size }), parseOnlyFloat),
  b: compose((size) => ({ bottom: size }), parseOnlyFloat),
  l: compose((size) => ({ left: size }), parseOnlyFloat),

  p: compose((size) => ({ padding: size }), parseOnlyFloat),
  pt: compose((size) => ({ paddingTop: size }), parseOnlyFloat),
  pr: compose((size) => ({ paddingRight: size }), parseOnlyFloat),
  pb: compose((size) => ({ paddingBottom: size }), parseOnlyFloat),
  pl: compose((size) => ({ paddingLeft: size }), parseOnlyFloat),
  pv: compose((size) => ({ paddingVertical: size }), parseOnlyFloat),
  ph: compose((size) => ({ paddingHorizontal: size }), parseOnlyFloat),

  m: compose((size) => ({ margin: size }), parseOnlyFloat),
  mt: compose((size) => ({ marginTop: size }), parseOnlyFloat),
  mr: compose((size) => ({ marginRight: size }), parseOnlyFloat),
  mb: compose((size) => ({ marginBottom: size }), parseOnlyFloat),
  ml: compose((size) => ({ marginLeft: size }), parseOnlyFloat),
  mv: compose((size) => ({ marginVertical: size }), parseOnlyFloat),
  mh: compose((size) => ({ minHeight: size }), parseOnlyFloat),

  ofv: compose(() => ({ overflow: "visible" }), parseOnlyEmptyString),
  ofh: compose(() => ({ overflow: "hidden" }), parseOnlyEmptyString),

  zi: compose((size) => ({ zIndex: size }), parseOnlyInteger),
  o: compose((size) => ({ opacity: size }), parseOnlyFloat),

  cover: compose(() => ({ resizeMode: "cover" }), parseOnlyEmptyString),
  contain: compose(() => ({ resizeMode: "contain" }), parseOnlyEmptyString),
  center: compose(() => ({ resizeMode: "center" }), parseOnlyEmptyString),
});
