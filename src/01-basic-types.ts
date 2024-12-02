let str: string = "Hello";
let num: number = 123;
let bool: boolean = true;
let arr: number[] = [1, 2, 3];
let tuple: [string, number] = ["age", 25];

let nullValue: null = null;
let undefinedValue: undefined = undefined;
let anyValue: any = "anything";
let unknownValue: unknown = 4;

let obj: object = { name: "John" };

let unionType: string | number = "hello";
unionType = 42;

let literalType: "success" | "error" = "success";

let sym1: symbol = Symbol();
let sym2: symbol = Symbol("key");
const sym3: unique symbol = Symbol.for("globalKey");

let symbolObj = {
  [sym2]: "value for symbol key",
};

console.log("Basic Types Example:", {
  str,
  num,
  bool,
  arr,
  tuple,
  nullValue,
  undefinedValue,
  anyValue,
  unknownValue,
  obj,
  unionType,
  literalType,
  sym1: sym1.toString(),
  sym2: sym2.toString(),
  sym3: sym3.toString(),
  symbolObjKey: symbolObj[sym2],
});
