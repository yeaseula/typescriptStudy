/**
 * 함수 타입 표현식
 */

//이렇게 범용 타입으로 정해두면 언제든 재활용 가능합니다
type Operation = (a:number, b:number) => number;

const add:Operation = (a,b) => a+b;
const sub:Operation =  (a,b) => a-b;
const multiply:Operation = (a,b) => a*b;

/**
 * 호출 시그니처(콜 시그니처)
 */

type Operation2 = {
    (a: number, b: number): number;
}

const add2:Operation2 = (a,b) => a+b;

function sub2(a:number, b:number):number {
    // (a:number, b:number):number 이 부분을 떼서 Operation2에 넣으면 됩니다.
    return a-b
}