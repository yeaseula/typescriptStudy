/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입->좁은타입으로 타입을 좁힙니다
 */

type Person = {
    name:string;
    age:number;
}

//value 타입에 따라 반환값을 다르게 해봅니다
function func(value: number | string | Date | null | Person) {
    value; //조건문 밖에서 value는 number | string 의 유니온 타입
    if(typeof value === 'number') {
        console.log(value.toFixed())
        /**
         * 이 스코프에서는 value타입이 number타입임이 보장됩니다.
         * 때문에 value는 number타입으로 좁혀질 수 있습니다.
         * 이 스코프를 "타입가드" 라고 부릅니다.
         */
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase())
    } else if (value instanceof Date) {
        //value 가 Date의 instance인가?
        console.log(value.getTime())
    }
    /**
     * 주의점은 아래처럼 우항에 오는 것이 타입이 되어서는 안됩니다.
     * class여야합니다.
     * 해당 조건문 =>value는 Person class가 찍어낸 instance이냐? 라는 것을 물어보는 것입니다.
     */
    // else if (value instanceof Person) {
    //     console.log(value.age)
    // }
    else if (value && 'age' in value) {
        console.log(value.age)
    }
}