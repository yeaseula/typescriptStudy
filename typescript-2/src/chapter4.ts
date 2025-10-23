/**
 * 타입 추론
 *
 * 변수에 타입이 정의되어있지 않을 경우에도
 * 알아서 초기값을 기준으로 변수의 타입을 추론해줍니다.
 */

let a = 10 //number로 타입 추론
let b = "hellog" //string으로 타입 추론
let c = {
    id: 1,
    name: "kim"
}
let {id,name} = c

//함수 매개변수,반환값도 추론 가능합니다
function func(message = 'hello') {
    return 'hello'
}

//이런 상황은 어떨까?

let d; //암묵적 any타입으로 추론
d=10;
d.toFixed() //number 타입이 됐습니다..

d = 'hello'
d.toUpperCase() //string 타입이 됐습니다..

/**
 * 타입을 지정하지 않으면 이렇게 any타입이 진화하기때문에
 * 타입스크립트를 사용하는 목적과는 맞지 않습니다.
 */


//const 변수의 경우
const num = 10;
const str = 'hello'
const obj = {
    name:'st',
    age:11
}