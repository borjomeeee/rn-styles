# rn-styles

This lib i use in my work for easy styling components in react-native. This idea i took from <https://github.com/farwayer/react-native-tstyles>

## Installation

```js
yarn add @borjomeeee/rn-styles
// npm i @borjomeeee/rn-styles --save
```

## Example of usage

```jsx
import React from "react";
import * as RN from "react-native";

import s, { configureVariables } from "@borjomeeee/rn-styles";

configureVariables({
  white: "ffffff",
  black: "#000000",
});

const AwesomeScreen = () => {
  const isBlackTheme = true;
  return (
    <RN.View style={s(`fill aic jcc`)}>
      <RN.View style={s(`w:100 h:100 bgc:white`, isBlackTheme && `bgc:black`)}>
        <RN.Text style={s(`fsz:24 c:white`)}>Hello, world!</RN.Text>
      </RN.View>
    </RN.View>
  );
};
```

## Styles

Whole bunch of style presets you can find in ```src/styles``` folder.

## Configure

By functions `configureStylesheet` and `configureVariables` you can set your own styles and values. For example:

```jsx
  s(`shadow`) -> Error // style with name 'shadow' not exist
  s(`box:red`) -> Error // style with name 'shadow' not exist and style value 'red' is incorrect

  configureStylesheet({
    shadow: () => ({ shadowOpacity: 1}),
    box: (styleValue: string) => ({
      borderWidth: 1,
      borderColor: styleValue
    })
  })

  configureVariables({
    red: "#ff0000"
  })

  s(`shadow`) -> { shadowOpacity: 1 }
  s(`box:red`) -> { borderWidth: 1, borderColor: "#ff0000" }
```

## Helpers

There are some useful function you can use in your projects:

| Name                   | Description                                                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `parseOnlyColor`       | string -> color (#fff \| #ffffff \| #ffffff00)                                                                             |
| `parseOnlyEmptyString` | Prevent passing values to non-parameters style constructors <br/>(ex: `` s(`fill`) -> { flex: 1}, s(`fill:1`) -> Error ``) |
| `parseOnlyInteger`     | string -> number (exclude float numbers)                                                                                   |
| `parseOnlyFloat`       | string -> number (include float numbers)                                                                                   |
| `parseOnlyPercent`     | string -> string (check that the string is a percentage, ex: `'100%' - good, '100' - bad`                                  |



## TODO

- [ ] Add native theme support
