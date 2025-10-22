//any
//특정 변수의 타입을 확실히 모를 때 사용합니다

let anyvar:any = 10;
anyvar = 'hello'
anyvar = ()=>{}

let num: number = 10;
num = anyvar // 오류발생하지 않습니다

anyvar.toUpperString()
//any 타입은 타입스크립트의 타입 검사를 다 통과할 수 있습니다
//하지만 런타임에서 오류가 발생할 수 있으니 주의해야합니다.

//unknown
let unknownVar:unknown;
unknownVar = 10;
unknownVar = "hello"
unknownVar = () => {}

//num = unknownVar // unknown type은 다른 변수에 할당 불가입니다
//함수, 연산도 불가능합니다

//따라서, any타입을 사용하기보단 unknown을 사용하며 타입좁히기를 활용하는 게 바람직합니다.