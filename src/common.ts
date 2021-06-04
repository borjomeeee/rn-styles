import { createStyleSheet } from "./configure";

// TODO: add normal typing
export default createStyleSheet({
  zi: (index) => ({
    zIndex: index as number,
  }),
  fullW: () => ({
    width: "100%",
  }),
  fullH: () => ({
    height: "100%",
  }),
  ziout: () => ({
    zIndex: -1,
  }),
  abs: () => ({
    position: "absolute",
  }),
  fill: () => ({
    flex: 1,
  }),
  fg: () => ({
    flexGrow: 1,
  }),
  p: (size) => ({
    padding: size as number,
  }),
  h: (size) => ({
    height: size as number,
  }),
  w: (size) => ({
    width: size as number,
  }),
  c: (color) => ({
    color: color as string,
  }),
  bgc: (color) => ({
    backgroundColor: color as string,
  }),
  pt: (size) => ({
    paddingTop: size as number,
  }),
  pl: (size) => ({
    paddingLeft: size as number,
  }),
  pr: (size) => ({
    paddingRight: size as number,
  }),
  pb: (size) => ({
    paddingBottom: size as number,
  }),
  ph: (size) => ({
    paddingHorizontal: size as number,
  }),
  pv: (size) => ({
    paddingVertical: size as number,
  }),
  t: (num) => ({
    top: num,
  }),
  r: (num) => ({
    right: num,
  }),
  l: (num) => ({
    left: num,
  }),
  b: (num) => ({
    bottom: num,
  }),
  aic: () => ({
    alignItems: "center",
  }),
  aifs: () => ({
    alignItems: "flex-start",
  }),
  aife: () => ({
    alignItems: "flex-end",
  }),
  fww: () => ({
    flexWrap: "wrap",
  }),
  row: () => ({
    flexDirection: "row",
  }),
  col: () => ({
    flexDirection: "column",
  }),
  jcc: () => ({
    justifyContent: "center",
  }),
  jcsb: () => ({
    justifyContent: "space-between",
  }),
  jcsa: () => ({
    justifyContent: "space-around",
  }),
  jcfs: () => ({
    justifyContent: "flex-start",
  }),
  jcfe: () => ({
    justifyContent: "flex-end",
  }),
  bw: (size) => ({
    borderWidth: size as number,
  }),
  btw: (size) => ({
    borderTopWidth: size as number,
  }),
  brw: (size) => ({
    borderRightWidth: size as number,
  }),
  bbw: (size) => ({
    borderBottomWidth: size as number,
  }),
  blw: (size) => ({
    borderLeftWidth: size as number,
  }),
  bc: (color) => ({
    borderColor: color as string,
  }),
  btc: (color) => ({
    borderTopColor: color as string,
  }),
  brc: (color) => ({
    borderColor: color as string,
  }),
  blc: (color) => ({
    borderLeftColor: color as string,
  }),
  bbc: (color) => ({
    borderBottomColor: color as string,
  }),
  br: (size) => ({
    borderRadius: size as number,
  }),
  btrr: (size) => ({
    borderTopRightRadius: size as number,
  }),
  btlr: (size) => ({
    borderTopLeftRadius: size as number,
  }),
  bbrr: (size) => ({
    borderBottomRightRadius: size as number,
  }),
  bblr: (size) => ({
    borderBottomLeftRadius: size as number,
  }),
  ofh: () => ({
    overflow: "hidden",
  }),
  ofv: () => ({
    overflow: "visible",
  }),
  asc: () => ({
    alignSelf: "center",
  }),
  asfs: () => ({
    alignSelf: "flex-start",
  }),
  asfe: () => ({
    alignSelf: "flex-end",
  }),
  fsz: (size) => ({
    fontSize: size as number,
  }),
  lh: (size) => ({ lineHeight: size as number }),
  tac: () => ({ textAlign: "center" }),
  tar: () => ({ textAlign: "right" }),
  tal: () => ({ textAlign: "left" }),
  o: (num) => ({ opacity: num as number }),
  minW: (num) => ({ minWidth: num as number }),
  maxW: (num) => ({ maxWidth: num as number }),
  minH: (num) => ({ minHeight: num as number }),
  maxH: (num) => ({ maxHeight: num as number }),
  cover: () => ({ resizeMode: "cover" }),
});
