import s from "../src";

describe("'s' function tests", () => {
  beforeAll(() => {
    console.warn = () => undefined;
  });

  it("call with empty strings", () => {
    expect(JSON.stringify(s(`h:10`, `  `))).toBe(
      JSON.stringify({ height: 10 })
    );
    expect(JSON.stringify(s(``, ``))).toBe(JSON.stringify({}));
  });

  it("call with extra spaces", () => {
    expect(
      JSON.stringify(
        s(`    h:10  
            bgc:#fff   `)
      )
    ).toBe(
      JSON.stringify({
        height: 10,
        backgroundColor: "#fff",
      })
    );
  });

  it("check rewrite properties", () => {
    expect(JSON.stringify(s(`h:10 bgc:#fff`, `bgc:#000`))).toBe(
      JSON.stringify({
        height: 10,
        backgroundColor: "#000",
      })
    );
  });

  it("check memoization", () => {
    expect(s(`h:10 bgc:#fff br:15`) === s(`h:10 bgc:#fff br:15`)).toBeTruthy();
  });

  it("check not-string parameters", () => {
    const Undef = undefined;

    const True = true;
    const False = false;

    expect(JSON.stringify(s(`h:10`, True && `h:25`))).toBe(
      JSON.stringify({
        height: 25,
      })
    );

    expect(JSON.stringify(s(`h:10`, False && `h:25`))).toBe(
      JSON.stringify({
        height: 10,
      })
    );

    expect(JSON.stringify(s(`h:10`, Undef && `h:25`))).toBe(
      JSON.stringify({
        height: 10,
      })
    );
  });
});
