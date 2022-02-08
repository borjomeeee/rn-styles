import { configureStylesheet, configureVariables } from "../dist/helpers";

import {
  parseOnlyColor,
  parseOnlyEmptyString,
  parseOnlyFloat,
  parseOnlyInteger,
  parseOnlyPercent,
  parseStringToStyle,
} from "../dist/parse";
import { compose } from "../dist/utils";

describe("'parseOnlyInteger' tests", () => {
  const errorConstructor = (value) =>
    `Value '${value}' is not a integer number!`;

  it("empty value passed", () => {
    expect(parseOnlyInteger.bind(null, "")).toThrow(
      new Error(errorConstructor(""))
    );
    expect(parseOnlyInteger.bind(null, "  ")).toThrow(
      new Error(errorConstructor("  "))
    );
  });

  it("random string", () => {
    expect(parseOnlyInteger.bind(null, "a")).toThrow(
      new Error(errorConstructor("a"))
    );
    expect(parseOnlyInteger.bind(null, ".")).toThrow(
      new Error(errorConstructor("."))
    );
    expect(parseOnlyInteger.bind(null, "-")).toThrow(
      new Error(errorConstructor("-"))
    );
    expect(parseOnlyInteger.bind(null, "asd")).toThrow(
      new Error(errorConstructor("asd"))
    );
  });

  it("valid number with character(s) before", () => {
    expect(parseOnlyInteger.bind(null, "a10")).toThrow(
      new Error(errorConstructor("a10"))
    );
    expect(parseOnlyInteger.bind(null, ".1")).toThrow(
      new Error(errorConstructor(".1"))
    );
    expect(parseOnlyInteger.bind(null, "asd10")).toThrow(
      new Error(errorConstructor("asd10"))
    );
  });

  it("valid number with character(s) after", () => {
    expect(parseOnlyInteger.bind(null, "10a")).toThrow(
      new Error(errorConstructor("10a"))
    );
    expect(parseOnlyInteger.bind(null, "1.")).toThrow(
      new Error(errorConstructor("1."))
    );
    expect(parseOnlyInteger.bind(null, "10aaa")).toThrow(
      new Error(errorConstructor("10aaa"))
    );
  });

  it("valid number with character(s) inside", () => {
    expect(parseOnlyInteger.bind(null, "10aa1")).toThrow(
      new Error(errorConstructor("10aa1"))
    );
  });

  it("float numbet instead integer", () => {
    expect(parseOnlyInteger.bind(null, "1.1")).toThrow(
      new Error(errorConstructor("1.1"))
    );
  });

  it("valid number with spaces", () => {
    expect(parseOnlyInteger.bind(null, "10 ")).toThrow(
      new Error(errorConstructor("10 "))
    );
    expect(parseOnlyInteger.bind(null, " 1")).toThrow(
      new Error(errorConstructor(" 1"))
    );
    expect(parseOnlyInteger.bind(null, "10 0")).toThrow(
      new Error(errorConstructor("10 0"))
    );
  });

  it("success", () => {
    expect(parseOnlyInteger("0")).toBe(0);
    expect(parseOnlyInteger("-0")).toBe(-0);

    expect(parseOnlyInteger("10")).toBe(10);
    expect(parseOnlyInteger("-10")).toBe(-10);
  });
});
describe("'parseOnlyFloat' tests", () => {
  const errorConstructor = (value) =>
    `Value '${value}' is not a integer number! | and | Value '${value}' is not a float number!`;

  it("empty value passed", () => {
    expect(parseOnlyFloat.bind(null, "")).toThrow(
      new Error(errorConstructor(""))
    );

    expect(parseOnlyFloat.bind(null, "   ")).toThrow(
      new Error(errorConstructor("   "))
    );
  });

  it("random string", () => {
    expect(parseOnlyFloat.bind(null, "a")).toThrow(
      new Error(errorConstructor("a"))
    );
    expect(parseOnlyFloat.bind(null, ".")).toThrow(
      new Error(errorConstructor("."))
    );
    expect(parseOnlyFloat.bind(null, "-")).toThrow(
      new Error(errorConstructor("-"))
    );
    expect(parseOnlyFloat.bind(null, "asd")).toThrow(
      new Error(errorConstructor("asd"))
    );
  });

  it("valid number with character(s) before", () => {
    expect(parseOnlyFloat.bind(null, "a10.0")).toThrow(
      new Error(errorConstructor("a10.0"))
    );
    expect(parseOnlyFloat.bind(null, ".1")).toThrow(
      new Error(errorConstructor(".1"))
    );
    expect(parseOnlyFloat.bind(null, "asd10.12")).toThrow(
      new Error(errorConstructor("asd10.12"))
    );
  });

  it("valid number with character(s) after", () => {
    expect(parseOnlyFloat.bind(null, "10.1a")).toThrow(
      new Error(errorConstructor("10.1a"))
    );
    expect(parseOnlyFloat.bind(null, "1.")).toThrow(
      new Error(errorConstructor("1."))
    );
    expect(parseOnlyFloat.bind(null, "10aaa")).toThrow(
      new Error(errorConstructor("10aaa"))
    );
  });

  it("valid number with character(s) inside", () => {
    expect(parseOnlyFloat.bind(null, "10.aa1")).toThrow(
      new Error(errorConstructor("10.aa1"))
    );
  });

  it("valid number with spaces", () => {
    expect(parseOnlyFloat.bind(null, "10.1 ")).toThrow(
      new Error(errorConstructor("10.1 "))
    );
    expect(parseOnlyFloat.bind(null, " 1")).toThrow(
      new Error(errorConstructor(" 1"))
    );
    expect(parseOnlyFloat.bind(null, "10.12 0")).toThrow(
      new Error(errorConstructor("10.12 0"))
    );
  });

  it("success", () => {
    expect(parseOnlyFloat("25")).toBe(25);
    expect(parseOnlyFloat("-1")).toBe(-1);

    expect(parseOnlyFloat("0.0")).toBe(0);
    expect(parseOnlyFloat("-0.0")).toBe(-0);

    expect(parseOnlyFloat("10.1000")).toBe(10.1);
    expect(parseOnlyFloat("-10.000001")).toBe(-10.000001);
  });
});

describe("'parseOnlyPercent' tests", () => {
  const errorConstructor = (value) =>
    `Value '${value}' is not a percent value! (valid example: 25%)`;

  it("empty value passed", () => {
    expect(parseOnlyPercent.bind(null, "")).toThrow(
      new Error(errorConstructor(""))
    );
    expect(parseOnlyPercent.bind(null, "   ")).toThrow(
      new Error(errorConstructor("   "))
    );
  });

  it("random string", () => {
    expect(parseOnlyPercent.bind(null, "a")).toThrow(
      new Error(errorConstructor("a"))
    );
    expect(parseOnlyPercent.bind(null, "%")).toThrow(
      new Error(errorConstructor("%"))
    );
    expect(parseOnlyPercent.bind(null, "-")).toThrow(
      new Error(errorConstructor("-"))
    );
    expect(parseOnlyPercent.bind(null, "as%")).toThrow(
      new Error(errorConstructor("as%"))
    );
  });

  it("valid number with character(s) before", () => {
    expect(parseOnlyPercent.bind(null, "a10%")).toThrow(
      new Error(errorConstructor("a10%"))
    );
    expect(parseOnlyPercent.bind(null, ".1%")).toThrow(
      new Error(errorConstructor(".1%"))
    );
    expect(parseOnlyPercent.bind(null, "asd10%")).toThrow(
      new Error(errorConstructor("asd10%"))
    );
  });

  it("valid number with character(s) after", () => {
    expect(parseOnlyPercent.bind(null, "10%a")).toThrow(
      new Error(errorConstructor("10%a"))
    );
    expect(parseOnlyPercent.bind(null, "1%%")).toThrow(
      new Error(errorConstructor("1%%"))
    );
    expect(parseOnlyPercent.bind(null, "10%aaa")).toThrow(
      new Error(errorConstructor("10%aaa"))
    );
  });

  it("valid number with character(s) inside", () => {
    expect(parseOnlyPercent.bind(null, "10aa%")).toThrow(
      new Error(errorConstructor("10aa%"))
    );
  });

  it("float percents", () => {
    expect(parseOnlyPercent.bind(null, "10.0%")).toThrow(
      new Error(errorConstructor("10.0%"))
    );

    expect(parseOnlyPercent.bind(null, "0.0%")).toThrow(
      new Error(errorConstructor("0.0%"))
    );
  });

  it("valid percents with spaces", () => {
    expect(parseOnlyPercent.bind(null, "10% ")).toThrow(
      new Error(errorConstructor("10% "))
    );
    expect(parseOnlyPercent.bind(null, " 1%")).toThrow(
      new Error(errorConstructor(" 1%"))
    );
    expect(parseOnlyPercent.bind(null, "10 %")).toThrow(
      new Error(errorConstructor("10 %"))
    );
  });

  it("success", () => {
    expect(parseOnlyPercent("12%")).toBe("12%");
    expect(parseOnlyPercent("0%")).toBe("0%");
    expect(parseOnlyPercent("0001%")).toBe("0001%");
    expect(parseOnlyPercent("99%")).toBe("99%");
  });
});

describe("'parseOnlyColor' tests", () => {
  const errorConstructor = (value) =>
    `Value '${value}' is not a hex color (must be satisfy to regex - /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/i)!`;

  it("empty value passed", () => {
    expect(parseOnlyColor.bind(null, "")).toThrow(
      new Error(errorConstructor(""))
    );
    expect(parseOnlyColor.bind(null, "   ")).toThrow(
      new Error(errorConstructor("   "))
    );
  });

  it("random string", () => {
    expect(parseOnlyColor.bind(null, "a")).toThrow(
      new Error(errorConstructor("a"))
    );
    expect(parseOnlyColor.bind(null, "#")).toThrow(
      new Error(errorConstructor("#"))
    );
    expect(parseOnlyColor.bind(null, "#a")).toThrow(
      new Error(errorConstructor("#a"))
    );
    expect(parseOnlyColor.bind(null, "as%")).toThrow(
      new Error(errorConstructor("as%"))
    );
  });

  it("extra symbols with valid values", () => {
    expect(parseOnlyColor.bind(null, "f#fff")).toThrow(
      new Error(errorConstructor("f#fff"))
    );

    expect(parseOnlyColor.bind(null, "#fffa")).toThrow(
      new Error(errorConstructor("#fffa"))
    );

    expect(parseOnlyColor.bind(null, "asd#ffffff")).toThrow(
      new Error(errorConstructor("asd#ffffff"))
    );

    expect(parseOnlyColor.bind(null, "#ffffff-")).toThrow(
      new Error(errorConstructor("#ffffff-"))
    );

    expect(parseOnlyColor.bind(null, "a#ffffff00")).toThrow(
      new Error(errorConstructor("a#ffffff00"))
    );
  });

  it("extra spaces with valid values", () => {
    expect(parseOnlyColor.bind(null, " #fff")).toThrow(
      new Error(errorConstructor(" #fff"))
    );
    expect(parseOnlyColor.bind(null, "#fff ")).toThrow(
      new Error(errorConstructor("#fff "))
    );
    expect(parseOnlyColor.bind(null, "#f ff")).toThrow(
      new Error(errorConstructor("#f ff"))
    );

    expect(parseOnlyColor.bind(null, " #ffffff")).toThrow(
      new Error(errorConstructor(" #ffffff"))
    );
    expect(parseOnlyColor.bind(null, "#ffffff ")).toThrow(
      new Error(errorConstructor("#ffffff "))
    );
    expect(parseOnlyColor.bind(null, "#ff ffff")).toThrow(
      new Error(errorConstructor("#ff ffff"))
    );

    expect(parseOnlyColor.bind(null, " #ffffff00")).toThrow(
      new Error(errorConstructor(" #ffffff00"))
    );
    expect(parseOnlyColor.bind(null, "#ffffff00 ")).toThrow(
      new Error(errorConstructor("#ffffff00 "))
    );
    expect(parseOnlyColor.bind(null, "#fff fff00")).toThrow(
      new Error(errorConstructor("#fff fff00"))
    );
  });

  it("check not valid symbols", () => {
    expect(parseOnlyColor.bind(null, "#Uff")).toThrow(
      new Error(errorConstructor("#Uff"))
    );

    expect(parseOnlyColor.bind(null, "-fff")).toThrow(
      new Error(errorConstructor("-fff"))
    );

    expect(parseOnlyColor.bind(null, "#123ffY")).toThrow(
      new Error(errorConstructor("#123ffY"))
    );

    expect(parseOnlyColor.bind(null, "#fff-1ff")).toThrow(
      new Error(errorConstructor("#fff-1ff"))
    );

    expect(parseOnlyColor.bind(null, "#fffffff0")).toThrow(
      new Error(errorConstructor("#fffffff0"))
    );

    expect(parseOnlyColor.bind(null, "#ffffff-10")).toThrow(
      new Error(errorConstructor("#ffffff-10"))
    );
  });

  it("success", () => {
    expect(parseOnlyColor("#fff")).toBe("#fff");
    expect(parseOnlyColor("#00f")).toBe("#00f");

    expect(parseOnlyColor("#fff000")).toBe("#fff000");
    expect(parseOnlyColor("#fff00010")).toBe("#fff00010");
  });
});

describe("'parseStringToStyle' tests", () => {
  beforeAll(() => {
    console.warn = () => undefined;
    configureStylesheet({
      shadow: compose(() => ({ shadowOpacity: 0.5 }), parseOnlyEmptyString),
      so: compose(
        (opacity: number) => ({ shadowOpacity: opacity }),
        parseOnlyFloat
      ),
    });
    configureVariables({
      black: "#000",
      medium: 10,
    });
  });

  it("incorrect defininition", () => {
    expect(JSON.stringify(parseStringToStyle(`qwe`))).toBe(JSON.stringify({}));
    expect(JSON.stringify(parseStringToStyle(`h10`))).toBe(JSON.stringify({}));
    expect(JSON.stringify(parseStringToStyle(`h:10p:10`))).toBe(
      JSON.stringify({})
    );
  });

  it("extra spaces", () => {
    expect(JSON.stringify(parseStringToStyle(`   h:10`))).toBe(
      JSON.stringify({ height: 10 })
    );
    expect(JSON.stringify(parseStringToStyle(`   h:10   `))).toBe(
      JSON.stringify({ height: 10 })
    );
  });

  it("bad style name", () => {
    expect(JSON.stringify(parseStringToStyle(`lol:10`))).toBe(
      JSON.stringify({})
    );
    expect(JSON.stringify(parseStringToStyle(`bggc:#fff`))).toBe(
      JSON.stringify({})
    );
  });

  it("bad style value (integer)", () => {
    expect(JSON.stringify(parseStringToStyle(`flex:10.5`))).toBe(
      JSON.stringify({})
    );
    expect(JSON.stringify(parseStringToStyle(`flex:100%`))).toBe(
      JSON.stringify({})
    );
    expect(JSON.stringify(parseStringToStyle(`flex:#fff`))).toBe(
      JSON.stringify({})
    );
  });
  it("bad style value (float)", () => {
    expect(JSON.stringify(parseStringToStyle(`p:100%`))).toBe(
      JSON.stringify({})
    );
    expect(JSON.stringify(parseStringToStyle(`p:#fff`))).toBe(
      JSON.stringify({})
    );
  });
  it("bad style value (float | percent)", () => {
    expect(JSON.stringify(parseStringToStyle(`h:#fff`))).toBe(
      JSON.stringify({})
    );
  });
  it("bad style value (color)", () => {
    expect(JSON.stringify(parseStringToStyle(`c:10.5`))).toBe(
      JSON.stringify({})
    );
    expect(JSON.stringify(parseStringToStyle(`c:100%`))).toBe(
      JSON.stringify({})
    );
    expect(JSON.stringify(parseStringToStyle(`c:-10`))).toBe(
      JSON.stringify({})
    );
  });

  it("success", () => {
    expect(JSON.stringify(parseStringToStyle(`flex:1`))).toBe(
      JSON.stringify({ flex: 1 })
    );
    expect(JSON.stringify(parseStringToStyle(`flex:-3`))).toBe(
      JSON.stringify({ flex: -3 })
    );

    expect(JSON.stringify(parseStringToStyle(`p:-10.5`))).toBe(
      JSON.stringify({ padding: -10.5 })
    );
    expect(JSON.stringify(parseStringToStyle(`p:44`))).toBe(
      JSON.stringify({ padding: 44 })
    );

    expect(JSON.stringify(parseStringToStyle(`h:101.1`))).toBe(
      JSON.stringify({ height: 101.1 })
    );
    expect(JSON.stringify(parseStringToStyle(`h:33%`))).toBe(
      JSON.stringify({ height: "33%" })
    );

    expect(JSON.stringify(parseStringToStyle(`c:#fff`))).toBe(
      JSON.stringify({ color: "#fff" })
    );
    expect(JSON.stringify(parseStringToStyle(`c:#dddddd00`))).toBe(
      JSON.stringify({ color: "#dddddd00" })
    );
  });

  it("failed custom stylesheet/variabled", () => {
    expect(JSON.stringify(parseStringToStyle(`c:medium`))).toBe(
      JSON.stringify({})
    );
    expect(JSON.stringify(parseStringToStyle(`h:black`))).toBe(
      JSON.stringify({})
    );
    expect(JSON.stringify(parseStringToStyle(`so:#fff`))).toBe(
      JSON.stringify({})
    );
    expect(JSON.stringify(parseStringToStyle(`shadow:10`))).toBe(
      JSON.stringify({})
    );
    expect(JSON.stringify(parseStringToStyle(`shadow:`))).toBe(
      JSON.stringify({})
    );
  });

  it("success custom stylesheet/variables", () => {
    expect(JSON.stringify(parseStringToStyle("ph:medium"))).toBe(
      JSON.stringify({ paddingHorizontal: 10 })
    );
    expect(JSON.stringify(parseStringToStyle("c:black"))).toBe(
      JSON.stringify({ color: "#000" })
    );

    expect(JSON.stringify(parseStringToStyle("shadow"))).toBe(
      JSON.stringify({ shadowOpacity: 0.5 })
    );

    expect(JSON.stringify(parseStringToStyle(`so:medium`))).toBe(
      JSON.stringify({ shadowOpacity: 10 })
    );
  });
});

describe("parseOnlyEmptyString", () => {
  it("default", () => {
    expect(parseOnlyEmptyString("")).toBe(undefined);
    expect(parseOnlyEmptyString.bind(null, "asd")).toThrow(
      new Error(
        `Value 'asd' can't be assigned to non-parameters style constructor!`
      )
    );
  });
});
