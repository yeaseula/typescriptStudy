/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지?
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 */

// 기준1. 반환값 호환 여부

type A = ()=>number;
type B = ()=>10;

let a:A = () => 10;
let b:B = () => 10;

a = b;
//b = a //error : number 타입을 number 리터럴 타입으로 다운캐스팅이 안되기때문

// 기준2. 매개변수 호환 여부
// 2-1. 매개변수의 갯수 같을때

type C = (value:number) => void;
type D = (value:10) => void;

let c:C = (value) => {}
let d:D = (value) => {}

//c = d;
/**
 * 매개변수를 업캐스팅하면 오류가 납니다..
 * 만약 매개변수를 객체 형태로 받았다고 가정해보면 이유를 알 수 있습니다.
 */
d = c;

// 2-2 매개변수의 갯수 다를때

type Func1 = (a:number,b:number) => void;
type Func2 = (a:number) => void;

let func1:Func1 = (a,b) => {};
let func2:Func2 = (a) => {};

func1 = func2;
//func2 = func1;

//func1은 매개변수 2개, func2는 매개변수 1개입니다.
//매개변수 2개짜리함수를 1개짜리로 지정된 함수에 넣으면 당연히 오류가 발생합니다.