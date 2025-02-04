// 원시형 - 기본형 타입

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // 말도 안되는 사칙연산을 사용할 때

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // 템플릿 리터럴

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다) - 개발자가 직접 변수가 없음을 표현
let empty = null;

// 5. Undefined Type : 초기화를 실패했거나 없는 값을 불러왔을 때
let none;
console.log(none);
