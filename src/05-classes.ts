// 기본 클래스 정의
// TypeScript 클래스는 프로퍼티, 생성자, 메서드를 포함할 수 있음
class Animal {
  // 접근 제어자
  // private: 클래스 내부에서만 접근 가능
  // readonly: 초기화 후 변경 불가능
  private readonly id: number;

  // protected: 이 클래스와 상속받은 클래스에서만 접근 가능
  protected name: string;

  // public: 어디서나 접근 가능 (기본값)
  public age: number;

  // 생성자: 클래스 인스턴스를 생성할 때 호출됨
  // 매개변수에 접근 제어자를 사용하면 자동으로 프로퍼티가 선언됨
  constructor(name: string, age: number) {
    this.id = Math.random();
    this.name = name;
    this.age = age;
  }

  // public 메서드: 클래스의 동작을 정의
  // void는 반환값이 없음을 나타냄
  public makeSound(): void {
    console.log("Some sound");
  }
}

// 상속: extends 키워드를 사용하여 다른 클래스의 특성을 상속받음
class Dog extends Animal {
  // private 프로퍼티: 캡슐화를 통해 클래스 내부 상태를 보호
  private breed: string;

  // 생성자에서 super를 호출하여 부모 클래스의 생성자를 실행
  // 반드시 자식 클래스의 생성자에서 가장 먼저 호출해야 함
  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  // 메서드 오버라이드: 부모 클래스의 메서드를 재정의
  public makeSound(): void {
    console.log("Woof!");
  }

  // getter: 프로퍼티처럼 접근 가능한 메서드
  // 복잡한 계산이나 캡슐화된 프로퍼티에 접근할 때 유용
  get dogBreed(): string {
    return this.breed;
  }

  // protected 멤버는 상속받은 클래스에서 접근 가능
  public introduceSelf(): string {
    return `I am ${this.name}`;
  }
}

// 추상 클래스: 직접 인스턴스화할 수 없고 상속으로만 사용 가능
// 공통 기능을 정의하고 자식 클래스에서 구체적인 구현을 강제함
abstract class Shape {
  // 추상 메서드: 반드시 자식 클래스에서 구현해야 함
  abstract getArea(): number;

  // 일반 메서드도 포함할 수 있음
  displayArea(): void {
    console.log(`Area: ${this.getArea()}`);
  }
}

// 추상 클래스를 상속받는 구체 클래스
class Circle extends Shape {
  constructor(private radius: number) {
    // super()를 호출하지 않으면:
    // 1. 컴파일 에러 발생: "Constructors for derived classes must contain a 'super' call"
    // 2. 부모 클래스의 초기화가 이루어지지 않아 부모의 프로퍼티나 메서드를 사용할 수 없음
    // 3. TypeScript는 클래스 상속 시 반드시 super()를 첫 줄에서 호출하도록 강제함
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

// 추상 클래스 사용 예제
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

circle.displayArea(); // "Area: 78.54..."
rectangle.displayArea(); // "Area: 24"

// 인터페이스: 클래스가 특정 계약을 준수하도록 강제
// implements 키워드를 사용하여 인터페이스 구현
interface Walkable {
  walk(): void;
}

// 인터페이스 구현: 인터페이스에 정의된 모든 메서드를 구현해야 함
class Person implements Walkable {
  walk(): void {
    console.log("Walking...");
  }
}

// 클래스 사용 예제
const dog = new Dog("뭉치", 3, "진돗개");
console.log("Classes Example:", {
  dogBreed: dog.dogBreed, // getter 사용
  introduction: dog.introduceSelf(),
  age: dog.age, // public 멤버는 직접 접근 가능
  // dog.id는 private이므로 접근 불가
  // dog.name은 protected이므로 접근 불가
});
