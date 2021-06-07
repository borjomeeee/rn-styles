# rn-styles

This lib i use in my work for easy styling components in react-native. This idea i took from <https://github.com/farwayer/react-native-tstyles> 

## Installation

```js
yarn add @borjomeeee/rn-styles
// npm i @borjomeeee/rn-styles --save
```

## Example of usage

Now lib support number and strings parameters <b>(String parameter can be only a color - #ffffff or #ffffff90 format!)</b>

```jsx
import React from "react"
import * as RN from "react-native"

import s from "@borjomeeee/rn-styles"

const TEXT_COLOR = '#ffffff' // also can use #ffffff90 syntax

const AwesomeStylingScreen = () => {
    return (
        <RN.View style={s(`fill aic jcc`)}>
            <RN.View style={s(`w100 h100 bgc#000000`)}>
                <RN.Text style={s(`fsz24 c${TEXT_COLOR}`)}>Hello, world!</RN.Text>
            </RN.View>
        </RN.View>
    );
}
```

## TODO

- [ ] Decimal numbers support
- [ ] Extend default list styles
- [ ] Work with colors more nicely
- [ ] Conduct perfomance testing