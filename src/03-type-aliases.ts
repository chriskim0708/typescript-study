// 기본 타입 별칭
type Point = {
  x: number;
  y: number;
};

// 유니온 타입
type Status = "ready" | "loading" | "error";

// 인터섹션 타입 (타입 결합)
type Admin = {
  id: number;
  role: "admin";
};

type UserType = {
  id: number;
  email: string;
  name: string;
};

type AdminUser = Admin & UserType;

// 제네릭 타입 별칭
type List<T> = T[];
type Pair<T, U> = {
  first: T;
  second: U;
};

// 타입 별칭 활용 예제
const position: Point = { x: 10, y: 20 };
const currentStatus: Status = "loading";

const adminUser: AdminUser = {
  id: 1,
  role: "admin",
  email: "admin@example.com",
  name: "John Doe",
};

const numberList: List<number> = [1, 2, 3];
const pair: Pair<string, number> = {
  first: "key",
  second: 123,
};

// 함수 타입 별칭
type Operation = (x: number, y: number) => number;

const add: Operation = (x, y) => x + y;
const multiply: Operation = (x, y) => x * y;

console.log("Type Aliases Example:", {
  position,
  currentStatus,
  adminUser,
  numberList,
  pair,
  addResult: add(5, 3),
  multiplyResult: multiply(4, 2),
});
