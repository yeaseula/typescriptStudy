/**
 * 선언 합침
 */

//type과 달리 interface는 동일한 이름의 인터페이스 선언 시 합쳐집니다

interface Person {
    name:string;
}

interface Person {
    //name: number; //후속 속성 선언에 같은 타입을 선언해야합니다..
    age: number;
}

const person:Person = {
    name: '',
    age:12
}

/**
 * 모듈 보강에서 이러한 인터페이스 선언 합침을 사용할 수 있습니다.
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib:Lib = {
    a:1,
    b:2,
    c:"hello" // 사용자가 c를 사용하고 싶을 때가 있을텐데, 이럴 때 보강할 수 있습니다.
}