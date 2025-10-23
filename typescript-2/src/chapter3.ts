/**대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 */

//합집합 -> Union, 타입은 무한대로 넣을 수 있습니다.

let a : string | number;
a = 1;
a = 'hello'

let arr:(number | string | boolean)[] = [1, 'hello', false];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    lang: string;
}

/**
 * Dog와 Person은 교집합을 갖고있습니다.
 * 서로가 서로의 슈퍼or서브타입이 아닙니다.
 * 아래 union 1,2,3,4 객체를 교집합 다이어그램으로 이해해보면 쉽습니다.
 */
type Union1 = Dog | Person

let union1 : Union1 = {
    name: "",
    color: ""
}

let union2 : Union1 = {
    name: "",
    lang: ""
}

let union3 : Union1 = {
    name: "",
    color: "",
    lang: ""
}

// let union4 : Union1 = {
//     name: ""
// }

// 교집합 타입

//앗 never타입이 됩니다..
//웬만하면 변수 교집합 타입은 never가 됩니다.
let variable:number & string;


/**
 * 그래서 intersection은 객체에서 주로 사용합니다
 * Dog2, Person2 타입 모두에 해당하는 객체를 만들어봅니다.
 * 일반적으로 생각하는 교집합은 공통 부분을 뜻하지만
 * type 교집합은 개념이 약간 다릅니다.
 * 여기에도 해당되고, 저기에도 해당되는 것을 골라야합니다.
 */
type Dog2 = {
    name: string;
    color: string;
}

type Person2 = {
    name: string;
    lang: string;
}

type Intersection = Dog & Person;

let intersection1 : Intersection = {
    name: "",
    color: "",
    lang: ""
}