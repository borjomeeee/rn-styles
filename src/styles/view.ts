import {
  createStyleSheet,
  compose,
  parseOnlyFloat,
  parseOnlyInteger,
  parseOnlyColor,
} from "../utils";

export default createStyleSheet({
  acfs: () => ({ alignContent: "flex-start" }),
  acfe: () => ({ alignContent: "flex-end" }),
  acc: () => ({ alignContent: "center" }),

  aifs: () => ({ alignItems: "flex-start" }),
  aife: () => ({ alignItems: "flex-end" }),
  aic: () => ({ alignItems: "center" }),

  asfs: () => ({ alignSelf: "flex-start" }),
  asfe: () => ({ alignSelf: "flex-end" }),
  asc: () => ({ alignSelf: "center" }),

  jcfs: () => ({ justifyContent: "flex-start" }),
  jcfe: () => ({ justifyContent: "flex-end" }),
  jcc: () => ({ justifyContent: "center" }),
  jcsb: () => ({ justifyContent: "space-between" }),
  jcsa: () => ({ justifyContent: "space-around" }),

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

  none: () => ({ display: "none" }),
  fill: () => ({ flex: 1 }),

  row: () => ({ flexDirection: "row" }),
  rowr: () => ({ flexDirection: "row-reverse" }),
  col: () => ({ flexDirection: "column" }),
  colr: () => ({ flexDirection: "column-reverse" }),

  flex: compose((size) => ({ flex: size }), parseOnlyInteger),
  grow: compose((size) => ({ flexGrow: size }), parseOnlyInteger),
  shrink: compose((size) => ({ flexShrink: size }), parseOnlyInteger),

  fww: () => ({ flexWrap: "wrap" }),

  h: compose((size) => ({ height: size }), parseOnlyFloat),
  minH: compose((size) => ({ minHeight: size }), parseOnlyFloat),
  maxH: compose((size) => ({ maxHeight: size }), parseOnlyFloat),
  fullH: () => ({ height: "100%" }),

  w: compose((size) => ({ width: size }), parseOnlyFloat),
  minW: compose((size) => ({ minWidth: size }), parseOnlyFloat),
  maxW: compose((size) => ({ maxWidth: size }), parseOnlyFloat),
  fullW: () => ({ width: "100%" }),

  abs: () => ({ position: "absolute" }),
  rel: () => ({ position: "relative" }),

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

  ofv: () => ({ overflow: "visible" }),
  ofh: () => ({ overflow: "hidden" }),

  zi: compose((size) => ({ zIndex: size }), parseOnlyInteger),
  o: compose((size) => ({ opacity: size }), parseOnlyFloat),

  cover: () => ({ resizeMode: "cover" }),
  contain: () => ({ resizeMode: "contain" }),
  center: () => ({ resizeMode: "center" }),
});
