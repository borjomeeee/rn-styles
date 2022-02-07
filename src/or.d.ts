export function or<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7>(
  f7: (...args: TArgs) => R7,
  f6: (...args: TArgs) => R6,
  f5: (...args: TArgs) => R5,
  f4: (...args: TArgs) => R4,
  f3: (...args: TArgs) => R3,
  f2: (...args: TArgs) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R7 | R6 | R5 | R4 | R3 | R2 | R1;
export function or<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7>(
  f7: (...args: TArgs) => R7,
  f6: (...args: TArgs) => R6,
  f5: (...args: TArgs) => R5,
  f4: (...args: TArgs) => R4,
  f3: (...args: TArgs) => R3,
  f2: (...args: TArgs) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R7 | R6 | R5 | R4 | R3 | R2 | R1;
export function or<TArgs extends any[], R1, R2, R3, R4, R5, R6>(
  f6: (...args: TArgs) => R6,
  f5: (...args: TArgs) => R5,
  f4: (...args: TArgs) => R4,
  f3: (...args: TArgs) => R3,
  f2: (...args: TArgs) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R6 | R5 | R4 | R3 | R2 | R1;
export function or<TArgs extends any[], R1, R2, R3, R4, R5>(
  f5: (...args: TArgs) => R5,
  f4: (...args: TArgs) => R4,
  f3: (...args: TArgs) => R3,
  f2: (...args: TArgs) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R5 | R4 | R3 | R2 | R1;
export function or<TArgs extends any[], R1, R2, R3, R4>(
  f4: (...args: TArgs) => R4,
  f3: (...args: TArgs) => R3,
  f2: (...args: TArgs) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R4 | R3 | R2 | R1;
export function or<TArgs extends any[], R1, R2, R3>(
  f3: (...args: TArgs) => R3,
  f2: (...args: TArgs) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R3 | R2 | R1;
export function or<TArgs extends any[], R1, R2>(
  f2: (...args: TArgs) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R2 | R1;
export function or<TArgs extends any[], R1>(
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R1;
