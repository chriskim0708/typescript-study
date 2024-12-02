// 기본 인터페이스
interface User {
  readonly id: number;
  name: string;
  age?: number; // 선택적 프로퍼티
  email: string;
}

// 함수 타입 인터페이스
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 클래스 타입 인터페이스
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

// 인터페이스 구현 예제
const user: User = {
  id: 1,
  name: "김철수",
  email: "cheolsu@example.com",
};

const mySearch: SearchFunc = (src: string, sub: string): boolean => {
  return src.search(sub) > -1;
};

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
}

// 인터페이스 확장
interface Employee extends User {
  employeeId: string;
  department: string;
}

// 제네릭 인터페이스 추가
interface Container<T> {
  value: T;
  getValue(): T;
}

// 제네릭 인터페이스 구현 예제
class NumberContainer implements Container<number> {
  constructor(public value: number) {}

  getValue(): number {
    return this.value;
  }
}

// 함수 파라미터로 제네릭 인터페이스 사용
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

function handleResponse<T>(response: ApiResponse<T>): T {
  if (response.status === 200) {
    return response.data;
  }
  throw new Error(response.message);
}

console.log("Interfaces Example:", {
  user,
  searchResult: mySearch("Hello World", "World"),
  clock: new Clock(),
});

// 사용 예제
const numContainer = new NumberContainer(42);
const apiResponse: ApiResponse<string[]> = {
  data: ["item1", "item2"],
  status: 200,
  message: "성공",
};

console.log("Generic Interface Examples:", {
  containerValue: numContainer.getValue(),
  responseData: handleResponse(apiResponse),
});
