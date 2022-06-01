// Exclude null and undefined from T
export type NotEmpty<T> = T extends null | undefined ? never : T;

type Level0 = NotEmpty<string | null>;
type Level1 = NotEmpty<string> | NotEmpty<null>
type Level2 = (string extends null | undefined ? never : string)
    | (null extends null | undefined ? never : string);
type Level3 = string | never;
type FinalResult = string;

// anything with never turns out to itself.