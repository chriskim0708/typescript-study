// 숫자 열거형
enum Direction {
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}

// 문자열 열거형
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

// const 열거형 (컴파일 후 제거됨)
const enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
}

// 복합 열거형
enum ApiResultStatus {
  Success = "SUCCESS",
  Error = "ERROR",
  Pending = 0,
  Complete = 1,
}

// 열거형 키 union 타입
type ApiResultStatusKey = keyof typeof ApiResultStatus;

// 열거형 값 union 타입
// 다만, 이런 방식은 string 타입으로 변환되어 사용되기 때문에 열거형 값을 직접 사용하는 것이 좋다.
type ApiResultStatusValue = `${ApiResultStatus}`;

// 열거형 사용 예제
const myDirection: Direction = Direction.Up;
const myColor: Color = Color.Red;
const statusCode: HttpStatus = HttpStatus.OK;

// 열거형을 객체 타입으로 사용
interface ApiState {
  status: ApiResultStatus;
  code: HttpStatus;
}

const apiState: ApiState = {
  status: ApiResultStatus.Success,
  code: HttpStatus.OK,
};

console.log("Enums Example:", {
  myDirection,
  myColor,
  statusCode,
  apiState,
  // 열거형 역방향 매핑 (숫자 열거형만 가능)
  directionName: Direction[1], // "Up"
});
