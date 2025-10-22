//원시 타입

//number
let num1: number = 123
//: type 주석, annotation 입니다

let num2: number = 0.12345
let num3: number = Infinity
let num4: number = -Infinity
let num5: number = NaN

//num1 = 'hello' // number type에 문자열이나
//num1.toString() // string func 넣으면 에러

//string
let str1: string = 'hello'
let str2: string = 'its me'
let str3: string = `hello ${num1}`

//boolean
let bool1:boolean = true
let bool2:boolean = false


//null과 undefined도 타입이 따로 있습니다
//null
let null1: null = null

//undefined
let nude1: undefined = undefined

// 임시로 null을 넣으려고 할 때
// tsconfig [strictNullChecks: false] option값 변경으로 가능
// null값을 엄격하게 검사하지 않는다 !
//let numA: number = null

//literal(리터럴)
let numA: 10 = 10
//이제부터 numA에 다른 값은 넣을 수 없습니다 ..

let strA:'say' = 'say'
let boolA:true = true

//number외의 string, boolean으로도 리터럴 타입 지정이 가능합니다