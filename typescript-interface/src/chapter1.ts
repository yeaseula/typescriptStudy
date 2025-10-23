/**
 * interface -
 */

//기본형태입니다
interface Person {
    name:string;
    age:number;
    sayHi() : void; //호출 시그니처 문법으로도 가능
    sayHi(a:number, b:number) : void; // 호출시그니처 문법으로 오버로드 가능
}

const person:Person = {
    name:'elsa',
    age:100,
    sayHi: function() {

    }
}