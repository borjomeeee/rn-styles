export { s as default } from "./main";
export { configureStylesheet, configureVariables } from "./helpers";

export {
  parseOnlyColor,
  parseOnlyEmptyString,
  parseOnlyFloat,
  parseOnlyInteger,
  parseOnlyPercent,
} from "./parse";

// -  Добавить тестов
// -  Добавить недостающую типизацию
// -  Добавить возможность вставлять значение стиля в скобки,
//    чтобы указание отрицательных и дробных чисел было более читабельным
