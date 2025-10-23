/**
 * 타입 단언
 */

type Person = {
    name:string;
    age:number;
}

let person = {} as Person; // Person 타입으로 간주합니다.
person.name = 'cat'
person.age = 99

type Dog = {
    name:string;
    color:string;
}

let dog = {
    name:'돌돌이',
    color:'brown',
    breed: '진도',   //초과 프로퍼티 검사가 발동해 오류가 납니다..
} as Dog


/**
 * 타입 단언의 규칙
 * 값 as 단언
 * A as B
 * A가 B의 슈퍼타입 or 서브타입 이어야 합니다.
 */

let num1 = 10 as never; //가능 => 10(number)는 never의 슈퍼타입
let num2 = 10 as unknown // 가능 => unknown은 10(number)의 슈퍼타입
//let num3 = 10 as string; // 불가능 => number와 string은 슈퍼 서브 관계가 아닙니다.

/**
 * const 단언
 */

let numA = 10 //number타입 => let은 타입 추론이 가능합니다
let numAA = 10 as const // 10리터럴타입, 마치 const 변수로 선언된 것과 같은 효과를 줍니다.

let cat = {
    name: "야옹",
    color: "yellow"
} as const;     // 객체에 as const 선언 시 수정, 재할당 불가하므로 readonly 속성이 됩니다.

/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
}

let post:Post = {
    title: '게시글',
    author: 'admin'
}

const len : number = post.author?.length
// 옵셔널 체이닝이 사용됩니다. 즉, 이 값은 undefined 될 가능성이 있습니다.

const len2 : number = post.author!.length
// Non Null단언을 사용합니다. 즉, ? 대신 !를 사용합니다.