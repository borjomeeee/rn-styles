import { FlexStyle, TextStyle, ViewStyle, ImageStyle } from "react-native";

export type IStyles = FlexStyle | TextStyle | ViewStyle | ImageStyle;

export type StyleConstrucotorWithArg<T, R> = (arg: T) => R;
export type IStyleSheet = Record<
  string,
  StyleConstrucotorWithArg<string, IStyles>
>;
