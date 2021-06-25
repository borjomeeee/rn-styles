# rn-styles

This lib i use in my work for easy styling components in react-native. This idea i took from <https://github.com/farwayer/react-native-tstyles>

## Installation

```js
yarn add @borjomeeee/rn-styles
// npm i @borjomeeee/rn-styles --save
```

## Example of usage

<b>Note!</b> colors can only satisfy #fff, #ffffff, #ffffff00 tempaltes

```jsx
import React from "react";
import * as RN from "react-native";

import s, { configureVariables } from "@borjomeeee/rn-styles";

configureVariables({
  black: "#000000",
});

const AwesomeStylingScreen = () => {
  return (
    <RN.View style={s(`fill aic jcc`)}>
      <RN.View style={s(`w:100 h:100 bgc:#ff0000`)}>
        <RN.Text style={s(`fsz24 c:black`)}>Hello, world!</RN.Text>
      </RN.View>
    </RN.View>
  );
};
```

## TODO

- [x] Decimal numbers support
- [ ] Extend default list styles
- [ ] Work with colors more nicely
- [ ] Conduct perfomance testing
