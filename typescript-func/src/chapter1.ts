//함수 타입 정의

//함수를 설명하는 가장 좋은 방법?
//어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명한다.

//typescript -> 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지 ?
function func(a:number,b:number):number {
    return a + b
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a:number,b:number):number => { return a+ b}

/**
 * 함수의 매개변수
 * 선택적 매개변수는 필수 매개변수(들)의 뒤에 위치해야합니다.
 */

function introduce(name = 'cat', age?:number) {
    console.log(`${name}입니다`)
    if(typeof age === 'number') {
        console.log(`${age}살 입니다`)
    }
}

introduce('dog')

function getSum(...rest:number[]) {
    let sum = 0;
    rest.forEach((num)=> sum+=num)

    return sum
}

getSum(1,2,3) // 6
getSum(1,2,3,4,5) // 15